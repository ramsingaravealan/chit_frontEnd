import { Component, OnInit, OnDestroy, AfterViewInit, Input, Output, ViewChild, ElementRef, EventEmitter, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { AppService } from 'src/app/app.service';

declare var $: any;
declare var google: any;
declare var moment: any;

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => SelectComponent),
      multi: true
    }
  ]
})
export class SelectComponent implements OnInit, AfterViewInit, OnDestroy, ControlValueAccessor {

  private mInitialValues = '-1';
  private mPayloads = [];

  @Input() cId = Math.random();
  @Input() placeholder = '';
  @Input() disabled = 'false';
  @Input() required = 'false';
  private mUrl = '';
  private mSelectedUrl = '';

  get payload(): any {
    return this.mPayloads;
  }
  @Input()
  set payload(value: any) {
    if (!value) {
      return;
    }
    this.mPayloads = value;
    // console.log(this.mPayloads);
  }
  get url(): any {
    return this.mUrl;
  }
  @Input()
  set url(value: any) {
    if (value === '') {
      return;
    }
    this.mUrl = value;
  }

  get selectedUrl(): any {
    return this.mSelectedUrl;
  }
  @Input()
  set selectedUrl(value: any) {
    if (value === '') {
      return;
    }
    this.mSelectedUrl = value;
  }
  @Output() change = new EventEmitter<any>();
  stateReady = false;
  onChange: any = () => {};
  onTouch: any = () => {};
  constructor(private app: AppService) { }


  validate({ value }: FormControl) {
    // console.log(typeof (this.required) + this.required + ' sel');
    if (this.required === 'true') {
        if (value === '-1') {
          // console.log(typeof (value) + value + ' invalid');
          return {
            invalid: true,
          };
        }
    }

    return true;

  }

  writeValue(obj: any): void {
    // console.log('value written ' + obj);
    if (obj) {
      this.mInitialValues = obj;
    } else {
      this.mInitialValues = '-1';
      this.onChange(this.mInitialValues);
    }
    this.getSelected(this.mInitialValues);
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
    // this.fetchEndusersSeclect2(this.mInitialValues);
    this.getSelected(this.mInitialValues);
    $('#' + this.cId).on('select2:select select2:unselect', (e) => {
      const data = e.params.data;
      // console.log(data);
      let s = '-1';
      $('#' + this.cId).select2('data').forEach(d => {
        s = d.id;
      });
      this.mInitialValues = s;
      // console.log(this.mInitialValues + ' is picked');
      this.onChange(this.mInitialValues);
      this.change.emit(this.mInitialValues);
    });
    this.onChange(this.mInitialValues);
  }

  private getSelected(selectedId) {
    if (this.mSelectedUrl !== '') {
      const p = {id: selectedId };
      this.mPayloads.forEach(element => {
        p[element.id] = element.value;
      });
      this.app.getQuery(this.mSelectedUrl, p).then(result => {
        // console.log(result);
        if (result.status === 'OK') {
          this.fetchEndusersSeclect2(result.data);
        }
      });
    } else {
      this.fetchEndusersSeclect2();
    }

  }

  private fetchEndusersSeclect2(initials = []) {
    // console.log(this.mUrl);
    // console.log(this.mPayloads);
    if (this.mUrl !== '') {
      const selected = [];
      initials.forEach(element => {
        selected.push(element.id);
      });
      $('#' + this.cId).select2({
        data: initials,
        placeholder: ' ' + this.placeholder,
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
            // console.log(queryParameters);
            return queryParameters;
          },
          processResults: (data) => {
            console.log(data);
            const sel = { text: this.placeholder, id: '-1',value:'-1' };
            const sdata = [sel].concat(data.data);
            return {
              // tslint:disable-next-line:only-arrow-functions
              results: $.map(sdata, (item) => {
                return {
                  text: item.text,
                  id: item.id,
                  value:item.value
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
