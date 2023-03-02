
import { Component, OnInit, OnDestroy, AfterViewInit, Input, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { AppService } from '../app.service';

declare var $: any;
declare var moment: any;

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit, OnDestroy, AfterViewInit {

  @ViewChild('baseForm') baseForm: NgForm;

  public actfilter = true;
  public inactfilter = false;

  public settings = [];

  public setting: any = {
    set_id: '-1',
    set_company_name: '',
    set_contact_person: '',
    set_logo: '',
    set_address: '',
    set_phone: '',
    set_email: '',
    set_whatsapp: '',
    set_lat: '',
    set_lon: '',
    set_overdue_invoice_grace_period: '',
    set_privacy_policy: '',
    set_terms_and_conditions: '',
    set_return_policy: '',
    set_active: 'Y',
    set_log: '',
  };


  public loadingText = 'Save';
  // tslint:disable-next-line:variable-name
  public num_per_page = '10';
  // tslint:disable-next-line:variable-name
  public order_by = 'set_id';
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
    this.settings = [];
    this.reset();
    this.getAllSettings();
  }

  public reset() {
    this.setting = {
      set_id: '-1',
      set_company_name: '',
      set_contact_person: '',
      set_logo: '',
      set_address: '',
      set_phone: '',
      set_email: '',
      set_whatsapp: '',
      set_lat: '',
      set_lon: '',
      set_overdue_invoice_grace_period: '',
      set_privacy_policy: '',
      set_terms_and_conditions: '',
      set_return_policy: '',
      set_active: 'Y',
      set_log: '',
    };
    this.baseForm.form.markAsPristine();
    this.baseForm.form.markAsUntouched();
    this.baseForm.form.updateValueAndValidity();
  }



  public onMapCordsChanged(obj) {
    this.setting.set_lat = obj.lat;
    this.setting.set_lon = obj.lon;
  }

  public getAllSettings() {
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
    this.app.getQuery('settings/get_all_settings', obj).then(result => {

      console.log(result);
      if (result.status === 'OK') {
        this.editItem(result.data[0]);
        this.settings = this.settings.concat(result.data);
        this.count = result.total;
        this.received = result.received;
        this.dbPages = [];
        // this.activePage = 1;
        for (let index = 0; index < result.pages; index++) {
          this.dbPages.push(index);
        }
        this.displayCount = (this.settings.length) + ' of ' + this.count;
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
    this.getAllSettings();
  }

  public onSubmit() {
    this.loadingText = 'Saving...';
    const itemObj = JSON.parse(JSON.stringify(this.setting));
    this.app.getQuery('settings/add_edit_setting', itemObj).then(result => {
      this.loadingText = 'Save';
      console.log(result);
      if (result.status === 'OK') {
        $('#myModalset_id').modal('hide');
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
    $('#myModalset_id').modal('show');
    // $('#myModalset_id').appendTo('body');
  }

  public editItem(itemObj) {
    const tempItem = JSON.parse(JSON.stringify(itemObj));
    this.setting = tempItem;

    $('#myModalset_id').modal('show');
    // $('#myModalset_id').appendTo('body');
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



