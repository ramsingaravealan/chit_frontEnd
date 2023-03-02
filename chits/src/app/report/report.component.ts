import { Component, OnInit, OnDestroy, AfterViewInit, Input, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { AppService } from '../app.service';

declare var $: any;
declare var moment: any;

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit, OnDestroy, AfterViewInit {
  public date='';
  public fromDate;
  public toDate;
  // @ViewChild('baseForm') baseForm: NgForm;

  public actfilter = true;
  public inactfilter = false;
public reports:any=[];
public report={};
  public collections:any= [];
  public chits = [];
  public chit = {};
  public quicksavepros =[];
  public valuesavepros=[];
  public newArr=[];
 public col_filters:any;
 
  public collection: any = {
    col_id: '-1',
    col_customer_id: '',
    col_name: '',
    col_phone: '',
    col_chit_scheme: '',
    col_chit_value: '',
    col_chit_installment: '',
    col_first_payment: '',
    col_payable_amount: '',
    col_new_payable_amount: '',
    col_outstanding:'0',
   col_max_installment:'-1',
    col_chit_no:'-1',
    col_date: '',
    col_log: '',
  };

public startdate:Date;
public enddate:Date;
  public loadingText = 'Save';
  // tslint:disable-next-line:variable-name
  // public num_per_page = '10';
  // tslint:disable-next-line:variable-name
  public order_by = 'col_id';
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
  public style = '';
  public isDisplay = 'false';
  public outstanding:any;










  public message = '';
  public logs = [];
  public browse = 'Browse';
  public ac_customer_id: '';
  public ac_name = '';
  public ac_phone = '';
  public ac_chit_scheme = '';
  public ac_chit_value = '';
  public ac_no_of_installment = '';
  public ac_first_payment = '';
  public col_customer_id: '';
  public col_name: '';
  public col_phone: '';
  public col_chit_scheme: '';
  public col_chit_value: '';
  public col_chit_installment: '';
  public col_first_payment: '';
  public col_payable_amount: '';
  public col_outstanding:any;
  public col_date: '';
  public pending: any;
  public newvalue:any;
  public dataRefresher: any;
  customerPay: boolean = false
  public res:any=[];
  public pe:any;
  public qft_chit_value: any;
  public max_installment:any;
  public selectedMembers:any;
 
  // public ac_chit_scheme = '';
  // public ac_chit_value = '';
  // public ac_name_payload = [
  // ];
  // public ac_chit_scheme_payload = [
  // ];
  // public ac_chit_value_payload = [
  // ];

  constructor(public app: AppService, private router: Router, private location: Location,private change:ChangeDetectorRef) {

  }


  ngOnInit() {
    // this.getAllCollections();
  }
  ngOnDestroy() {

  }

  ngAfterViewInit() {
    // this.init();
    // this.status();
    $( "#datepicker" ).datepicker();
    $( "#date" ).datepicker();
   this.getAllReports();
   $( function() {
   var st= $( "#datepicker" ).datepicker();
   console.log(st)
    $( "#datepicker1" ).datepicker();
  } );
    
  // const l = this;
    const n = moment();
    const e = moment();
    // n.subtract(160, 'days');
    this.fromDate = n.format('YYYY-MM-DD') ;
    this.toDate = e.format('YYYY-MM-DD') ;
    $('#daterangeassist').daterangepicker({
      locale: {
        format: 'MMMM D, YYYY'
      },
      startDate: n,
      endDate: e,
      buttonClasses: ['btn', 'btn-sm'],
      applyClass: 'btn-primary',
      cancelClass: 'btn-secondary',
      dateLimit: {
        days: 365
      }
    });
    // tslint:disable-next-line:only-arrow-functions
    $('#daterangeassist').on('apply.daterangepicker', (nx, ex) =>{
      // console.log('Inside ' + ex.startDate.format('YYYY-MM-DD'));
      this.fromDate = ex.startDate.format('YYYY-MM-DD');
      console.log(this.fromDate)
    this.toDate = ex.endDate.format('YYYY-MM-DD');
    console.log(this.toDate);
      // this.init();
      // console.log('Inside ' + ex.endDate.format('YYYY-MM-DD'));
      // console.log(this.collections);
    this.getAllReports();
    });
    this.getAllReports();
  }

  //
  
  reverseAndTimeStamp(dateString) {
    const reverse = new Date(dateString.split("-").reverse().join("-"));
    return reverse.getTime();
    }
//  
  public getAllReports() {
    const l = this;
    // this.received = '0';
    const obj = {
      // from_date: l.fromDate,
      // to_date: l.toDate,
      num_per_page: '200',
      order_by: 'col_id',
      order: 'DESC',
      // start_from: this.start_from,
      search: this.search,
      active: this.actfilter,
      inactive: this.inactfilter
    };
    console.log(JSON.stringify(obj)),
      // tslint:disable-next-line:only-arrow-functions
      this.app.getQuery('collections/get_all_collections', obj).then(result => {
        console.log(result);
        this.reports=result.data;
        console.log(this.reports);
        if (result.status === 'OK') {
          this.received = result.received;
          // this.clearMarkers();
          // this.bounds = new google.maps.LatLngBounds();
          // result.data.forEach(element => {
          //   // const infowindow = new google.maps.InfoWindow({
          //     // content: element.rmig_message
          //   });
         
            this.selectedMembers = this.reports.filter(m => { 
              return m.col_date >= this.fromDate && m.col_date <= this.toDate
              // console.log(m.col_date)
             return m.col_date;
            }
              );
              console.log(this.selectedMembers);
            // const marker = new google.maps.Marker({
            //   position: {
            //     lat: parseFloat(element.rmig_lat),
            //     lng: parseFloat(element.rmig_lon)
            //   },
            //   map: this.map,
            //   title: element.rmig_message
            // });
      //       marker.addListener('click', () => {
      //         infowindow.open(this.map, marker);
      //       });
      //       this.markers.push(marker);
      //       this.bounds.extend({
      //         lat: parseFloat(element.rmig_lat),
      //         lng: parseFloat(element.rmig_lon)
      //       });
      //       this.map.fitBounds(this.bounds);
      //     });
         }
       });
  }
 
}
