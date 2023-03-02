import { Component, OnInit, OnDestroy, AfterViewInit, Input, Output, ViewChild, ElementRef, EventEmitter } from '@angular/core';

declare var $: any;
declare var google: any;
declare var moment: any;

@Component({
  selector: 'app-date-range-picker',
  templateUrl: './date-range-picker.component.html',
  styleUrls: ['./date-range-picker.component.css']
})
export class DateRangePickerComponent implements OnInit, AfterViewInit, OnDestroy {
  private mFromDateValue: any;
  private mToDateValue: any;
  // @Input() fromDateValue = '';
  get fromDateValue(): any {
    return this.mFromDateValue;
  }
  @Input()
  set fromDateValue(value: any) {
    if (this.mFromDateValue === value) {
        return;
    }
    this.mFromDateValue = value;
    // $('#' + this.cId).data('daterangepicker').startDate(moment(this.mToDateValue, 'YYYY-MM-DD'));
    // $('#' + this.cId).datepicker('setDate', moment(this.mToDateValue, 'YYYY-MM-DD').toDate());
    // $('#' + this.cId).data('daterangepicker').startDate = moment(this.mFromDateValue);
    // this.fromDateValueChange.emit(this.mFromDateValue);
  }
  // @Input() toDateValue = '';
  get toDateValue(): any {
    return this.mToDateValue;
  }
  @Input()
  set toDateValue(value: any) {
    if (this.mToDateValue === value) {
        return;
    }
    this.mToDateValue = value;
    // $('#' + this.cId).data('daterangepicker').endDate(moment(this.mToDateValue, 'YYYY-MM-DD'));
    // $('#' + this.cId).datepicker('setDate', moment(this.mToDateValue, 'YYYY-MM-DD').toDate());

    // $('#' + this.cId).data('daterangepicker').endDate = moment(this.mToDateValue);
    // this.toDateValueChange.emit(this.mToDateValue);
  }
  @Input() cId = Math.random();
  @Output() fromDateValueChange = new EventEmitter<any>();
  @Output() toDateValueChange = new EventEmitter<any>();
  @Output() dateValueChange = new EventEmitter<any>();
  stateReady = false;
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    // $(elem)daterangepicker('startDate', moment());
    let day = moment();
    if (this.mFromDateValue === '') {
      this.mFromDateValue = moment().format('YYYY-MM-DD');
      day = moment(this.mFromDateValue, 'YYYY-MM-DD');
    } else {
      day = moment(this.mFromDateValue, 'YYYY-MM-DD');
    }
    let end = moment(this.mToDateValue, 'YYYY-MM-DD');
    if (this.mToDateValue === '') {
      this.mToDateValue = moment().format('YYYY-MM-DD');
      end = moment(this.mToDateValue, 'YYYY-MM-DD');
    } else {
      end = moment(this.mToDateValue, 'YYYY-MM-DD');
    }
    $('#' + this.cId).daterangepicker({
      locale: {
        format: 'MMMM D, YYYY'
      },
      startDate: day,
      endDate: end,
      buttonClasses: ['btn', 'btn-sm'],
      applyClass: 'btn-primary',
      cancelClass: 'btn-secondary',
      dateLimit: {
        days: 365
      }
    });
    $('#' + this.cId).on('apply.daterangepicker', (ev, picker) => {
      console.log('Inside ' + picker.startDate.format('YYYY-MM-DD'));
      this.mFromDateValue = picker.startDate.format('YYYY-MM-DD');
      this.mToDateValue = picker.endDate.format('YYYY-MM-DD');
      this.fromDateValueChange.emit(this.mFromDateValue);
      this.toDateValueChange.emit(this.mToDateValue);
      this.dateValueChange.emit({from: this.mFromDateValue, to: this.mToDateValue});
    });
    // this.date = v;
    // if (this.fromDateValue === '') {
    //   this.fromDateValue = moment().format('YYYY-MM-DD');
    //   $('#' + this.cId).datepicker('setDate', moment().toDate());
    // } else {
    //   $('#' + this.cId).datepicker('setDate', moment(this.dateValue, 'YYYY-MM-DD').toDate());
    // }
  }

  ngOnDestroy() {}


}
