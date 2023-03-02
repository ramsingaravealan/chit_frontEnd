
import { Component, OnInit, OnDestroy, AfterViewInit, Input, ViewChild, ElementRef,VERSION } from '@angular/core';
 
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { AppService } from '../app.service';

declare var $: any;
declare var moment: any;

@Component({
  selector: 'app-new-customers',
  templateUrl: './new-customers.component.html',
  styleUrls: ['./new-customers.component.css']
})
export class NewCustomersComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('baseForm') baseForm: NgForm;

  public actfilter = true;
  public inactfilter = false;

  public customers = [];

  public customer: any = {
    nc_id: '-1',
    nc_customer_id:'',
    nc_name: '',
    nc_phone: '',
    nc_dob: '',
    nc_gender: '-1',
    nc_present_address: '',
    nc_present_city: '',
    nc_present_state: '',
    nc_present_pincode: '',
    nc_permanent_address: '',
    nc_permanent_city: '',
    nc_permanent_state: '',
    nc_permanent_pincode: '',
    nc_id_proof: '-1',
    nc_id_proof_no: '',
    nc_father_name: '',
    nc_father_adhar: '',
    nc_father_phoneno: '',
    nc_mother_name: '',
    nc_mother_adhar: '',
    nc_martial_status: '-1',
    nc_spouse_name: '',
    nc_spouse_adhar: '',
    nc_spouse_phoneno: '',
    nc_reference_name_1: '',
    nc_reference_phone_1: '',
    nc_reference_name_2: '',
    nc_reference_phone_2: '',
    nc_nominee_name: '',
    nc_nominee_phone: '',
    nc_nominee_relationship: '',
    nc_profile_photo: '',
    nc_log: '',
    nc_created_at:'',
     nc_updated_at:'',
  };

  public loadingText = 'Save';
  // tslint:disable-next-line:variable-name
  public num_per_page = '10';
  // tslint:disable-next-line:variable-name
  public order_by = 'nc_id';
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
    //this.init();
   
   


  }
  ngOnDestroy() {
     

  }

  ngAfterViewInit() {
   
    //this.getAllNewcustomers();
    this.init();
    $('.datepicker').datepicker({
      clearBtn: true,
      format: "dd/mm/yyyy"
  });
  
$('#datepicker').datepicker("setDate", new Date());

  // FOR DEMO PURPOSE
  $('#reservationDate').on('change', function () {
      var pickedDate = $('input').val();
      $('#pickedDate').html(pickedDate);
      
  });

  
  $('#inputDate').datepicker({
  });
   
  }
  public init() {
    this.customers = [];
    this.reset();
    this.getAllNewcustomers();
  }
  public reset() {
    this.customer = {
      nc_id: '-1',
      nc_customer_id:'',
      nc_name: '',
      nc_phone: '',
      nc_dob: '',
      nc_gender: '-1',
      nc_present_address: '',
      nc_present_city: '',
      nc_present_state: '',
      nc_present_pincode: '',
      nc_permanent_address: '',
      nc_permanent_city: '',
      nc_permanent_state: '',
      nc_permanent_pincode: '',
      nc_id_proof: '-1',
      nc_id_proof_no: '',
      nc_father_name: '',
      nc_father_adhar: '',
      nc_father_phoneno: '',
      nc_mother_name: '',
      nc_mother_adhar: '',
      nc_martial_status: '-1',
      nc_spouse_name: '',
      nc_spouse_adhar: '',
      nc_spouse_phoneno: '',
      nc_reference_name_1: '',
      nc_reference_phone_1: '',
      nc_reference_name_2: '',
      nc_reference_phone_2: '',
      nc_nominee_name: '',
      nc_nominee_phone: '',
      nc_nominee_relationship: '',
      nc_profile_photo: '',
      nc_log: '',
      nc_created_at:'',
      nc_updated_at:'',
    };
    this.baseForm.form.markAsPristine();
    this.baseForm.form.markAsUntouched();
    this.baseForm.form.updateValueAndValidity();
  }
  toggleButton() {
     this.switchCase = !this.switchCase;
    
  }
  printThisPage() {
    window.print();
  }
  public getAllNewcustomers() {
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
    this.app.getQuery('Newcustomers/get_all_newcustomers', obj).then(result => {

      console.log(result);
      if (result.status === 'OK') {
        // this.editItem(result.data[0]);
        this.customers = this.customers.concat(result.data);
        this.count = result.total;
        this.received = result.received;
        this.dbPages = [];
        // this.activePage = 1;
        for (let index = 0; index < result.pages; index++) {
          this.dbPages.push(index);
        }
        this.displayCount = (this.customers.length) + ' of ' + this.count;
      } else {

      }
    });

  }
  // public Search() {
  //   console.log(this.customers);
  //   console.log(this.customers);
  //   this.customers = this.customers.filter(

  //     m => {
  //       return (m.nc_customer_id,m.nc_name,m.nc_phone).toLocaleLowerCase().match(this.search.toLocaleLowerCase())
  //       //  return (m.col_customer_id).toLocaleLowerCase().match(this.search.toLocaleLowerCase())

  //     }



  //   );
   
  // }
  public onSearchSubmit() {
    this.onChangePage();
    // this.getAllNewcustomers();
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
    this.getAllNewcustomers();
  }

  public onSubmit() {
    this.loadingText = 'Saving...';
    const itemObj = JSON.parse(JSON.stringify(this.customer));
    this.app.getQuery('newcustomers/add_edit_newcustomers', itemObj).then(result => {
      this.loadingText = 'Save';
      console.log(result);
      if (result.status === 'OK') {
        $('#myModalnc_id').modal('hide');
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
    $('#myModalnc_id').modal('show');
    // $('#myModalset_id').appendTo('body');
  }

  public editItem(itemObj) {
    const tempItem = JSON.parse(JSON.stringify(itemObj));
    this.customer = tempItem;
    console.log(this.customer)

    $('#myModalnc_id').modal('show');
    // $('#myModalset_id').appendTo('body');
  }
  public viewItem(itemObj) {
    const tempItem = JSON.parse(JSON.stringify(itemObj));
    this.customer = tempItem;
    console.log(this.customer);
    $('#myModalviewnc_id').modal('show');
    // $('#myModalset_id').appendTo('body');
  }
  public deleteItem(itemObj)
  {
    this.app.getQuery('newcustomers/delete_obj/'+itemObj,{} ).then(result =>{
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
