import { Component, OnInit, OnDestroy, AfterViewInit, Input, Output, ViewChild, ElementRef, EventEmitter, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { AppService } from 'src/app/app.service';

declare var $: any;
declare var google: any;
declare var moment: any;

@Component({
  selector: 'app-select-mulitple',
  templateUrl: './select-mulitple.component.html',
  styleUrls: ['./select-mulitple.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectMulitpleComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => SelectMulitpleComponent),
      multi: true
    }
  ]
})
export class SelectMulitpleComponent implements OnInit, AfterViewInit, OnDestroy, ControlValueAccessor {
  private mInitialValues = [];
  private mPayloads = [];
  public required = 'false';
   @Input() disabled = false;
  get initialValues(): any {
    return this.mInitialValues;
  }
  @Input()
  set initialValues(value: any) {
    if (this.mInitialValues === value) {
      return;
    }
    this.mInitialValues = value;
    this.fetchEndusersSeclect2(this.mInitialValues);
    this.change.emit(this.mInitialValues);
  }
  get payload(): any {
    return this.mPayloads;
  }
  @Input()
  set payload(value: any) {
    if (!value) {
      return;
    }
    this.mPayloads = value;
    console.log(this.mPayloads);
  }
  @Input() cId = Math.random();
  @Input() placeholder = '';
  private mUrl = '';
  get url(): any {
    return this.mUrl;
  }
  @Input()
  set url(value: any) {
    if (value === '') {
      return;
    }
    this.mUrl = value;
    // this.fetchEndusersSeclect2(this.mInitialValues);
    // this.change.emit(this.mInitialValues);
  }
  @Output() change = new EventEmitter<any>();
  stateReady = false;
  onChange: any = () => {};
  onTouch: any = () => {};
  constructor(private app: AppService) { }


  validate({ value }: FormControl) {
    console.log(typeof (this.required) + this.required + ' sel');
    if (this.required === 'true') {
        if (value.length === 0) {
          console.log(typeof (value) + value + ' invalid');
          return {
            invalid: true,
          };
        }
    }

    return true;

  }

  writeValue(obj: any): void {
    console.log('value written ' + obj);
    if (obj) {
      this.mInitialValues = obj;
    } else {
      this.mInitialValues = [];
      this.onChange(this.mInitialValues);
      this.change.emit(this.initialValues);
    }
    this.fetchEndusersSeclect2(this.mInitialValues);
  }
  registerOnChange(fn: any) {
    this.onChange = fn;
    // console.log(fn);
  }

  registerOnTouched(fn: any) {
    this.onTouch = fn;
  }


  ngOnInit() {
  }

  ngAfterViewInit() {
    this.fetchEndusersSeclect2(this.mInitialValues);
    $('#' + this.cId).on('select2:select select2:unselect', (e) => {
      // const data = e.params.data;
      // console.log(data);
      const objects = [];
      $('#' + this.cId).select2('data').forEach(d => {
        objects.push({ id: d.id, text: d.text });
      });
      this.mInitialValues = objects;
      this.onChange(this.mInitialValues);
      this.change.emit(this.mInitialValues);
    });
    this.change.emit(this.mInitialValues);
  }

  private fetchEndusersSeclect2(initials = []) {
    // console.log(this.mUrl);
    if (this.mUrl !== '') {
      const selected = [];
      initials.forEach(element => {
        selected.push(element.id);
      });
      $('#' + this.cId).select2({
        data: initials,
        placeholder: ' ' + this.placeholder,
        // maximumSelectionLength: 2,
        ajax: {
          url: this.app.getSiteUrl() + this.mUrl,
          type: 'post',
          dataType: 'json',
          delay: 250,
          headers: {Authorization: this.app.getToken()},
          data: params => {
            const queryParameters = {
              term: params.term,
            };
            this.mPayloads.forEach(element => {
              queryParameters[element.id] = element.value;
            });
            console.log(queryParameters);
            return queryParameters;
          },
          processResults: (data) => {
            console.log(data);
            return {
              // tslint:disable-next-line:only-arrow-functions
              results: $.map(data.data, (item) => {
                return {
                  text: item.text,
                  id: item.id
                };
              })
            };
          },
          cache: true
        }

      });

      $('#' + this.cId).val(selected).trigger('change');
    }
  }

  ngOnDestroy() { }
}
