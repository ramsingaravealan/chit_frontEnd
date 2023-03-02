import { Component, OnInit, OnDestroy, AfterViewInit, Input, Output, ViewChild, ElementRef, EventEmitter, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';

declare var $: any;
declare var google: any;
declare var moment: any;

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DatePickerComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => DatePickerComponent),
      multi: true
    }
  ]
})
export class DatePickerComponent implements OnInit, AfterViewInit, OnDestroy, ControlValueAccessor {
  private mDateValue: any;
  @Input() disabled = 'false';
  get dateValue(): any {
    return this.mDateValue;
  }
  @Input()
  set dateValue(value: any) {
    if (this.mDateValue === value) {
        return;
    }
    this.mDateValue = value;
    $('#' + this.cId).datepicker('setDate', moment(this.mDateValue, 'YYYY-MM-DD').toDate());
    this.change.emit(this.mDateValue);
  }
  @Input() required = false;
  @Input() cId = Math.random();
  @Output() change = new EventEmitter<any>();
  stateReady = false;
  onChange: any = () => {};
  onTouch: any = () => {};
  constructor() { }

  validate({ value }: FormControl) {
    // console.log(value);
    if (this.required) {
      if (value === 'Invalid date' || value === null) {
        return {
          invalid: true
        };
      }
    }

    return true;

  }

  writeValue(obj: any): void {

    if (obj) {
      if (obj === '') {
        this.mDateValue = null;
        $('#' + this.cId).datepicker('setDate', moment().toDate());
      } else {
        this.mDateValue = obj;
        $('#' + this.cId).datepicker('setDate', moment(this.mDateValue, 'YYYY-MM-DD').toDate());
      }
    } else {
      this.mDateValue = null;
      $('#' + this.cId).datepicker('setDate', moment().toDate());
    }

    // this.onChange(this.mDateValue);
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
    $('#' + this.cId).datepicker({
      autoclose: true,
      todayHighlight: true,
      format: 'DD, d MM, yyyy',
      orientation: 'top'
    }).on('changeDate', (e) => {
      // console.log(e);
      const ddd = moment(e.target.value, 'dddd, D MMMM, YYYY');

      console.log(ddd.format('YYYY-MM-DD'));
      // this.search_sent_on = ddd.format("YYYY-MM-DD");

      if (this.mDateValue !== ddd.format('YYYY-MM-DD')) {
        this.mDateValue = ddd.format('YYYY-MM-DD');
        this.change.emit(this.mDateValue);
        this.onChange(this.mDateValue);
      }

    });
    // this.date = v;
    // if (this.mDateValue === '') {
    //   this.mDateValue = moment().format('YYYY-MM-DD');
    //   $('#' + this.cId).datepicker('setDate', moment().toDate());
    // } else {
    //   $('#' + this.cId).datepicker('setDate', moment(this.mDateValue, 'YYYY-MM-DD').toDate());
    // }
  }

  ngOnDestroy() {}


}
