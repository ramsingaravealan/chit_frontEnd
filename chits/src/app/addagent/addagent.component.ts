import { Component, OnInit, OnDestroy, AfterViewInit, Input, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { AppService } from '../app.service';

declare var $: any;
declare var moment: any;

@Component({
  selector: 'app-addagent',
  templateUrl: './addagent.component.html',
  styleUrls: ['./addagent.component.css']
})
export class AddagentComponent implements OnInit, OnDestroy, AfterViewInit {

 
  @ViewChild('baseForm') baseForm: NgForm;

  public actfilter = true;
  public inactfilter = false;

  public agents = [];

  public agent: any = {
    ag_id: '-1',
    ag_name: '',
    ag_dob: '',
    ag_age: '',
    ag_gender: '',
    ag_primary_number: '',
    ag_secondary_number: '',
    ag_education_qualification: '',
    ag_pan_number:'',
    ag_aadhaar_number:'',
    ag_permanant_address:'',
    ag_martial_status:'',
    ag_father_name:'',
    ag_father_phoneno:'',
    ag_father_adhar:'',
    ag_father_permanent_address:'',
    ag_mother_name:'',
    ag_mother_phoneno:'',
    ag_mother_adhar:'',
    ag_mother_permanent_address:'',
    ag_company_name:'',
    ag_company_phoneno:'',
    ag_company_email:'',
    ag_company_address:'',
    ag_ref_name_1:'',
    ag_ref_phoneno_1:'',
    ag_ref_adhar_1:'',
    ag_ref_permanent_address_1:'',
    ag_ref_name_2:'',
    ag_ref_phoneno_2:'',
    ag_ref_adhar_2:'',
    ag_ref_permanent_address_2:'',
    ag_date_of_joining:'',
    ag_documents_provided:'',
    // ag_log: '',
    ag_created_at:'',
    ag_updated_at:'',
  };


  public loadingText = 'Save';
  // tslint:disable-next-line:variable-name
  public num_per_page = '10';
  // tslint:disable-next-line:variable-name
  public order_by = 'ag_id';
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
  // public ac_name = '';
  // public ac_chit_scheme = '';
  // public ac_chit_value = '';
  // public ac_name_payload = [
  // ];
  // public ac_chit_scheme_payload = [
  // ];
  // public ac_chit_value_payload = [
  // ];

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
    this.agents = [];
    this.reset();
    this.getAllChits();
  }

  public reset() {
    this.agent = {
      ag_id: '-1',
      ag_name: '',
      ag_dob: '',
      ag_age: '',
      ag_gender: '',
      ag_primary_number: '',
      ag_secondary_number: '',
      ag_education_qualification: '',
      ag_pan_number:'',
      ag_aadhaar_number:'',
      ag_permanant_address:'',
      ag_martial_status:'',
      ag_father_name:'',
      ag_father_phoneno:'',
      ag_father_adhar:'',
      ag_father_permanent_address:'',
      ag_mother_name:'',
      ag_mother_phoneno:'',
      ag_mother_adhar:'',
      ag_mother_permanent_address:'',
      ag_company_name:'',
      ag_company_phoneno:'',
      ag_company_email:'',
      ag_company_address:'',
      ag_ref_name_1:'',
      ag_ref_phoneno_1:'',
      ag_ref_adhar_1:'',
      ag_ref_permanent_address_1:'',
      ag_ref_name_2:'',
      ag_ref_phoneno_2:'',
      ag_ref_adhar_2:'',
      ag_ref_permanent_address_2:'',
      ag_date_of_joining:'',
      ag_documents_provided:'',
      // ag_log: '',
      ag_created_at:'',
    ag_updated_at:'',
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
  // public onChitschemeIdChanged(obj) {
  //   this.payloadsChanged();
  //   this.chit.ac_no_of_installment = this.chit.ac_chit_scheme;

  // }



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
    this.app.getQuery('addagent/get_all_addagent', obj).then(result => {

      console.log(result);
      if (result.status === 'OK') {
        this.agents = this.agents.concat(result.data);
        this.count = result.total;
        this.received = result.received;
        this.dbPages = [];
        // this.activePage = 1;
        for (let index = 0; index < result.pages; index++) {
          this.dbPages.push(index);
        }
        this.displayCount = (this.agents.length) + ' of ' + this.count;
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
    const itemObj = JSON.parse(JSON.stringify(this.agent));
    this.app.getQuery('addagent/add_edit_addagent', itemObj).then(result => {
      this.loadingText = 'Save';
      console.log(result);
      if (result.status === 'OK') {
        $('#myModalag_id').modal('hide');
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
    $('#myModalag_id').modal('show');
    // this.payloadsChanged();
    // $('#myModaluser_id').appendTo('body');
  }

  public editItem(itemObj) {
    const tempItem = JSON.parse(JSON.stringify(itemObj));
    //tempItem.user_password = '';

    this.agent = tempItem;
    console.log(this.agent);
    //   this.payloadsChanged();
    $('#myModalag_id').modal('show');
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
