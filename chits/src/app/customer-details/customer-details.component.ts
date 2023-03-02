import { Component, OnInit, OnDestroy, AfterViewInit, Input, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { AppService } from '../app.service';

declare var $: any;
declare var moment: any;

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit, OnDestroy, AfterViewInit {

  @ViewChild('baseForm') baseForm: NgForm;
  public actfilter = true;
  public inactfilter = false;

  public companys = [];

  public company: any = {
    c_id: '-1',
    c_location: '',
    c_location_headofficer_name: '',
    c_company_name: '',
    c_city: '',
    c_country: '',
    c_active:'Y',
    c_log: '',
  };


  public loadingText = 'Save';
  // tslint:disable-next-line:variable-name
  public num_per_page = '10';
  // tslint:disable-next-line:variable-name
  public order_by = 'c_id';
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


  // tslint:disable-next-line:variable-name


  public message = '';
  public logs = [];
  public browse = 'Browse';

  constructor(public app: AppService, private router: Router, private location: Location) { }

  ngOnInit() {

  }

  ngOnDestroy() {

  }

  ngAfterViewInit() {
    this.init();
  }
  public init() {
    this.companys = [];
    this.reset();
    this.getAllCompany();
  }
  public reset() {
    this.company = {
      c_id: '-1',
    c_location: '',
    c_location_headofficer_name: '',
    c_company_name: '',
    c_city: '',
    c_country: '',
    c_active:'Y',
    c_log: '',
    };
    this.baseForm.form.markAsPristine();
    this.baseForm.form.markAsUntouched();
    this.baseForm.form.updateValueAndValidity();
  }
  public getAllCompany() {
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
    this.app.getQuery('company/get_all_company', obj).then(result => {

      console.log(result);
      if (result.status === 'OK') {
        this.editItem(result.data[0]);
        this.companys = this.companys.concat(result.data);
        console.log(this.companys);
        this.count = result.total;
        this.received = result.received;
        this.dbPages = [];
        // this.activePage = 1;
        for (let index = 0; index < result.pages; index++) {
          this.dbPages.push(index);
        }
        this.displayCount = (this.companys.length) + ' of ' + this.count;
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
   this.getAllCompany();
  }

  public onSubmit() {
    this.loadingText = 'Saving...';
    const itemObj = JSON.parse(JSON.stringify(this.company));
    this.app.getQuery('company/add_edit_company', itemObj).then(result => {
      this.loadingText = 'Save';
      console.log(result);
      if (result.status === 'OK') {
        $('#myModalc_id').modal('hide');
        this.onClear();
      } else {
        this.message = result.message;
        setTimeout(() => {
          this.message = '';
        }, 4000);
      }
    });
  }

  // public add() {
  //   this.reset();
  //   $('#myModalc_id').modal('show');
  //   // $('#myModalas_id').appendTo('body');
  // }
  // // print(itemObj)
  // // {
  // //   console.log(itemObj);
  // //   const tempItem = JSON.parse(JSON.stringify(itemObj));
  // //   console.log(tempItem.cd_name)
    
  // //   var cd_name=tempItem.cd_name;
  // //   var cd_dob=tempItem.cd_dob;
  // //   var d = new Date();
  // //   var day=d.getDate()+"/"+ (d.getMonth()+1)+"/" +d.getFullYear();
  // //   // var print=document.getElementById('table');
  // //   // var wme=window.open("","","width=900.height=700");
  // //   var table_title='SHREE SWASTI MURUGA';
  // //   var table_body = '<table border="1px solid black">'
  // //  let  popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
  // //  popupWin.document.open();
  // //  popupWin.document.write( 
  // //   '<html> <head> <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous" rel="stylesheet">  <style> html, body, page {   size: A4;margin: 5px;  }footer {page-break-after: always;} h2{margin-left:300px;} h1{margin-left:200px;} table{font-size: 25px;} tr,th,td{ border-bottom: 2px solid #ddd;margin-top:5px;margin-bottom:5px;} th{border-top: 2px solid #ddd;} h5{margin-left:400px;font-size: 25px;} </style>  <h1>SHREE SWASTI MURUGA</h1> <h2>Recipt</h2> <h4>Date:'+day+'</h4><body> <table class="table table-bordered table-dark" id="table">  <thead><tr><th>Customer Name</th><th>Customer DOB</th></tr></thead> <tbody><tr><td>'+cd_name+'</td><td>'+cd_dob+'</td></tr></tbody></table> <h5>Total</h5> </body><html>');
  // //     // table_body +'<tr><td>' +tempItem.cd_name +'</td>'+ '<td>'+tempItem.cd_dob+'</tr></td>');
  // //   // wme.document.close();
  // //   // wme.focus();
  // //   popupWin.print();
  // //   popupWin.close();
  // //   // $('#table').print()
  // // }

  // public editItem(itemObj) {
  //   const tempItem = JSON.parse(JSON.stringify(itemObj));
  //   console.log(tempItem);
  //   this.company = tempItem;


  //   $('#myModalc_id').modal('show');
  //   // $('#myModalas_id').appendTo('body');
  // }
  public add() {
    this.reset();
    $('#myModalc_id').modal('show');
    // $('#myModaluser_id').appendTo('body');
  }

  public editItem(itemObj) {
    const tempItem = JSON.parse(JSON.stringify(itemObj));
    

    this.company = tempItem;

    $('#myModalc_id').modal('show');
    // $('#myModaluser_id').appendTo('body');
  }
  public deleteItem(id) {
   
    this.app.getQuery('company/delete_obj/'+id,{}).then(result =>{
console.log(result);
this.init();
    });
   


    //$('#myModalcd_id').modal('show');
    // $('#myModalas_id').appendTo('body');
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
