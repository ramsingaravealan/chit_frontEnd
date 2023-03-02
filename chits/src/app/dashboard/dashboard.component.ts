import { Component, OnInit, OnDestroy, AfterViewInit, Input, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { AppService } from '../app.service';

declare var $: any;
declare var moment: any;
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy, AfterViewInit {

  constructor(public app: AppService, private router: Router, private location: Location) {

  }
  public customers = [];
  public customer:any={ };
  public schemes =[];
  public scheme={};
  public chits =[];
  public chit={};
  public chitgroups = [];

  public chitgroup= {};
  public start_from = 0;
  public count = 0;
  public received = -1;
  public displayCount = '';
  public dbPages = [];
  public activePage = 0;
  public search = '';
  public errorText = '';
  public ac_chit_value ='';
  ngOnInit() {
  }
  ngAfterViewInit(): void {
    this.getAllDashboard();
    this.getAllChitscheme();
    this.getAllChitgroup();
    this.getAllChits();
  }
  ngOnDestroy(): void {
    
  }
  public getAllDashboard() {
    const obj = {
      num_per_page: '20',
      order_by: 'nc_id',
      order: 'DESC',
      start_from: this.start_from,
      search: this.search,
      // active: this.actfilter,
      // inactive: this.inactfilter
    };
    console.log(JSON.stringify(obj));
    this.app.getQuery('newcustomers/get_all_newcustomers', obj).then(result => {

      console.log(result);
      if (result.status === 'OK') {
        // this.editItem(result.data[0]);
        this.customers = this.customers.concat(result.data);
        // for(let index =0;index<=this.customer.length;index++)
        // {
console.log(this.customers.length)
        // }
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

  public getAllChits() {
    const obj = {
      num_per_page: '20',
      order_by: 'ac_id',
      order: 'DESC',
      start_from: this.start_from,
      search: this.search,
    };
    console.log(JSON.stringify(obj));
    this.app.getQuery('addchit/get_all_addchit', obj).then(result => {

      console.log(result);
      // for(let i=0;i<=this.chits.length;i++)
      // {
      //   var value=this.chits[i].ac_chit_value;
      //   console.log(value);
      // }
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
  public getAllChitscheme() {
    const obj = {
      num_per_page: '20',
      order_by: 'cs_id',
      order: 'DESC',
      start_from: this.start_from,
      search: this.search,
      // active: this.actfilter,
      // inactive: this.inactfilter
    };
    console.log(JSON.stringify(obj));
    this.app.getQuery('chitscheme/get_all_chitscheme', obj).then(result => {

      console.log(result);
      if (result.status === 'OK') {
        this.schemes = this.schemes.concat(result.data);
        this.count = result.total;
        this.received = result.received;
        this.dbPages = [];
        // this.activePage = 1;
        for (let index = 0; index < result.pages; index++) {
          this.dbPages.push(index);
        }
        this.displayCount = (this.schemes.length) + ' of ' + this.count;
      } else {

      }
    });
    
  }
  public getAllChitgroup() {
    const obj = {
      num_per_page: '20',
      order_by: 'cg_id',
      order: 'DESC',
      start_from: this.start_from,
      search: this.search,
      // active: this.actfilter,
      // inactive: this.inactfilter
    };
    console.log(JSON.stringify(obj));
    this.app.getQuery('chitgroup/get_all_chitgroup', obj).then(result => {

      console.log(result);
      if (result.status === 'OK') {
        this.chitgroups = this.chitgroups.concat(result.data);
        this.count = result.total;
        this.received = result.received;
        this.dbPages = [];
        // this.activePage = 1;
        for (let index = 0; index < result.pages; index++) {
          this.dbPages.push(index);
        }
        this.displayCount = (this.chitgroups.length) + ' of ' + this.count;
      } else {

      }
    });
  }

}
