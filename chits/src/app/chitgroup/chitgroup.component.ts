import { Component, OnInit, OnDestroy, AfterViewInit, Input, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { AppService } from '../app.service';

declare var $: any;
declare var moment: any;



@Component({
  selector: 'app-chitgroup',
  templateUrl: './chitgroup.component.html',
  styleUrls: ['./chitgroup.component.css']
})
export class ChitgroupComponent implements OnInit,OnDestroy, AfterViewInit {
  @ViewChild('baseForm') baseForm: NgForm;

  public actfilter = true;
  public inactfilter = false;
  public schemes = [];
  public chitgroups = [];
  public values = [];
  public chitgroup: any = {
    cg_id: '-1',
    //cs_chit_scheme: '',
    cg_group_name:'',
  
    // cg_chit_month:'',
    cg_chit_members:'',
    cg_chit_scheme_id: '-1',
    cg_chit_value_id:'-1',
    // cg_max_installment_1:'',
    // cg_max_installment_2:'',
    // cg_max_installment_3:'',
    // cg_max_installment_4:'',
    // cg_max_installment_5:'',
    // cg_max_installment_6:'',
    // cg_max_installment_7:'',
    // cg_max_installment_8:'',
    // cg_max_installment_9:'',
    // cg_max_installment_10:'',
    // cg_max_installment_11:'',
    // cg_max_installment_12:'',
    // cg_max_installment_13:'',
    // cg_max_installment_14:'',
    // cg_max_installment_15:'',
    // cg_max_installment_16:'',
    // cg_max_installment_17:'',
    // cg_max_installment_18:'',
    // cg_max_installment_19:'',
    // cg_max_installment_20:'',
    // cg_max_installment_21:'',
    // cg_max_installment_22:'',
    // cg_max_installment_23:'',
    // cg_max_installment_24:'',
    // cg_max_installment_25:'',
    // cg_max_installment_26:'',
    // cg_max_installment_27:'',
    // cg_max_installment_28:'',

    // cg_max_installment_29:'',

    // cg_max_installment_30:'',
    // cg_max_installment_31:'',
    // cg_max_installment_32:'',
    // cg_max_installment_33:'',
    // cg_max_installment_34:'',
    // cg_max_installment_35:'',
    // cg_max_installment_36:'',
    // cg_max_installment_37:'',

    // cg_max_installment_38:'',

    // cg_max_installment_39:'',

    // cg_max_installment_40:'',

    // cg_max_installment_41:'',

    // cg_max_installment_42:'',
    // cg_max_installment_43:'',
    // cg_max_installment_44:'',

    // cg_max_installment_45:'',
    // cg_max_installment_46:'',

    // cg_max_installment_47:'',

    // cg_max_installment_48:'',

    // cg_max_installment_49:'',


    // cg_max_installment_50:'',

    // cg_chit_no_1:'',
    // cg_chit_no_2:'',
    // cg_chit_no_3:'',
    // cg_chit_no_4:'',
    // cg_chit_no_5:'',
    // cg_chit_no_6:'',
    // cg_chit_no_7:'',
    // cg_chit_no_8:'',
    // cg_chit_no_9:'',
    // cg_chit_no_10:'',
    // cg_chit_no_11:'',
    // cg_chit_no_12:'',
    // cg_chit_no_13:'',
    // cg_chit_no_14:'',
    // cg_chit_no_15:'',
    // cg_chit_no_16:'',
    // cg_chit_no_17:'',
    // cg_chit_no_18:'',
    // cg_chit_no_19:'',
    // cg_chit_no_20:'',
    // cg_chit_no_21:'',
    // cg_chit_no_22:'',
    // cg_chit_no_23:'',
    // cg_chit_no_24:'',
    // cg_chit_no_25:'',
    // cg_chit_no_26:'',
    // cg_chit_no_27:'',
    // cg_chit_no_28:'',
    // cg_chit_no_29:'',
    // cg_chit_no_30:'',
    // cg_chit_no_31:'',
    // cg_chit_no_32:'',
    // cg_chit_no_33:'',
    // cg_chit_no_34:'',
    // cg_chit_no_35:'',
    // cg_chit_no_36:'',
    // cg_chit_no_37:'',
    // cg_chit_no_38:'',
    // cg_chit_no_39:'',
    // cg_chit_no_40:'',
    // cg_chit_no_41:'',
    // cg_chit_no_42:'',
    // cg_chit_no_43:'',
    // cg_chit_no_44:'',
    // cg_chit_no_45:'',
    // cg_chit_no_46:'',
    // cg_chit_no_47:'',
    // cg_chit_no_48:'',
    // cg_chit_no_49:'',
    // cg_chit_no_50:'',

    

    



    // cg_log: '',
    cg_created_at:'',
    cg_updated_at:''
  };


  public loadingText = 'Save';
  // tslint:disable-next-line:variable-name
  public num_per_page = '10';
  // tslint:disable-next-line:variable-name
  public order_by = 'cg_id';
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
  public cg_chit_scheme_id = '-1';
  public cg_chit_value_id ='-1';
  public cg_chit_scheme_id_payload = [
  ];
  public cg_chit_value_id_payload = [
  ];

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
    this.chitgroups = [];
    this.reset();
    this.getAllChitgroup();
    this.getAllChitscheme();
    this.getAllChitvalue();
  }

  public reset() {
    this.chitgroup = {
      cg_id: '-1',
      cg_group_name:'',
      cg_group_month:'',
      cg_chit_month:'',
      cg_chit_members:'',
      //cs_chit_scheme: '',
      cg_chit_scheme_id: '-1',
      cg_chit_value_id:'-1',
      // cg_max_installment_1:'',
      // cg_max_installment_2:'',
      // cg_max_installment_3:'',
      // cg_max_installment_4:'',
      // cg_max_installment_5:'',
      // cg_max_installment_6:'',
      // cg_max_installment_7:'',
      // cg_max_installment_8:'',
      // cg_max_installment_9:'',
      // cg_max_installment_10:'',
      // cg_max_installment_11:'',
      // cg_max_installment_12:'',
      // cg_max_installment_13:'',
      // cg_max_installment_14:'',
      // cg_max_installment_15:'',
      // cg_max_installment_16:'',
      // cg_max_installment_17:'',
      // cg_max_installment_18:'',
      // cg_max_installment_19:'',
      // cg_max_installment_20:'',
      // cg_max_installment_21:'',
      // cg_max_installment_22:'',
      // cg_max_installment_23:'',
      // cg_max_installment_24:'',
      // cg_max_installment_25:'',
      // cg_max_installment_26:'',
      // cg_max_installment_27:'',
      // cg_max_installment_28:'',
  
      // cg_max_installment_29:'',
  
      // cg_max_installment_30:'',
      // cg_max_installment_31:'',
      // cg_max_installment_32:'',
      // cg_max_installment_33:'',
      // cg_max_installment_34:'',
      // cg_max_installment_35:'',
      // cg_max_installment_36:'',
      // cg_max_installment_37:'',
  
      // cg_max_installment_38:'',
  
      // cg_max_installment_39:'',
  
      // cg_max_installment_40:'',
  
      // cg_max_installment_41:'',
  
      // cg_max_installment_42:'',
      // cg_max_installment_43:'',
      // cg_max_installment_44:'',
  
      // cg_max_installment_45:'',
      // cg_max_installment_46:'',
  
      // cg_max_installment_47:'',
  
      // cg_max_installment_48:'',
  
      // cg_max_installment_49:'',
  
  
      // cg_max_installment_50:'',
  
      // cg_chit_no_1:'',
      // cg_chit_no_2:'',
      // cg_chit_no_3:'',
      // cg_chit_no_4:'',
      // cg_chit_no_5:'',
      // cg_chit_no_6:'',
      // cg_chit_no_7:'',
      // cg_chit_no_8:'',
      // cg_chit_no_9:'',
      // cg_chit_no_10:'',
      // cg_chit_no_11:'',
      // cg_chit_no_12:'',
      // cg_chit_no_13:'',
      // cg_chit_no_14:'',
      // cg_chit_no_15:'',
      // cg_chit_no_16:'',
      // cg_chit_no_17:'',
      // cg_chit_no_18:'',
      // cg_chit_no_19:'',
      // cg_chit_no_20:'',
      // cg_chit_no_21:'',
      // cg_chit_no_22:'',
      // cg_chit_no_23:'',
      // cg_chit_no_24:'',
      // cg_chit_no_25:'',
      // cg_chit_no_26:'',
      // cg_chit_no_27:'',
      // cg_chit_no_28:'',
      // cg_chit_no_29:'',
      // cg_chit_no_30:'',
      // cg_chit_no_31:'',
      // cg_chit_no_32:'',
      // cg_chit_no_33:'',
      // cg_chit_no_34:'',
      // cg_chit_no_35:'',
      // cg_chit_no_36:'',
      // cg_chit_no_37:'',
      // cg_chit_no_38:'',
      // cg_chit_no_39:'',
      // cg_chit_no_40:'',
      // cg_chit_no_41:'',
      // cg_chit_no_42:'',
      // cg_chit_no_43:'',
      // cg_chit_no_44:'',
      // cg_chit_no_45:'',
      // cg_chit_no_46:'',
      // cg_chit_no_47:'',
      // cg_chit_no_48:'',
      // cg_chit_no_49:'',
      // cg_chit_no_50:'',
  
      // cg_log: '',
      cg_created_at:'',
    cg_updated_at:''
    };
    this.baseForm.form.markAsPristine();
    this.baseForm.form.markAsUntouched();
    this.baseForm.form.updateValueAndValidity();
  }
  toggleButton() {
    this.switchCase = !this.switchCase;
  }

  // firstDropDownChanged(val: any) {
  //   console.log(val);
  //   console.log(this.schemes);
  //   for(let i=0; i<=this.schemes.length;i++)
  //   {
  //     // console.log(this.customers[i].nc_name)
  //     if(val===this.schemes[i].cs_chit_month)
  //     {
  //     console.log(this.schemes[i].cs_chit_month);
  //     this.chitgroup.ac_customer_id=this.schemes[i].nc_customer_id;
  //     this.chitgroup.ac_name=this.schemes[i].nc_name;
  //     this.chitgroup.ac_phone=this.schemes[i].nc_phone;
  //     }
  //   }
    
  // }
 
public onChitvalueIdChanged(obj) {
  this.payloadsChanged();
  console.log(obj);
  // this.onSearchSubmit();
}
public onChitschemeIdChanged(obj) {
  // this.payloadsChanged();
  console.log(obj);
  console.log(this.schemes)
  for(let i=0; i<=this.schemes.length;i++)
  {
    //  console.log(this.schemes[i].cs_chit_scheme)
    if(obj===this.schemes[i].cs_chit_scheme)
    {
      console.log(this.schemes[i].cs_chit_scheme)
    console.log(this.schemes[i].cs_chit_month);
    this.chitgroup.cg_chit_month = this.schemes[i].cs_chit_month;
  //  this.chitgroup.cg_chit_value = this.values[i].cg_chit_value
  //  if(this.chitgroup.cg_chit_month=='10')
  // {
  //   this.chitgroup.cg_max_installment_1=this.chitgroup.cg_max_installment_1;
  //   this.chitgroup.cg_max_installment_2=this.chitgroup.cg_max_installment_2;
  //   this.chitgroup.cg_max_installment_3=this.chitgroup.cg_max_installment_3;
  //   this.chitgroup.cg_max_installment_4=this.chitgroup.cg_max_installment_4;
  //   this.chitgroup.cg_max_installment_5=this.chitgroup.cg_max_installment_5;
  //   this.chitgroup.cg_max_installment_6=this.chitgroup.cg_max_installment_6;
  //   this.chitgroup.cg_max_installment_7=this.chitgroup.cg_max_installment_7;
  //   this.chitgroup.cg_max_installment_8=this.chitgroup.cg_max_installment_8;
  //   this.chitgroup.cg_max_installment_9=this.chitgroup.cg_max_installment_9;
  //   this.chitgroup.cg_max_installment_10=this.chitgroup.cg_max_installment_10;
  // }
  
  

    }
  }
  // return item.cg_chit_scheme_id;
  // this.onSearchSubmit();
}
public getAllChitvalue() {
  const obj = {
    num_per_page: '200',
    order_by: 'cv_id',
    order: 'DESC',
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
public getAllChitscheme() {
  const obj = {
    num_per_page: '200',
    order_by: 'cs_id',
    order: 'DESC',
    start_from: this.start_from,
    search: this.search,
    active: this.actfilter,
    inactive: this.inactfilter
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
      num_per_page: this.num_per_page,
      order_by: this.order_by,
      order: this.order,
      start_from: this.start_from,
      search: this.search,
      active: this.actfilter,
      inactive: this.inactfilter
    };
    console.log(JSON.stringify(obj));
    this.app.getQuery('chitgroup/getallchitgroup', obj).then(result => {

      console.log(result.join);
      this.chitgroups=result.join;
      console.log(this.chitgroups)
      // if (result.status === 'OK') {
      //   this.chitgroups = this.chitgroups.concat(result.join);
      //   this.count = result.join.total;
      //   this.received = result.join.received;
      //   this.dbPages = [];
      //   // this.activePage = 1;
      //   for (let index = 0; index < result.join.pages; index++) {
      //     this.dbPages.push(index);
      //   }
      //   this.displayCount = (this.chitgroups.length) + ' of ' + this.count;
      // } else {

      // }
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
    this.getAllChitgroup();
  }

  public onSubmit() {
    this.loadingText = 'Saving...';
    const itemObj = JSON.parse(JSON.stringify(this.chitgroup));
    this.app.getQuery('chitgroup/add_edit_chitgroup', itemObj).then(result => {
      this.loadingText = 'Save';
      console.log(result);
      if (result.status === 'OK') {
        $('#myModalcg_id').modal('hide');
        this.onClear();
      } else {
        this.message = result.message;
        setTimeout(() => {
          this.message = '';
        }, 4000);
      }
      // setTimeout(()=>{
      //   location.reload();
      // },100);
    });
  }



  public add() {
    this.reset();
    $('#myModalcg_id').modal('show');
    this.payloadsChanged();
    // $('#myModaluser_id').appendTo('body');
  }

  public editItem(itemObj) {
    const tempItem = JSON.parse(JSON.stringify(itemObj));
    //tempItem.user_password = '';
console.log(tempItem);
    this.chitgroup = tempItem;
    console.log(this.chitgroup)
    this.payloadsChanged();
    $('#myModalcg_id').modal('show');
    // $('#myModaluser_id').appendTo('body');
  }
  
  public deleteItem(itemObj)
  {
    this.app.getQuery('chitgroup/delete_obj/'+itemObj,{} ).then(result =>{
      console.log(result);
      this.init();
      setTimeout(()=>{
        location.reload();
      },100);
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
