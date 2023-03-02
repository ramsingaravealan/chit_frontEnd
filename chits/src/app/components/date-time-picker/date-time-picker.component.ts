import { Component, OnInit, OnDestroy, AfterViewInit, Input, Output, ViewChild, ElementRef, EventEmitter, forwardRef } from '@angular/core';
import { FormControl, NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';

declare var $: any;
declare var google: any;
declare var moment: any;

@Component({
  selector: 'app-date-time-picker',
  templateUrl: './date-time-picker.component.html',
  styleUrls: ['./date-time-picker.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DateTimePickerComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => DateTimePickerComponent),
      multi: true
    }
  ]
})
export class DateTimePickerComponent implements OnInit, AfterViewInit, OnDestroy {
  private mDateTimeValue: any = '';
  get dateTimeValue(): any {
    return this.mDateTimeValue;
  }
  @Input()
  set dateTimeValue(value) {
    if (this.mDateTimeValue === value) {
      return;
    }
    this.mDateTimeValue = value;
    $('#' + this.cId).datetimepicker('update', moment(this.mDateTimeValue, 'YYYY-MM-DD HH:mm:ss').toDate());
    // $('#' + this.cId).datetimepicker('update', moment(this.mDateTimeValue, 'YYYY-MM-DD').toDate());
    this.change.emit(this.mDateTimeValue);
  }

  @Input() cId = Math.random();
  @Output() change = new EventEmitter<any>();
  stateReady = false;
  @Input() required = false;
  onChange: any = () => {};
  onTouch: any = () => {};
  constructor() { }

  validate({ value }: FormControl) {
    console.log(value);
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
        this.mDateTimeValue = moment().format('YYYY-MM-DD HH:mm:ss');
        $('#' + this.cId).datetimepicker('update', moment(this.mDateTimeValue, 'YYYY-MM-DD HH:mm:ss').toDate());
        // this.mDateTimeValue = moment().format('YYYY-MM-DD ');
        // $('#' + this.cId).datetimepicker('update', moment(this.mDateTimeValue, 'YYYY-MM-DD ').toDate());
      } else {
        this.mDateTimeValue = obj;
        $('#' + this.cId).datetimepicker('update', moment(this.mDateTimeValue, 'YYYY-MM-DD HH:mm:ss').toDate());
        // $('#' + this.cId).datetimepicker('update', moment(this.mDateTimeValue, 'YYYY-MM-DD ').toDate());
      }
    } else {
      this.mDateTimeValue = moment().format('YYYY-MM-DD HH:mm:ss');
      $('#' + this.cId).datetimepicker('update', moment(this.mDateTimeValue, 'YYYY-MM-DD HH:mm:ss').toDate());
      // this.mDateTimeValue = moment().format('YYYY-MM-DD ');
      // $('#' + this.cId).datetimepicker('update', moment(this.mDateTimeValue, 'YYYY-MM-DD ').toDate());
    }
    this.onChange(this.mDateTimeValue);

    this.change.emit(this.mDateTimeValue);
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
    $('#' + this.cId).datetimepicker({
       format: 'DD, d MM, yyyy',
      // format: 'yyyy-mm-dd',
      // format: 'dd-mm-yyyy',
      picktime:false,
      minView:2,
      showMeridian: true,
      autoclose: true,
      todayHighlight: true,
      orientation: 'top'
    }).on('changeDate', (e) => {
      this.mDateTimeValue = moment($('#' + e.target.id).val(), 'dddd, D MMMM, YYYY h:mm A').format('YYYY-MM-DD HH:mm:ss');
      // console.log(e);
      // this.mDateTimeValue = moment($('#' + e.target.id).val(), 'dddd, D MMMM,YYYY').format('DD-MM-YYYY ');
      this.change.emit(this.mDateTimeValue);
      this.onChange(this.mDateTimeValue);
      console.log(this.mDateTimeValue);
    });
    // this.date = v;
    if (this.mDateTimeValue === '') {
      this.mDateTimeValue = moment().format('YYYY-MM-DD HH:mm:ss');
      $('#' + this.cId).datetimepicker('update', moment(this.mDateTimeValue, 'YYYY-MM-DD HH:mm:ss').toDate());
      // this.mDateTimeValue = moment().format('YYYY-MM-DD ');
      // $('#' + this.cId).datetimepicker('update', moment(this.mDateTimeValue, 'YYYY-MM-DD').toDate());
    } else {
      $('#' + this.cId).datetimepicker('update', moment(this.mDateTimeValue, 'YYYY-MM-DD HH:mm:ss').toDate());
      // $('#' + this.cId).datetimepicker('update', moment(this.mDateTimeValue, 'YYYY-MM-DD ').toDate());
    }
  }

  ngOnDestroy() {}


}
