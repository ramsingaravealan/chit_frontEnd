import { Component, OnInit, OnDestroy, AfterViewInit, Input, Output, ViewChild, ElementRef, EventEmitter, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';

declare var $: any;
declare var google: any;
declare var moment: any;

@Component({
  selector: 'app-time-picker',
  templateUrl: './time-picker.component.html',
  styleUrls: ['./time-picker.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TimePickerComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => TimePickerComponent),
      multi: true
    }
  ]
})
export class TimePickerComponent implements OnInit, AfterViewInit, OnDestroy, ControlValueAccessor {
  private mTimeValue: any = '';

  get timeValue(): any {
    return this.mTimeValue;
  }
  @Input()
  set timeValue(value: any) {
    if (this.mTimeValue === value) {
        return;
    }
    this.mTimeValue = value;
    $('#' + this.cId).timepicker('setTime', moment(this.mTimeValue, 'HH:mm:ss').format('hh:mm A'));
    this.timeValueChange.emit(this.mTimeValue);
  }
  @Input() cId = Math.random();
  @Output() timeValueChange = new EventEmitter<any>();
  stateReady = false;
  @Input() required = false;
  onChange: any = () => {};
  onTouch: any = () => {};
  constructor() { }

  validate({ value }: FormControl) {
    // console.log(value);
    if (this.required === true) {
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
        this.mTimeValue = null;
        $('#' + this.cId).timepicker('setTime', moment().format('hh:mm A'));
      } else {
        this.mTimeValue = obj;
        $('#' + this.cId).timepicker('setTime', moment(this.mTimeValue, 'HH:mm:ss').format('hh:mm A'));
      }
    } else {
      this.mTimeValue = null;
      $('#' + this.cId).timepicker('setTime', moment().format('hh:mm A'));
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
    // const today = moment().format("h:mm A");
    $('#' + this.cId).timepicker({
      defaultTIme: false,
      use24hours: true,
      format: 'HH:mm:ss',
      icons: {
        up: 'mdi mdi-chevron-up',
        down: 'mdi mdi-chevron-down'
      }
    }).on('changeTime.timepicker', (e) => {
      const id = e.target.id;
      console.log($('#' + id).val());
      const v = moment($('#' + id).val(), 'hh:mm A').format('HH:mm:ss');
      console.log('tv: ' + this.timeValue + ' v:' + v);
      if (this.mTimeValue !== v) {
        this.mTimeValue = v;
        this.onChange(this.mTimeValue);
        this.timeValueChange.emit(this.mTimeValue);
      }
    });
    if (this.mTimeValue === '') {
      this.mTimeValue = moment().format('HH:mm:ss');
      $('#' + this.cId).timepicker('setTime', moment(this.mTimeValue, 'HH:mm:ss').format('hh:mm A'));
    } else {
      $('#' + this.cId).timepicker('setTime', moment(this.mTimeValue, 'HH:mm:ss').format('hh:mm A'));
    }
  }

  ngOnDestroy() {}


}
