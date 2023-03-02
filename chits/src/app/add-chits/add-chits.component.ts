import { Component, OnInit, OnDestroy, AfterViewInit, Input, ViewChild, ElementRef } from '@angular/core';

import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { AppService } from '../app.service';

declare var $: any;
declare var moment: any;

@Component({
  selector: 'app-add-chits',
  templateUrl: './add-chits.component.html',
  styleUrls: ['./add-chits.component.css'],
  
})
export class AddChitsComponent implements OnInit, OnDestroy, AfterViewInit {
  

  @ViewChild('baseForm') baseForm: NgForm;

  public actfilter = true;
  public inactfilter = false;
  public ceilings=[];
public chitAdds=[];
public customerAdds=[];
  public chits = [];
  public unmatched=[];
public customers=[];
public schemes=[];
public values = [];
public chitgroups=[];
public FinalArray = [];
public months=[];
public mons=[];
public bees:any=[];
resourceId=Array;
counter = Array;
  number = 10;
  public multicust:any={
    cu_id:'-1',
    cu_nc_id:'',
    cu_ac_id:'',
    cu_created_at:'',
    cu_updated_at:'',
  }
  public chit: any = {
    ac_id: '-1',
    // ac_customer_id:'',
    ac_name: '',
    // ac_phone:'',
    ac_chit_scheme: '',
    ac_chit_value: '',
    ac_ceiling:'',
   
    ac_no_of_members: '',
    ac_no_of_installment: '',
    ac_date_of_joining: '',
    ac_first_payment: '',
    // user_type: 'administrator',
    ac_created_at:'',
    ac_updated_at:'',
  };


  public loadingText = 'Save';
  // tslint:disable-next-line:variable-name
  public num_per_page = '10';
  // tslint:disable-next-line:variable-name
  public order_by = 'ac_id';
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
  // public phones=[];
  public browse = 'Browse';
  public ac_customer_id ='-1';
  // public ac_name = '-1';
  public ac_chit_scheme = '';
  public ac_chit_value = '';
  // public ac_customer_id_payload_search = [
  // ];
  public ynot='';
  
  public cu_nc_id_payload = [
  ];
  // public ac_name_payload_search = [
  //   {id: 'ac_name', value: '-1'},
  // ];
  public ac_chit_scheme_payload = [
  ];
  public ac_chit_value_payload = [
  ];

  constructor(public app: AppService, private router: Router, private location: Location,) {
   
    this.chit = {
      ac_id: '-1',
      // ac_customer_id:'-1',
      // ac_name: '',
      // ac_phone:'',
      // ac_nc_id:'',
      ac_chit_scheme: '',
      ac_chit_value: '',
      ac_no_of_members: '',
      ac_no_of_installment: '',
      // ac_max_installment_1:'',
      // ac_max_installment_2:'',
      // ac_max_installment_3:'',
      // ac_max_installment_4:'',
      // ac_max_installment_5:'',
      // ac_max_installment_6:'',
      // ac_max_installment_7:'',
      // ac_max_installment_8:'',
      // ac_max_installment_9:'',
      // ac_max_installment_10:'',
      // ac_max_installment_11:'',
      // ac_max_installment_12:'',
      // ac_max_installment_13:'',
      // ac_max_installment_14:'',
      // ac_max_installment_15:'',
      // ac_max_installment_16:'',
      // ac_max_installment_17:'',
      // ac_max_installment_18:'',
      // ac_max_installment_19:'',
      // ac_max_installment_20:'',
      // ac_max_installment_21:'',
      cd_chit_no:'',
      cd_ceiling:'',
      
      ac_status:'',
      // cu_nc_id:'',
      // cu_ac_id:'',
      ac_date_of_joining: '',
      ac_first_payment: '',
      // user_type: 'administrator',
      // ac_log: '',
      ac_created_at:'',
      ac_updated_at:'',
    };
    this.multicust={
      cu_id:'-1',
      cu_nc_id:'',
      cu_ac_id:'',
      cu_created_at:'',
    cu_updated_at:'',
    };

  }
  
  

  ngOnInit() {

    this.cust();
    this.month();
  }

  ngOnDestroy() {

  }

  ngAfterViewInit() {
    this.init();
    
      // $("#cust").select2();
     
        this.cust();
      //   $(document).ready(function() {
      //     $('.js-example-basic-multiple').select2();
      // });
      $(document).ready(function() {

        var last_valid_selection = null;

        $('#cu_nc_id').change(function(event:any) {

          if ($(this).val().length > this.ac_no_of_members) {

            $(this).val(last_valid_selection);
          } else {
            last_valid_selection = $(this).val();
          }
        });
      });
        
  }
  
  public searchPayloadsChanged() {
  }

  public payloadsChanged() {
    this.ac_chit_scheme;
  }

  public init() {
    this.chits = [];
    this.customers=[];
    this.chitgroups=[];
    this.reset();
    this.getAllChits();
    this.getAllNewcustomers();
    this.getAllChitscheme();
    this.getAllChitvalue();
    this.getAllChitgroup();
    this.filter();
  }

  public reset() {
    this.chit = {
      ac_id: '-1',
      // ac_customer_id:'-1',
      // ac_name: '',
      // ac_phone:'',
      // ac_nc_id:'',
      ac_chit_scheme: '',
      ac_chit_value: '',
      ac_no_of_members: '',
      // ac_no_of_installment: '',
      // ac_max_installment_1:'',
      // ac_max_installment_2:'',
      // ac_max_installment_3:'',
      // ac_max_installment_4:'',
      // ac_max_installment_5:'',
      // ac_max_installment_6:'',
      // ac_max_installment_7:'',
      // ac_max_installment_8:'',
      // ac_max_installment_9:'',
      // ac_max_installment_10:'',
      // ac_max_installment_11:'',
      // ac_max_installment_12:'',
      // ac_max_installment_13:'',
      // ac_max_installment_14:'',
      // ac_max_installment_15:'',
      // ac_max_installment_16:'',
      // ac_max_installment_17:'',
      // ac_max_installment_18:'',
      // ac_max_installment_19:'',
      // ac_max_installment_20:'',
      // ac_max_installment_21:'',
      cd_chit_no:'',
      cd_ceiling:'',
   ac_status:'',
    //  cu_nc_id:'',
    //  cu_ac_id:'',

      ac_date_of_joining: '',
      ac_first_payment: '',
      // user_type: 'administrator',
      // ac_log: '',
      ac_created_at:'',
      ac_updated_at:'',

    };
    this.multicust={
      cu_id:'-1',
      cu_nc_id:'',
      cu_ac_id:'',
      cu_created_at:'',
      cu_updated_at:'',
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
//   public onChitschemeIdChanged(obj) {
//     //this.searchPayloadsChanged();
//  //this.onSearchSubmit();
//  console.log(obj);
//  console.log(this.schemes);
  
//  for(let i=0; i<=this.schemes.length;i++)
//   {
//     // console.log(this.customers[i].nc_name)
//     if(obj===this.schemes[i].cs_chit_scheme)
//     {
//     console.log(this.schemes[i].cs_chit_month);
//     // this.chit.ac_chit_group=this.chitgroups[i].cg_group_name;
//     this.chit.ac_no_of_installment = this.schemes[i].cs_chit_month;
//    this.chit.ac_chit_value = this.values[i].cv_chit_value;
//    this.chit.ac_no_of_members =this.chitgroups[i].cg_chit_members;
  
//    console.log(this.chitgroups[i].cg_group_name);
//    console.log(this.chit.ac_chit_group)
//    this.chit.ac_max_installment_1=this.chitgroups[i].cg_max_installment_1;
//    this.chit.ac_max_installment_2=this.chitgroups[i].cg_max_installment_2;
//    this.chit.ac_max_installment_3=this.chitgroups[i].cg_max_installment_3;
//    this.chit.ac_max_installment_4=this.chitgroups[i].cg_max_installment_4;
//    this.chit.ac_max_installment_5=this.chitgroups[i].cg_max_installment_5;
//    this.chit.ac_max_installment_6=this.chitgroups[i].cg_max_installment_6;
//    this.chit.ac_max_installment_7=this.chitgroups[i].cg_max_installment_7;
//    this.chit.ac_max_installment_8=this.chitgroups[i].cg_max_installment_8;
//    this.chit.ac_max_installment_9=this.chitgroups[i].cg_max_installment_9;
//    this.chit.ac_max_installment_10=this.chitgroups[i].cg_max_installment_10;
//    this.chit.ac_max_installment_11=this.chitgroups[i].cg_max_installment_11;
//    this.chit.ac_max_installment_12=this.chitgroups[i].cg_max_installment_12;
//    this.chit.ac_max_installment_13=this.chitgroups[i].cg_max_installment_13;
//    this.chit.ac_max_installment_14=this.chitgroups[i].cg_max_installment_14;
//    this.chit.ac_max_installment_15=this.chitgroups[i].cg_max_installment_15;
//    this.chit.ac_max_installment_16=this.chitgroups[i].cg_max_installment_16;
//    this.chit.ac_max_installment_17=this.chitgroups[i].cg_max_installment_17;
//    this.chit.ac_max_installment_18=this.chitgroups[i].cg_max_installment_18;
//    this.chit.ac_max_installment_19=this.chitgroups[i].cg_max_installment_19;
//    this.chit.ac_max_installment_20=this.chitgroups[i].cg_max_installment_20;
//    this.chit.ac_max_installment_21=this.chitgroups[i].cg_max_installment_21;
//    this.chit.ac_ceiling1=this.chitgroups[i].cg_chit_no_1;
//    this.chit.ac_ceiling2=this.chitgroups[i].cg_chit_no_2;
//    this.chit.ac_ceiling3=this.chitgroups[i].cg_chit_no_3;
//    this.chit.ac_ceiling4=this.chitgroups[i].cg_chit_no_4;
//    this.chit.ac_ceiling5=this.chitgroups[i].cg_chit_no_5;
//    this.chit.ac_ceiling6=this.chitgroups[i].cg_chit_no_6;
//    this.chit.ac_ceiling7=this.chitgroups[i].cg_chit_no_7;
//    this.chit.ac_ceiling8=this.chitgroups[i].cg_chit_no_8;
//    this.chit.ac_ceiling9=this.chitgroups[i].cg_chit_no_9;
//    this.chit.ac_ceiling10=this.chitgroups[i].cg_chit_no_10;
//    this.chit.ac_ceiling11=this.chitgroups[i].cg_chit_no_11;
//    this.chit.ac_ceiling12=this.chitgroups[i].cg_chit_no_12;
//    this.chit.ac_ceiling13=this.chitgroups[i].cg_chit_no_13;
//    this.chit.ac_ceiling14=this.chitgroups[i].cg_chit_no_14;
//    this.chit.ac_ceiling15=this.chitgroups[i].cg_chit_no_15;
//    this.chit.ac_ceiling16=this.chitgroups[i].cg_chit_no_16;
//    this.chit.ac_ceiling17=this.chitgroups[i].cg_chit_no_17;
//    this.chit.ac_ceiling18=this.chitgroups[i].cg_chit_no_18;
//    this.chit.ac_ceiling19=this.chitgroups[i].cg_chit_no_19;
//    this.chit.ac_ceiling20=this.chitgroups[i].cg_chit_no_20;
//    this.chit.ac_ceiling21=this.chitgroups[i].cg_chit_no_21;
   


//     }
//   }
// // this.payloadsChanged();
// //     this.chit.ac_no_of_installment = this.chit.ac_chit_scheme;
    
//   }


public onChitschemeIdChanged(obj) {
  //this.searchPayloadsChanged();
//this.onSearchSubmit();
console.log(obj);
console.log(this.chitgroups);

for(let i=0; i<=this.chitgroups.length;i++)
{
  // console.log(this.customers[i].nc_name)
  if(obj===this.chitgroups[i].cg_id)
  {
  console.log(this.chitgroups[i].cg_chit_members);
  // this.chit.ac_chit_group=this.chitgroups[i].cg_group_name;
 this.chit.ac_no_of_installment = this.schemes[i].cs_chit_month;
 this.chit.ac_chit_value = this.chitgroups[i].cv_chit_value;
 this.chit.ac_no_of_members =this.chitgroups[i].cg_chit_members;
this.chit.ac_chit_scheme=this.chitgroups[i].cs_chit_scheme;
//  console.log(this.chitgroups[i].cg_group_name);
//  console.log(this.chit.ac_chit_group)

//Append the ceiling textbox and label//
 let html='';
for(let i=1; i<=this.chit.ac_no_of_installment ; i++){
  html += '<label style="padding:1px;">Ceiling '+ i +'</label> <input type="text" name="cd_ceiling"  class="form-group" style="border-radius: 25px;border: 1px solid #D5D8DC;width:300px;">';
  
  // html += '<label style="padding:1px;">Ceiling '+ i +'</label> <input type="text"  [(ngModel)]="chit.cd_ceiling" name="cd_ceiling"  cId="cd_ceiling" #cd_ceiling="ngModel" class="form-group" style="border-radius: 25px;border: 1px solid #D5D8DC;width:300px;">';
  // break;
}
$("#cinte").html(html);
for (let i = 1; i <=this.chit.ac_no_of_installment; i++) {
  // this.addResource();
}
 this.chit.ac_ceiling=this.chitgroups[i].cg_chit_no_1;
 this.chit.ac_ceiling=this.chitgroups[i].cg_chit_no_2;
 this.chit.ac_ceiling=this.chitgroups[i].cg_chit_no_3;
 this.chit.ac_ceiling=this.chitgroups[i].cg_chit_no_4;
 this.chit.ac_ceiling=this.chitgroups[i].cg_chit_no_5;
 this.chit.ac_ceiling=this.chitgroups[i].cg_chit_no_6;
 this.chit.ac_ceiling=this.chitgroups[i].cg_chit_no_7;
 this.chit.ac_ceiling=this.chitgroups[i].cg_chit_no_8;
 this.chit.ac_ceiling=this.chitgroups[i].cg_chit_no_9;
 this.chit.ac_ceiling=this.chitgroups[i].cg_chit_no_10;
 this.chit.ac_ceiling=this.chitgroups[i].cg_chit_no_11;
 this.chit.ac_ceiling=this.chitgroups[i].cg_chit_no_12;
 this.chit.ac_ceiling=this.chitgroups[i].cg_chit_no_13;
 this.chit.ac_ceiling=this.chitgroups[i].cg_chit_no_14;
 this.chit.ac_ceiling=this.chitgroups[i].cg_chit_no_15;
 this.chit.ac_ceiling=this.chitgroups[i].cg_chit_no_16;
 this.chit.ac_ceiling=this.chitgroups[i].cg_chit_no_17;
 this.chit.ac_ceiling=this.chitgroups[i].cg_chit_no_18;
 this.chit.ac_ceiling=this.chitgroups[i].cg_chit_no_19;
 this.chit.ac_ceiling=this.chitgroups[i].cg_chit_no_20;
 this.chit.ac_ceiling=this.chitgroups[i].cg_chit_no_21;
 


  }
}
// this.payloadsChanged();
//     this.chit.ac_no_of_installment = this.chit.ac_chit_scheme;
  
}

// addResource() {
//   this.resourceId.push(this.fb.control('test entry additional'));
// }
  public cust()
  {
    console.log('hello')
  }
  public onStateChanged()
  {
    console.log('hello')
  }
 
  
public onChitvalueChanged(obj) {
  this.payloadsChanged();
  console.log(obj);
// this.onSearchSubmit();
}
public onNameChangedOnSearch(obj) {
  this.searchPayloadsChanged();
this.onSearchSubmit();
}

public getAllChitscheme() {
  const obj = {
    num_per_page: '200',
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
      //  console.log(this.schemes[0].cs_chit_month)
      console.log(this.schemes)
      this.count = result.total;
      this.received = result.received;
      this.dbPages = [];
      // this.activePage = 1;
   
    this.months=this.months.concat(result.data)
    console.log(this.months[0].cs_chit_month)
   for(let i=0;i<=this.months.length;i++)
   {
    console.log(this.months[i].cs_chit_month);
   let monns=this.months[i].cs_chit_month;
   let index=0;
    for ( index = 0; index < monns; index++) {
       this.bees=this.dbPages.push(index);
  
      console.log(this.bees);
      
    }
    
    // console.log(this.mons)
    
   }
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
    num_per_page: '200',
    order_by: 'cg_id',
    order: 'DESC',
    start_from: this.start_from,
    search: this.search,
    active: this.actfilter,
    inactive: this.inactfilter
  };
  console.log(JSON.stringify(obj));
  this.app.getQuery('chitgroup/getallchitgroup', obj).then(result => {

    console.log(result.join);
    this.chitgroups=result.join;
    console.log(this.chitgroups);
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
public getAllChitvalue() {
  const obj = {
    num_per_page: '200',
    order_by: 'cv_id',
    order: 'DESC',
    start_from: this.start_from,
    search: this.search,
    // active: this.actfilter,
    // inactive: this.inactfilter
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

public getAllNewcustomers() {
  const obj = {
    num_per_page: '200',
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

firstDropDownChanged(val: any) {
  console.log(val);
  console.log(this.customers);
  for(let i=0; i<=this.customers.length;i++)
  {
    // console.log(this.customers[i].nc_name)
    if(val===this.customers[i].nc_customer_id)
    {
    console.log(this.customers[i].nc_name);
    this.chit.ac_customer_id=this.customers[i].nc_customer_id;
    this.chit.ac_name=this.customers[i].nc_name;
    this.chit.ac_phone=this.customers[i].nc_phone;
   
    }
  }
  
}
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
    this.app.getQuery('addchit/getalladdchit', obj).then(result => {

      console.log(result.join);
      this.chits=result.join;
      console.log(this.chits);
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
    const itemObj = JSON.parse(JSON.stringify(this.chit));
    let cd_ceiling = $("input[name=cd_ceiling]").val();
    var cd_ceiling_se = [];
    let i=0;
    $('input[name=cd_ceiling]').each(function(key,val) {
      cd_ceiling_se.push(val.value);
    })
    itemObj.cd_ceiling = cd_ceiling_se;

    this.app.getQuery('addchit/add_edit_addchit', itemObj).then(result => {
      this.loadingText = 'Save';
      console.log(result);
      if (result.status === 'OK') {
        $('#myModalac_id').modal('hide');
        this.onClear();
      } else {
        this.message = result.message;
        setTimeout(() => {
          this.message = '';
        }, 500);
      }
      setTimeout(()=>{
          location.reload();
        },100);
    });
    // setTimeout(()=>{
    //   location.reload();
    // },100);
      
  }
  public onSubm()
  {
    const itemObj = JSON.parse(JSON.stringify(this.multicust));
    this.app.getQuery('chitusers/add_edit_chituser', itemObj).then(result => {
      this.loadingText = 'Save';
      console.log(result);
      if (result.status === 'OK') {
        $('#modal_cust').modal('hide');
        this.onClear();
      } else {
        this.message = result.message;
        setTimeout(() => {
          this.message = '';
        }, 500);
      }
      
    });
  }


  public add() {
    this.reset();
    $('#myModalac_id').modal('show');
    // this.payloadsChanged();
    // $('#myModaluser_id').appendTo('body');
  }
 
  public editItem(itemObj) {
    const tempItem = JSON.parse(JSON.stringify(itemObj));
   

    this.chit = tempItem;
    
    console.log(this.chit);
    
    $('#myModalac_id').modal('show');
   
  }
  public deleteItem(itemObj)
  {
    this.app.getQuery('addchit/delete_obj/'+itemObj,{} ).then(result =>{
      console.log(result);
      this.init();
      setTimeout(()=>{
        location.reload();
      },100);
    })
  
  }
  public showModal(itemObj)
  {
    const tempItem = JSON.parse(JSON.stringify(itemObj));
    this.multicust.cu_ac_id = tempItem;
    console.log(this.multicust.cu_ac_id)
    $('#ac_id').change(function(event) {
    
    });
   
    $('#modal_cust').modal('show');
  }

public filter()
{



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
  this.app.getQuery('addchit/get_all_addchit', obj).then(result => {

    console.log(result);
    if (result.status === 'OK') {
      this.chitAdds = this.chitAdds.concat(result.data);
      
      this.count = result.total;
      this.received = result.received;
      this.dbPages = [];
      // this.activePage = 1;
      for (let index = 0; index < result.pages; index++) {
        this.dbPages.push(index);
      }
      this.displayCount = (this.chits.length) + ' of ' + this.count;
    } 

  
  const obj1 = {
    num_per_page: '200',
    order_by: 'nc_id',
    order: 'DESC',
    start_from: this.start_from,
    search: this.search,
    // active: this.actfilter,
    // inactive: this.inactfilter
  };
  console.log(JSON.stringify(obj1));
  this.app.getQuery('newcustomers/get_all_newcustomers', obj1).then(result => {

    console.log(result.data);
    if (result.status === 'OK') {
      // this.editItem(result.data[0]);
      this.customerAdds = this.customerAdds.concat(result.data);
      
      this.count = result.total;
      this.received = result.received;
      this.dbPages = [];
      // this.activePage = 1;
      for (let index = 0; index < result.pages; index++) {
        this.dbPages.push(index);
      }
      this.displayCount = (this.customers.length) + ' of ' + this.count;
    } 

    console.log(this.chitAdds);

    console.log(this.customerAdds);
    // let notPresentInData = this.customerAdds.filter(val => !this.chitAdds.includes(val));
    // console.log(notPresentInData);
    // var filteredKeywords = this.customerAdds.filter((word) => !this.chitAdds.includes(word));

    // console.log(filteredKeywords);

    this.unmatched = this.customerAdds.filter(item => !this.chitAdds.some(_item => _item.ac_customer_id === item.nc_customer_id));

    console.log(this.unmatched);



    // const output = this.customerAdds.filter( (obj)=> {
    //   return this.chitAdds.indexOf(obj) === -1;
    // });
    // console.log(output);





    
//     var result1 = this.chitAdds.filter( (o1)=> {
//       // console.log(o1)
//       return !this.customerAdds.some( (o2)=> {
//           return o1.ac_id != o2.nc_id; // return the ones with equal id
//           // console.log(o2)
//      });
//   });
// console.log(result1)

  //   for (var i = 0; i < this.chitAdds.length; i++) {
  //     for (var j = 0; j < this.customerAdds.length; j++) {
  //         // var temp = this.customerAdds[j];
  //         if(this.chitAdds[i]!==this.customerAdds[j]){
  //             this.FinalArray.push(this.chitAdds[j]);
  //             break;
              
             
  //         }
          
  //     }
  // }
  // // console.log(this.chits)
  // // console.log(this.customers)
  // console.log(this.FinalArray);
  });
});
 
}
public month(){
  for(let i=1;i<=11;i++)
  {
    console.log('<input type="text">')
  }
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
