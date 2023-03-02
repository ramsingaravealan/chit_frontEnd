
import { Component, OnInit, OnDestroy, AfterViewInit, Input, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { AppService } from '../app.service';

declare var $: any;
declare var moment: any;

@Component({
  selector: 'app-taxes',
  templateUrl: './taxes.component.html',
  styleUrls: ['./taxes.component.css']
})
export class TaxesComponent implements OnInit, OnDestroy, AfterViewInit {

  @ViewChild('baseForm') baseForm: NgForm;

  public actfilter = true;
  public inactfilter = false;

  public taxes = [];

  public tax: any = {
         tax_id: '-1',
                   tax_name: '',
                   tax_value: '',
                   tax_type: 'percent',
                   tax_active: 'Y',
                   tax_log: '',
          };

  
  public loadingText = 'Save';
  // tslint:disable-next-line:variable-name
  public num_per_page = '10';
  // tslint:disable-next-line:variable-name
  public order_by = 'tax_id';
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
    this.taxes = [];
    this.reset();
    this.getAllTaxes();
  }

  public reset() {
    this.tax = {
              tax_id: '-1',
                   tax_name: '',
                   tax_value: '',
                   tax_type: 'percent',
                   tax_active: 'Y',
                   tax_log: '',
              };
    this.baseForm.form.markAsPristine();
    this.baseForm.form.markAsUntouched();
    this.baseForm.form.updateValueAndValidity();
  }

                              
                            
                              
  public getAllTaxes() {
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
    this.app.getQuery('taxes/get_all_taxes', obj).then(result => {

      console.log(result);
      if (result.status === 'OK') {
                this.taxes = this.taxes.concat(result.data);
        this.count = result.total;
        this.received = result.received;
        this.dbPages = [];
        // this.activePage = 1;
        for (let index = 0; index < result.pages; index++) {
          this.dbPages.push(index);
        }
        this.displayCount = (this.taxes.length) + ' of ' + this.count;
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
    this.getAllTaxes();
  }

  public onSubmit() {
    this.loadingText = 'Saving...';
    const itemObj = JSON.parse(JSON.stringify(this.tax));
    this.app.getQuery('taxes/add_edit_tax', itemObj).then(result => {
      this.loadingText = 'Save';
      console.log(result);
      if (result.status === 'OK') {
        $('#myModaltax_id').modal('hide');
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
                                $('#myModaltax_id').modal('show');
    // $('#myModaltax_id').appendTo('body');
  }

  public editItem(itemObj) {
    const tempItem = JSON.parse(JSON.stringify(itemObj));
        this.tax = tempItem;
                              
                                $('#myModaltax_id').modal('show');
    // $('#myModaltax_id').appendTo('body');
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



