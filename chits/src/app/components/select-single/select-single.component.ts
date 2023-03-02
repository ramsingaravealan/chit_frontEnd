import { Component, OnInit, OnDestroy, AfterViewInit, Input, Output, ViewChild, ElementRef, EventEmitter } from '@angular/core';
import { AppService } from 'src/app/app.service';

declare var $: any;
declare var google: any;
declare var moment: any;

@Component({
  selector: 'app-select-single',
  templateUrl: './select-single.component.html',
  styleUrls: ['./select-single.component.css']
})
export class SelectSingleComponent implements OnInit, AfterViewInit, OnDestroy {
  private mInitialValues = '-1';
  get initialValues(): any {
    return this.mInitialValues;
  }
  @Input()
  set initialValues(value: any) {
    if (this.mInitialValues === value) {
      return;
    }
    this.mInitialValues = value;

    // this.fetchEndusersSeclect2(this.mInitialValues);
    this.getSelected(this.mInitialValues);
    this.initialValuesChange.emit(this.mInitialValues);
  }
  @Input() cId = Math.random();
  @Input() placeholder = '';
  private mUrl = '';
  private mSelectedUrl = '';
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
  @Output() initialValuesChange = new EventEmitter<any>();
  stateReady = false;
  constructor(private app: AppService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    // this.fetchEndusersSeclect2(this.mInitialValues);
    this.getSelected(this.mInitialValues);
    $('#' + this.cId).on('select2:select select2:unselect', (e) => {
      const data = e.params.data;
      console.log(data);
      let s = '-1';
      // const objects = [];
      $('#' + this.cId).select2('data').forEach(d => {
        // objects.push({ id: d.id, text: d.text });
        s = d.id;
      });
      // this.mInitialValues = objects;
      this.mInitialValues = s;
      this.initialValuesChange.emit(this.mInitialValues);
    });
    this.initialValuesChange.emit(this.mInitialValues);
  }

  private getSelected(selectedId) {
    if (this.mSelectedUrl !== '') {
      this.app.getQuery(this.mSelectedUrl, { id: selectedId }).then(result => {
        console.log(result);
        if (result.status === 'OK') {
          this.fetchEndusersSeclect2(result.data);
        }
      });
    } else {
      this.fetchEndusersSeclect2();
    }

  }

  private fetchEndusersSeclect2(initials = []) {
    console.log(this.mUrl);
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
            console.log(queryParameters);
            return queryParameters;
          },
          processResults: (data) => {
            console.log(data);
            const sel = { text: this.placeholder, id: '-1' };
            const sdata = [sel].concat(data.data);
            return {
              // tslint:disable-next-line:only-arrow-functions
              results: $.map(sdata, (item) => {
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
