import { Component, OnInit, OnDestroy, AfterViewInit, Input, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { AppService } from '../app.service';

declare var $: any;
declare var moment: any;

@Component({
  selector: 'app-add-ch',
  templateUrl: './add-ch.component.html',
  styleUrls: ['./add-ch.component.css']
})
export class AddChComponent implements OnInit, OnDestroy, AfterViewInit {

  @ViewChild('baseForm') baseForm: NgForm;

  public actfilter = true;
  public inactfilter = false;

  public chits = [];

  public chit: any = {
    ac_id: '-1',
    ac_name: '-1',
    ac_chit_scheme: '-1',
    ac_chit_value: '-1',
    ac_no_of_members: '',
    ac_no_of_installment: '',
    ac_date_of_joining: '',
    ac_first_payment: '',
    // user_type: 'administrator',
    ac_log: '',
  };


  public loadingText = 'Save';
  // tslint:disable-next-line:variable-name
  public num_per_page = '10';
  // tslint:disable-next-line:variable-name
  public order_by = 'ac_id';
  public order = 'DESC';
  // tslint:disable-next-line:variable-name
  public start_from = 0;
  public count = 0;
  public received = -1;
  public displayCount = '';
  public dbPages = [];
  public activePage = 0;
  public search = '';
  public errorText = '';












  public message = '';
  public logs = [];
  public browse = 'Browse';
  public ac_name = '';
  public ac_chit_scheme = '';
  public ac_chit_value = '';
  public ac_name_payload = [
  ];
  public ac_chit_scheme_payload = [
  ];
  public ac_chit_value_payload = [
  ];

  constructor(public app: AppService, private router: Router, private location: Location) {

  }

  ngOnInit() {

  }

  ngOnDestroy() {

  }

  ngAfterViewInit() {
    this.init();
  }

  public searchPayloadsChanged() {
  }

  public payloadsChanged() {
  }

  public init() {
    this.chits = [];
    this.reset();
    this.getAllChits();
  }

  public reset() {
    this.chit = {
      ac_id: '-1',
      ac_name: '-1',
      ac_chit_scheme: '-1',
      ac_chit_value: '-1',
      ac_no_of_members: '',
      ac_no_of_installment: '',
      ac_date_of_joining: '',
      ac_first_payment: '',
      // user_type: 'administrator',
      ac_log: '',
    };
    this.baseForm.form.markAsPristine();
    this.baseForm.form.markAsUntouched();
    this.baseForm.form.updateValueAndValidity();
  }

  // public onChitnameIdChanged(obj) {
  //   this.payloadsChanged();
  // }
  // public onChitvalueIdChanged(obj) {
  //   this.payloadsChanged();
  // }
  public onChitschemeIdChanged(obj) {
    this.payloadsChanged();
    this.chit.ac_no_of_installment = this.chit.ac_chit_scheme;

  }



  public getAllChits() {
    const obj = {
      num_per_page: this.num_per_page,
      order_by: this.order_by,
      order: this.order,
      start_from: this.start_from,
      search: this.search,
      active: this.actfilter,
      inactive: this.inactfilter
    };
    console.log(JSON.stringify(obj));
    this.app.getQuery('addchit/get_all_addchit', obj).then(result => {

      console.log(result);
      if (result.status === 'OK') {
        this.chits = this.chits.concat(result.data);
        this.count = result.total;
        this.received = result.received;
        this.dbPages = [];
        // this.activePage = 1;
        for (let index = 0; index < result.pages; index++) {
          this.dbPages.push(index);
        }
        this.displayCount = (this.chits.length) + ' of ' + this.count;
      } else {

      }
    });
  }

  public onSearchSubmit() {
    this.onChangePage();
  }

  public onClear() {
    this.search = '';
    this.onChangePage();
  }

  public onChangePage() {
    this.start_from = 0;
    this.activePage = this.start_from / parseInt(this.num_per_page, 10);
    this.init();
  }

  public moveNext() {
    this.start_from = this.start_from + parseInt(this.num_per_page, 10);
    this.activePage = this.start_from / parseInt(this.num_per_page, 10);
    this.getAllChits();
  }

  public onSubmit() {
    this.loadingText = 'Saving...';
    const itemObj = JSON.parse(JSON.stringify(this.chit));
    this.app.getQuery('addchit/add_edit_addchit', itemObj).then(result => {
      this.loadingText = 'Save';
      console.log(result);
      if (result.status === 'OK') {
        $('#myModalac_id').modal('hide');
        this.onClear();
      } else {
        this.message = result.message;
        setTimeout(() => {
          this.message = '';
        }, 4000);
      }
    });
  }



  public add() {
    this.reset();
    $('#myModalac_id').modal('show');
    // this.payloadsChanged();
    // $('#myModaluser_id').appendTo('body');
  }

  public editItem(itemObj) {
    const tempItem = JSON.parse(JSON.stringify(itemObj));
    //tempItem.user_password = '';
console.log(tempItem)
    this.chit = tempItem;
    console.log(this.chit);
      // this.payloadsChanged();
    $('#myModalac_id').modal('show');
    // $('#myModaluser_id').appendTo('body');
  }



  public convertToTime(day) {
    const breakDay = moment(day, 'YYYY-MM-DD HH:mm:ss').format('hh:mm A');
    return breakDay;
  }


  public convertToDate(day) {
    const breakDay = moment(day, 'YYYY-MM-DD').format('DD MMM YYYY');
    return breakDay;
  }

  public convertToDateTime(day) {
    const breakDay = moment(day, 'YYYY-MM-DD HH:mm:ss').format('DD MMM YYYY hh:mm A');
    return breakDay;
  }

}