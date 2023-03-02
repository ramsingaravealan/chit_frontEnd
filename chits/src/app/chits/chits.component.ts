import { Component, OnInit, OnDestroy, AfterViewInit, Input, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { AppService } from '../app.service';

declare var $: any;
declare var moment: any;

@Component({
  selector: 'app-chits',
  templateUrl: './chits.component.html',
  styleUrls: ['./chits.component.css']
})
export class ChitsComponent implements OnInit,OnDestroy, AfterViewInit {
  @ViewChild('baseForm') baseForm: NgForm;
  public chits = [];
  public chit: any ={
    id:'-1',
    name:'',
    no_of_members:'',
    value:'',
    no_of_emi:'',
    emi_amount:'',
  };
  constructor(public app: AppService, private router: Router, private location: Location) { }

  ngOnInit() {

  }

  ngOnDestroy() {

  }

  ngAfterViewInit() {
    this.init();
    
  }
  public init() {
    this.chits = [];
    this.reset();
    
  }
  public reset() {
    this.chit = {
      id:'-1',
    name:'',
    no_of_members:'',
    value:'',
    no_of_emi:'',
    emi_amount:'',
    };
    this.baseForm.form.markAsPristine();
    this.baseForm.form.markAsUntouched();
    this.baseForm.form.updateValueAndValidity();
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
