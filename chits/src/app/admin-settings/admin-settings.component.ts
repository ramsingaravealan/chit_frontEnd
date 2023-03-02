
import { Component, OnInit, OnDestroy, AfterViewInit, Input, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { AppService } from '../app.service';

declare var $: any;
declare var moment: any;

@Component({
  selector: 'app-admin-settings',
  templateUrl: './admin-settings.component.html',
  styleUrls: ['./admin-settings.component.css']
})
export class AdminSettingsComponent implements OnInit, OnDestroy, AfterViewInit {

  @ViewChild('baseForm') baseForm: NgForm;

  public actfilter = true;
  public inactfilter = false;

  public adminSettings = [];

  public adminSetting: any = {
         as_id: '-1',
                   as_company_name: '',
                   as_email: '',
                   as_address: '',
                   as_phone_no: '',
                   as_logo: '',
                   as_website:'',
                   as_company_commission	:'',
                   as_bank_charge:'',
                   as_company_service_tax:'',
                   as_customer_service_tax	:'',
                   as_tds:'',
                   as_agent_service_charge:'',
                   as_agent_start_date:'',
                   as_log: '',
          };

  
  public loadingText = 'Save';
  // tslint:disable-next-line:variable-name
  public num_per_page = '10';
  // tslint:disable-next-line:variable-name
  public order_by = 'as_id';
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

  

  public init() {
    this.adminSettings = [];
    this.reset();
    // this.getAllAdminSettings();
  }

  public reset() {
    this.adminSetting = {
              as_id: '-1',
              as_company_name: '',
              as_email: '',
              as_address: '',
              as_phone_no: '',
              as_logo: '',
              as_website:'',
              as_company_commission	:'',
              as_bank_charge:'',
              as_company_service_tax:'',
              as_customer_service_tax	:'',
              as_tds:'',
              as_agent_service_charge:'',
              as_agent_start_date:'',
              as_log: '',
              };
    this.baseForm.form.markAsPristine();
    this.baseForm.form.markAsUntouched();
    this.baseForm.form.updateValueAndValidity();
  }

                                                                                                                      
                       
                                                                          
                                                                                                                                      
  public getAllAdminSettings() {
    // const obj = {
    //   num_per_page: this.num_per_page,
    //   order_by: this.order_by,
    //   order: this.order,
    //   start_from: this.start_from,
    //                                                                                                                       search: this.search,
    //   active: this.actfilter,
    //   inactive: this.inactfilter
    // };
    // console.log(JSON.stringify(obj));
    // this.app.getQuery('adminsettings/get_all_admin_settings', obj).then(result => {

    //   console.log(result);
    //   if (result.status === 'OK') {
    //             this.editItem(result.data[0]);
    //             this.adminSettings = this.adminSettings.concat(result.data);
    //     this.count = result.total;
    //     this.received = result.received;
    //     this.dbPages = [];
    //     // this.activePage = 1;
    //     for (let index = 0; index < result.pages; index++) {
    //       this.dbPages.push(index);
    //     }
    //     this.displayCount = (this.adminSettings.length) + ' of ' + this.count;
    //   } else {

    //   }
    // });
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
    this.getAllAdminSettings();
  }

  public onSubmit() {
    // this.loadingText = 'Saving...';
    // const itemObj = JSON.parse(JSON.stringify(this.adminSetting));
    // this.app.getQuery('adminsettings/add_edit_adminsetting', itemObj).then(result => {
    //   this.loadingText = 'Save';
    //   console.log(result);
    //   if (result.status === 'OK') {
    //     $('#myModalas_id').modal('hide');
    //     this.onClear();
    //   } else {
    //     this.message = result.message;
    //     setTimeout(() => {
    //       this.message = '';
    //     }, 4000);
    //   }
    // });
  }



  public add() {
    this.reset();
                                $('#myModalas_id').modal('show');
    // $('#myModalas_id').appendTo('body');
  }

  public editItem(itemObj) {
    const tempItem = JSON.parse(JSON.stringify(itemObj));
        this.adminSetting = tempItem;
                                   
       
                                                                                                            $('#myModalas_id').modal('show');
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



