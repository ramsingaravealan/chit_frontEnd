import { Component, OnInit, OnDestroy, AfterViewInit, Input, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { AppService } from '../app.service';

declare var $: any;
declare var moment: any;



@Component({
  selector: 'app-chitvalue',
  templateUrl: './chitvalue.component.html',
  styleUrls: ['./chitvalue.component.css']
})
export class ChitvalueComponent implements OnInit,OnDestroy, AfterViewInit {
  @ViewChild('baseForm') baseForm: NgForm;

  public actfilter = true;
  public inactfilter = false;

  public values = [];

  public value: any = {
    cv_id: '-1',
    //cs_chit_scheme: '',
    cv_chit_value: '',
   
    cv_created_at: '',
    cv_updated_at: '',
  };


  public loadingText = 'Save';
  // tslint:disable-next-line:variable-name
  public num_per_page = '10';
  // tslint:disable-next-line:variable-name
  public order_by = 'cv_id';
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
  public switchCase: boolean = false;


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
    this.values = [];
    this.reset();
    this.getAllChitvalue();
  }

  public reset() {
    this.value = {
      cv_id: '-1',
    // cs_chit_scheme: '',
     cv_chit_value: '',
   
     cv_created_at: '',
    cv_updated_at: ''
    };
    this.baseForm.form.markAsPristine();
    this.baseForm.form.markAsUntouched();
    this.baseForm.form.updateValueAndValidity();
  }

  toggleButton() {
    this.switchCase = !this.switchCase;
  }


  public getAllChitvalue() {
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
    this.app.getQuery('chitvalue/get_all_chitvalue', obj).then(result => {

      console.log(result);
      if (result.status === 'OK') {
        this.values = this.values.concat(result.data);
        this.count = result.total;
        this.received = result.received;
        this.dbPages = [];
        // this.activePage = 1;
        for (let index = 0; index < result.pages; index++) {
          this.dbPages.push(index);
        }
        this.displayCount = (this.values.length) + ' of ' + this.count;
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
    this.getAllChitvalue();
  }

  public onSubmit() {
    this.loadingText = 'Saving...';
    const itemObj = JSON.parse(JSON.stringify(this.value));
    this.app.getQuery('chitvalue/add_edit_chitvalue', itemObj).then(result => {
      this.loadingText = 'Save';
      console.log(result);
      if (result.status === 'OK') {
        $('#myModalcv_id').modal('hide');
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
    $('#myModalcv_id').modal('show');
    // $('#myModaluser_id').appendTo('body');
  }

  public editItem(itemObj) {
    const tempItem = JSON.parse(JSON.stringify(itemObj));
    //tempItem.user_password = '';

    this.value = tempItem;

    $('#myModalcv_id').modal('show');
    // $('#myModaluser_id').appendTo('body');
  }

  public deleteItem(itemObj)
  {
    this.app.getQuery('chitvalue/delete_obj/'+itemObj,{} ).then(result =>{
      console.log(result);
      this.init();
    })
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
