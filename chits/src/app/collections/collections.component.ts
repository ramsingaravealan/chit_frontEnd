import { Component, OnInit, OnDestroy, AfterViewInit, Input, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { AppService } from '../app.service';
import { element } from 'protractor';
import { Pipe, PipeTransform } from '@angular/core';
import { DISABLED } from '@angular/forms/src/model';
import { ActivatedRoute } from "@angular/router";
declare var $: any;
declare var moment: any;


@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.css']
})

export class CollectionsComponent implements OnInit, OnDestroy, AfterViewInit  {
  @ViewChild('baseForm') baseForm: NgForm;

  public actfilter = true;
  public inactfilter = false;
public col_filters=[];
  public collections:any = [];
  public payings=[];
  public chits = [];
  public chit = {};
  public quicksavepros =[];
  public valuesavepros=[];
  public newArr=[];
  public collects:any= [];
 public colfilters:any=[];
 public listItem:any={};
  dip='block';
  disp='block';
  dis='block';
  di='block';
  public display='block';
 public collect:any={
  col_id: '-1',
  collection_id:'',
    col_customer_id: '',
    col_name: '',
    col_phone: '',
    col_chit_scheme: '',
    col_chit_value: '',
    col_chit_installment: '',
    col_first_payment: '',
    col_payable_amount: '',
    col_outstanding:'0',
    col_max_installment:'-1',
    col_chit_no:'-1',
    col_status:'pending',
    col_date: '',
    col_log: '',
 }
  public collection: any = {
    col_id: '-1',
    collection_id:'',
    col_customer_id: '',
    col_name: '',
    col_phone: '',
    col_chit_scheme: '',
    col_chit_value: '',
    col_chit_installment: '',
    col_first_payment: '',
    col_payable_amount: '',
    col_outstanding:'0',
    col_max_installment:'-1',
    col_chit_no:'-1',
    col_date: '',
    col_log: '',
  };


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
  public search ='';
  public search_id:any;
  public errorText = '';
  public style = '';
  public isDisplay = 'false';
  public outstanding:any;

public col_status:any;

public paystatus:any;






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
  public col_max_installment: '';
  public col_chit_no: '';
  public col_first_payment: '';
  public col_payable_amount: '';
  public col_outstanding:any;
  
  public col_date: '';
  public pending: any;
  public newvalue:any;
  public dataRefresher: any;
 customerPay : boolean = false;
 pon : boolean = false;
  paiditem: boolean = false;
  pai: boolean = false;
  paya: boolean = false;
  paytm: boolean = false;
  payto: boolean = false;
  payam: boolean = false;
  paypm: boolean = false;
  payo: boolean = false;
  pat: boolean = false;
  pata: boolean = false;
  
  subt: boolean = false;
  subway: boolean = false;
  padyapa: boolean = false;
  panda: boolean = false;
  pen: boolean = false;
  pal: boolean = false;
  pan: boolean = false;
  payy: boolean = false;
  plain: boolean = false;
  paaa: boolean = false;
  pani: boolean = false;
  par: boolean = false;
  para: boolean = false;
  pt: boolean = false;
  patna: boolean = false;
  payu: boolean = false;
  part: boolean = false;
  party: boolean = false;
  park: boolean = false;
  parnk: boolean = false;
  


  subpay:boolean =false;
  public res:any=[];
  public pe:any;
  public qft_chit_value: any;
  public max_installment:any;
  public status:any;
  public eat:any;
  public chitnum:any;
  public isData:boolean=false;
  public isDisable:boolean=false;
  public seeBankDetailFlag: boolean;
  public goToUpdateBankFlag: boolean;
  public goToUpdateBankFlag1: boolean;
  public goToUpdateBankFlag2: boolean;
  public goToUpdateBankFlag3: boolean;
  public goToUpdateBankFlag4: boolean;
  public goToUpdateBankFlag5: boolean;
  public goToUpdateBankFlag6: boolean;
  public goToUpdateBankFlag7: boolean;
  public goToUpdateBankFlag8: boolean;
  public goToUpdateBankFlag9: boolean;
  public goToUpdateBankFlag10: boolean;
  public goToUpdateBankFlag11: boolean;
  public pay:any="pay";
  public paying:any="pay";
  public chitnumber:any;
  public outpay:any;
  public outing:any;
  public rating:any;
  public lend:any;
  public trend:any;
 public edu:any;
public ramp :any;
public mate :any;
public paylo:any;
public paylog:any;
public paylod:any;
public paw:any;
public quad:any;
public teddy:any;
public twin:any;
public person:any;
public personpaid:any;
public paypal:any;
public payzip:any;
public payzap:any;
public payzero:any;
public paytotal:any;
public paytot:any;
public payctc:any;
public hutch:any;
public payji:any;
public paytou:any;
public paytodo:any;
public paytime:any;
public paypending:any;
public colfilters1:any=[];
public coins:any=[];
public chips:any=[];
public ac_max_installment_2:any;
public ac_max_installment_3:any;
public ac_max_installment_1:any;
public ac_chit_no_1:any;
public ac_chit_no_2:any;
public completed7:any;
public ted:any;
public goin:boolean;
public tea:boolean;
public milk:boolean;
public isDisabled = false;
private isButtonVisible = true;
public btnstate: boolean=false;
public chit2:boolean=false;
public chit3:boolean=false;
public chit4:boolean=false;
public chit5:boolean=true;
public chit6:boolean=false;
public chit7:boolean=false;
public chit8:boolean=false;
public chit9:boolean=false;
public serverStatus:any="none";
public Pay="Pay";
public disapprove_show:any;
public approve_show:any;
public isOn: boolean = false;
  // public collect:any={};
  // public ac_chit_scheme = '';
  // public ac_chit_value = '';
  // public ac_name_payload = [
  // ];
  // public ac_chit_scheme_payload = [
  // ];
  // public ac_chit_value_payload = [
  // ];

  constructor(public app: AppService, private router: Router, private location: Location,private change:ChangeDetectorRef,private activatedRoute:ActivatedRoute) {
// this.ac_max_installment_2=ac_max_installment_2;
// var ac_max2=$("#ac_max_installment_2").val();
// console.log(Json.parse(ac_max2)
console.log((JSON.stringify(this.listItem.ac_max_installment_2)));
// this.compareArray()
  }

  ngOnInit() {
    // this.compareArray();
    //  this.getAllCollections();
    
   
   
  }

  ngOnDestroy() {

  }

  ngAfterViewInit() {
    
   
    this.init();
    $(document).ready(function(){
      var show = localStorage.getItem('show');
      if(show === 'true'){
          $('.chit2').hide();
      }
      // $(document).on("click","#MyButton",() =>{
      //   alert('Confirm to refresh alert messages.');
      //   $("#refreshDivID").load("#refreshDivID .reloaded-divs > *");
      // }); 
  });
 
   
    
  
   
    
    
  }
 
  onInput(item)
  {
    console.log(item)
  }
  public searchPayloadsChanged() {
  }

  public payloadsChanged() {
  }

  public init() {
    this.collections = [];
    this.quicksavepros=[];
    this.valuesavepros=[];
    this.newArr=[];
    this.reset();
    this.getAllCollections()
    this.getAllChits();
    
    this.getAllQuicksavepro();
    this.getAllvaulesavepro();
    this.change.detectChanges();
    // this.refreshData();
    
  }

  public reset() {
    this.collect = {
      col_id: '-1',
      collection_id:'',
      col_customer_id: '',
      col_name: '',
      col_phone: '',
      col_chit_scheme: '',
      col_chit_value: '',
      col_chit_installment: '',
      col_first_payment: '',
      col_payable_amount: '',
      col_outstanding:'',
     col_max_installment:'-1',
    //  col_status:'',
      col_chit_no:'-1',
      col_date: '',
      col_log: '',
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
  //   this.collection.ac_no_of_installment = this.chit.ac_chit_scheme;

  // }
  
public getAllQuicksavepro(){
  // if(this.col_customer_id && this.col_chit_value)
  // {

  // if(this.ac_chit_value==this.qft_chit_value)
  // {
  this.app.getQuery('collections/get_all_quicksavepro_fiftythousand','').then(result => {
    console.log(result);
    
    this.quicksavepros= result.data;
    console.log(this.quicksavepros);
    console.log(this.collections)
    console.log(this.quicksavepros)
    // for(let i=0;i<=this.quicksavepros.length;i++)
    // {
    //   var chit_no=this.quicksavepros[i].qft_chit_no;
    //   console.log(chit_no);
    //   var qchit_value=this.quicksavepros[i].qft_chit_value;
    //   console.log(qchit_value);
    //   // this.collections.push(chit_no ,qchit_value);
    //   // console.log(this.collections)
      

    // }
    // for (let i = 0; i <= this.chits.length; i++) {
    //   var chitvalue=this.chits[i].ac_chit_value;
    //   console.log(chitvalue)
    // }
// this.newArr=this.quicksavepros.concat(this.collections);
//       console.log(this.newArr);
  });
  
//  }
}
public getAllvaulesavepro(){
  // if(this.col_customer_id && this.col_chit_value)
  // {

  // if(this.ac_chit_value==this.qft_chit_value)
  // {
  this.app.getQuery('collections/get_all_valuesavepro_fivelakh','').then(result => {
    console.log(result);
    
    this.valuesavepros= result.data;
    console.log(this.valuesavepros);
    console.log(this.collections)
    console.log(this.quicksavepros)
    // for(let i=0;i<=this.quicksavepros.length;i++)
    // {
    //   var chit_no=this.quicksavepros[i].qft_chit_no;
    //   console.log(chit_no);
    //   var qchit_value=this.quicksavepros[i].qft_chit_value;
    //   console.log(qchit_value);
    //   // this.collections.push(chit_no ,qchit_value);
    //   // console.log(this.collections)
      

    // }
    // for (let i = 0; i <= this.chits.length; i++) {
    //   var chitvalue=this.chits[i].ac_chit_value;
    //   console.log(chitvalue)
    // }
// this.newArr=this.quicksavepros.concat(this.collections);
//       console.log(this.newArr);
  });
  
//  }
}

public maxInstallment(val)
{
  
  console.log(val)
  this.collection.col_max_installment=val;

}
public chitno(val)
{
  
  console.log(val)
  this.collection.col_chit_no=val;
  for(let i=0; i<=this.quicksavepros.length;i++)
  {
    // console.log(this.customers[i].nc_name)
    if(val===this.quicksavepros[i].qft_chit_no)
    {
    console.log(this.quicksavepros[i].qft_chit_value);
    this.collection.col_max_installment=this.quicksavepros[i].qft_max_installment;
    console.log(this.collection.max_installment)
    // this.chit.ac_name=this.customers[i].nc_name;
    // this.chit.ac_phone=this.customers[i].nc_phone;
    }
  }
  

}
public valchitno(val)
{
  console.log(val)
  this.collection.col_chit_no=val;
  for(let i=0; i<=this.valuesavepros.length;i++)
  {
    // console.log(this.customers[i].nc_name)
    if(val===this.valuesavepros[i].val_chit_no)
    {
    console.log(this.valuesavepros[i].val_chit_value);
    this.collection.col_max_installment=this.valuesavepros[i].val_max_installment;
    console.log(this.collection.col_max_installment)
    // this.chit.ac_name=this.customers[i].nc_name;
    // this.chit.ac_phone=this.customers[i].nc_phone;
    }
  }

}

  public getAllCollections() {
    const obj = {
      // num_per_page: this.num_per_page,
      order_by: this.order_by,
      order: this.order,
      start_from: this.start_from,
      search: this.search,
      active: this.actfilter,
      inactive: this.inactfilter
    };
    
    console.log(JSON.stringify(obj));
    this.app.getQuery('collections/get_all_collections', obj).then(result => {

      console.log(result);
      if (result.status === 'OK') {
        this.collections = this.collections.concat(result.data);
        console.log(this.collections);
       
        this.count = result.total;
        this.received = result.received;
        this.dbPages = [];
        // this.activePage = 1;
       
        for (let index = 0; index < result.pages; index++) {
          this.dbPages.push(index);
        }
        this.displayCount = (this.collections.length) + ' of ' + this.count;
        
      
      } 
    
    
    });
  
  
  }
  

 
 
  public getAllChits() {
    const obj = {
      num_per_page: '200',
      order_by: 'ac_id',
      order: 'DESC',
      start_from: this.start_from,
      search: this.search,
      active: this.actfilter,
      inactive: this.inactfilter
    };
    console.log(JSON.stringify(obj));
    console.log(this.search);
    // if (this.search === this.search) {


      this.app.getQuery('addchit/get_all_addchit', obj).then(result => {

        console.log(result);
        // this.chits=result;
        // console.log(this.chits);
        if (result.status === 'OK') {

          this.chits = this.chits.concat(result.data);
          console.log(this.chits);
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
        // localStorage.setItem('search', JSON.stringify(this.chits));
      });
    // }
  }
  
  firstDropDownChanged(val: any) {
    console.log(val);
    console.log(this.chits);
    for(let i=0; i<=this.collections.length;i++)
    {
      // console.log(this.customers[i].nc_name)
      if(val===this.collections[i].col_customer_id)
      {
      console.log(this.collections[i].nc_name);
      this.collection.col_customer_id=this.collections[i].col_customer_id;
      // this.chit.ac_name=this.customers[i].nc_name;
      // this.chit.ac_phone=this.customers[i].nc_phone;
      this.collection.col_chit_value=this.collections[i].col_chit_value;
      console.log(this.collection.col_chit_value)
      }

    }
    for(let i=0;i<=this.chits.length;i++)
    {
      console.log(this.chits[i].ac_chit_value)
    }
    
  }
  public Search() {
    console.log(this.chits);
    console.log(this.collections);
    this.chits = this.chits.filter(

      m => {
        return (m.ac_customer_id).toLocaleLowerCase().match(this.search_id.toLocaleLowerCase())
        //  return (m.col_customer_id).toLocaleLowerCase().match(this.search.toLocaleLowerCase())
      || (m.ac_phone).toLocaleLowerCase().match(this.search_id.toLocaleLowerCase())
      }
     


    );
   
    console.log(this.chits)

    
    this.collections = this.collections.filter(

      m => {

       
        //  return (m.ac_customer_id).toLocaleLowerCase().match(this.search.toLocaleLowerCase())
        return (m.col_customer_id).toLocaleLowerCase().match(this.search_id.toLocaleLowerCase())
        || (m.col_phone).toLocaleLowerCase().match(this.search_id.toLocaleLowerCase())

       
      }
    
     
    );
  
    console.log(this.collections)
   
    
    
    if(this.collections.length!==0)
    {


    
    this.collect.col_outstanding=this.collections[0].col_outstanding;
    // console.log(this.collect.col_outstanding)
   
   
 this.collect.col_status='completed';
    
    
    }
   
    else{
      this.collect.col_outstanding=0;
      this.collect.col_status='pending';
      
    }
    
    
    //  if(this.collections.col_status=='pending')
    //  {
    //   this.collect.col_status='pending';
    //  }else{
    //   this.collect.col_status='completed';
    //  }
    
    
      
    
    this.customerPay = !this.customerPay;

    // this.collections=this.collections.filter(
    //   m => {
    //     return (m.col_customer_id).toLocaleLowerCase().match(this.search_id.toLocaleLowerCase())
    //     //  return (m.col_customer_id).toLocaleLowerCase().match(this.search.toLocaleLowerCase())
    //   || (m.col_phone).toLocaleLowerCase().match(this.search_id.toLocaleLowerCase())
    //   }
    // );
    
   
   
    // if(this.collections[0].col_status=="completed"){
    //   (document.getElementById('subbtn')as HTMLButtonElement).disabled=true;
    //  }else{
    //   (document.getElementById('subbtn') as any).disabled = false;
    //  }
    // for(let i=0; i<=this.collections.length;i++)
    // {
    //   if(this.collections[i].col_status=="completed")
    //   {
    //   // this.col_status=this.collections[i].col_status;
      // console.log(this.col_status);
      // this.max_installment=this.collections[i].col_max_installment;
      // console.log(this.collections[i].col_status);
     
      // $('.chit2').attr('disabled', true);
    //   }else{
    //     // $('.chit2').attr('enabled', true);
    //   }
      
    // }
    // this.personpaying();
   

    
    this.res = this.collections.reduce((res, curr) => {

      const existing = res.find((e) => e.col_customer_id === curr.col_customer_id);
      
      if (existing) {
        existing.valor = +existing.valor + +curr.valor;
      } else {
        res.push(curr);
      }
      
      return res;
    }, [])
  
    console.log(this.res)
    
   
  }
    
 
  public onSearchSubmit() {
    // localStorage.getItem('search');
    this.onChangePage();

  }

  public onClear() {
    this.search = '';
    this.onChangePage();
  }

  public onChangePage() {
    this.start_from = 0;
    // this.activePage = this.start_from / parseInt(this.num_per_page, 10);
    this.init();
  }

  public moveNext() {
    // this.start_from = this.start_from + parseInt(this.num_per_page, 10);
    // this.activePage = this.start_from / parseInt(this.num_per_page, 10);
    this.getAllCollections();
  }


  
  
  public add() {
    // this.reset();
    // $('#myModalcol_id').modal('show');
    // this.payloadsChanged();
    // $('#myModaluser_id').appendTo('body');
  }
 
  public payItem(item,num){
    // this.getAllCollections();
      //  $('#myModalcol_id').modal('show');
    console.log(item)
    console.log(num)
    const tempItem = JSON.parse(JSON.stringify(item));
    const temp = JSON.parse(JSON.stringify(num));
    this.collection=tempItem;
    this.chitnumber=temp;
    console.log(this.collection)
    console.log(this.chitnumber)
this.collect.col_payable_amount='';

// console.log(this.collections)
// this.colfilters=this.collections.filter(e=>e.col_status.indexOf('completed')!==-1);
    console.log(this.colfilters);
   
 for(let i=0;i<=this.collections.length;i++)
{
  if(this.collections.length==0)
  {
    $('#myModalcol_id').modal('show');
  }
  else if(this.collections[i].col_status=="completed" && this.collections[i].col_max_installment==this.collection)
  {
    this.paystatus="completed";
     
    console.log(this.paystatus)
    this.isData=true;
     this.pay="paid"
    this.outpay=this.collections[i].col_outstanding;
    console.log(this.outpay);
    // $(".chit2").prop('disabled',true);
    // localStorage.setItem('show', 'true');
    $('.chit2').hide();
  //  this.chit2=true;
    // this.subt=!this.subt;
    // $('#myModalcol_id').css({"display":"block"});
    // $('#myModalcol_id').modal('');
    // $(".chit2").on('click',function(){
     
    // })
   
    
  }
  else {
    if(this.collections[0].col_status=="pending" && this.collections[i].col_max_installment==this.collection) {
      this.isData=false;
      this.outpay=this.collections[0].col_outstanding;
      console.log(this.outpay);
      this.pay="pay"
       $('#myModalcol_id').modal('show');
      //  this.paystatus="pending";
      //  console.log(this.paystatus)
    }
  }
  
    
  
  }
    
 
  

   
  
  
} 


 
public payItem1(item,num){
  //  $('#myModalcol_id').modal('show');
  // this.router.navigate(['/console/maxcollection']);
  // this.activatedRoute.paramMap.subscribe((params) => {
  //   this.ac_max_installment_3 = params.get("ac_max_installment_3"); //+ string to number
  // });
  
  console.log(item)
  console.log(num)
  const tempItem = JSON.parse(JSON.stringify(item));
  const temp = JSON.parse(JSON.stringify(num));
  this.collection=tempItem;
  this.chitnumber=temp;
  console.log(this.collection)
  console.log(this.chitnumber)
this.collect.col_payable_amount='';
// this.router.navigate(['/console/maxcollection' + this.collection])
console.log(this.collections)
for(var i=0;i<=this.collections.length;i++)
{
  // console.log(this.collections[i].col_chit_no==3 ? ' 3 -- okk':'no')
  // alert(this.collection==this.collections[i].col_max_installment)
  if(this.collection==this.collections[i].col_max_installment)
 {
  $('#myModalcol_id').modal('hide');
 }
//  console.log(this.collection==this.collections[i].col_max_installment)
// this.colfilters=this.collections.filter(e=>e.col_status.indexOf('completed')!==-1);
//   console.log(this.colfilters);
// var collect=this.collection==this.collections[i].col_max_installment ;
// console.log(collect);
// console.log(collect==true && this.collections[i].col_status=="completed")
// if(collect==true )
// {
  
  
//   $('#myModalcol_id').modal('hide');
   
// }
// if(this.collect.col_status=='completed')
//     {
//       $('#myModalcol_id').modal('hide');
//     }
//  else if(collect==false)
//   {
//   $('#myModalcol_id').modal('hide');
//   }


  else if(this.collection!=this.collections[i].col_max_installment)
{
  $('#myModalcol_id').modal('show');
  // this.display='block';
  // this.dip='block';
}


 
      if(this.collections[i].col_status=="completed" && this.collections[i].col_max_installment==this.collection)
{
  this.display='none';
  //  this.dip='none';
  this.paystatus="completed";
  console.log(this.paystatus)
  //  this.isDisable=true;
  this.outing=this.collections[i].col_outstanding;
  console.log(this.outing);
  // $(".chit3").hide();
  // this.subway=!this.subway;
  this.Pay="Paid";
//   this.disapprove_show = true 
// this.approve_show = false
  
  $("#myModalcol_id").hide();
  
}
  
 else {
//  else 
 if(this.collections[0].col_status=="pending" && this.collections[i].col_max_installment==this.collection ) {
  // this.isDisable=false;
  this.dip='block';
  $(".chit3").prop('enable',false);
  this.outing=this.collections[0].col_outstanding;
  console.log(this.outing);
 

  this.approve_show = true 
this.disapprove_show = false
  $('#myModalcol_id').modal('show');
  
}

 
}
 
 
}    
// this.payItem2(item,num);
// this.compareArray();

}





 

public payItem2(item,num){
  //alert()
  //  $('#myModalcol_id').modal('show');
  console.log(item)
  console.log(num)
  
  const tempItem = JSON.parse(JSON.stringify(item));
  const temp = JSON.parse(JSON.stringify(num));
  this.collection=tempItem;
  this.chitnumber=temp;
  console.log(this.collection)
  console.log(this.chitnumber)
this.collect.col_payable_amount='';

console.log(this.collections + 'testing');



// this.colfilters=this.collections.filter(e=>e.col_status.indexOf('completed')!==-1);
//   console.log(this.colfilters);

for(let i=0;i<=this.collections.length;i++)
{
 console.log(this.collections[0].chit_no==4 ? ' 4 -- okk':'no')
  if(this.collection==this.collections[i].col_max_installment)
 {
  $('#myModalcol_id').modal('hide');
 }
// var collect=this.collection==this.collections[i].col_max_installment
// console.log(collect)
// if(collect===true)
// {
  // if(false)
  // {
  // console.log(this.collections[i].col_max_installment)
  // $('#myModalcol_id').modal('hide');
  // this.display='none';
  // }
  // else if(this.collection=this.collections[i].col_max_installment)
  // {
  // // console.log(this.collections[i].col_max_installment)
  // $('#myModalcol_id').modal('hide');
  // // this.display='none';
  // }
// }
// if(this.collect.col_status=='completed')
//     {
//       $('#myModalcol_id').modal('hide');
//     }
// else if(this.collection==this.collections[i].col_max_installment)
// {
// //  else if(collect!=false)
// //   {
  
//   $('#myModalcol_id').modal('hide');
//   // }
// }
  else if(this.collection!=this.collections[0].col_max_installment)
  {
    $('#myModalcol_id').modal('show');
    //  this.disp='block';
  }
  
 if(this.collections[i].col_status=="completed" && this.collections[i].col_max_installment==this.collection )
{
  

 
   this.disp='none';
  this.paystatus="completed";
  console.log(this.paystatus)
  //  this.isDisable=true;
  this.rating=this.collections[i].col_outstanding;
    console.log(this.rating);
  // $(".chit4").hide();
  // this.padyapa=!this.padyapa;
  $("#myModalcol_id").hide();
  //  $('#myModalcol_id').modal('');
  // $('#myModalcol_id').css({"display":"block"});
 
 
 
} 
else {
if(this.collections[0].col_status=="pending" && this.collections[i].col_max_installment==this.collection  ) {
  // this.isDisable=false;
  this.disp='block';
  this.rating=this.collections[0].col_outstanding;
    console.log(this.rating);
  $(".chit4").prop('enable',false);
   $('#myModalcol_id').modal('show');
 
  
}
// this.compareArray();
// else if(this.collection) {
  
//    $('#myModalcol_id').modal('show');
}
 
}
this.payItem3(item,num);
  }

  public payItem3(item,num){
    // $('#myModalcol_id').modal('show');
    console.log(item)
    console.log(num)
    const tempItem = JSON.parse(JSON.stringify(item));
    const temp = JSON.parse(JSON.stringify(num));
    this.collection=tempItem;
    this.chitnumber=temp;
    console.log(this.collection)
    console.log(this.chitnumber)
  this.collect.col_payable_amount='';
  
  // console.log(this.collections)
  this.colfilters=this.collections.filter(e=>e.col_status.indexOf('completed')!==-1);
    console.log(this.colfilters);
  for(let i=0;i<=this.collections.length;i++)
  {
     

    
    if(this.collection==this.collections[i].col_max_installment && this.collections[i].col_status=="completed")
    {
      var status=this.collections[i].col_status;
      console.log(status);
      if(status=='completed')
      {
      // $('#myModalcol_id').modal('hide');
      this.dis='none';
      }
    }
  else if(this.collection!=this.collections[0].col_max_installment)
  {
    // console.log(this.collections[i].col_max_installment)
    $('#myModalcol_id').modal('show');
    //  this.dis='block';
  }
  if(this.collections[i].col_status=="completed" && this.collections[i].col_max_installment==this.collection )
  {
    
     this.dis='none';
    //  this.isDisable=true;
    this.lend=this.collections[i].col_outstanding;
    console.log(this.lend);
    $(".chit5").hide();
    this.panda=!this.panda;
    // $('#myModalcol_id').modal('');
 
    
  } 
  else {
  if(this.collections[0].col_status=="pending" && this.collections[i].col_max_installment==this.collection ){
    // this.isDisable=false;
    this.dis='block';
    this.lend=this.collections[0].col_outstanding;
    console.log(this.lend);
    $(".chit5").prop('enable',false);
    $('#myModalcol_id').modal('show');
    
  }
}
  
}   
// this.payItem4(item,num);
  
    }
    public payItem4(item,num){
      // $('#myModalcol_id').modal('show');
      console.log(item)
      console.log(num)
      const tempItem = JSON.parse(JSON.stringify(item));
      const temp = JSON.parse(JSON.stringify(num));
      this.collection=tempItem;
      this.chitnumber=temp;
      console.log(this.collection)
      console.log(this.chitnumber)
    this.collect.col_payable_amount='';
    
    // console.log(this.collections)
    // this.colfilters=this.collections.filter(e=>e.col_status.indexOf('completed')!==-1);
    //   console.log(this.colfilters);
    for(let i=0;i<=this.collections.length;i++)
    {
      // console.log(this.collection=this.collections[i].col_max_installment)
  
      if(this.collection==this.collections[0].col_max_installment && this.collections[0].col_status=="completed")
    {
      var status=this.collections[i].col_status;
      console.log(status);
      if(status=='completed')
      {
      // $('#myModalcol_id').modal('hide');
      this.di='none';
      }
    }
    else if(this.collection!=this.collections[i].col_max_installment)
    {
      $('#myModalcol_id').modal('show');
      //  this.dis='block';
    }
    if(this.collections[i].col_status=="completed" && this.collections[i].col_max_installment==this.collection)
    {
     
       this.di='none';
      //  this.isDisable=true;
      this.trend=this.collections[i].col_outstanding;
      console.log(this.trend);
      $(".chit6").hide();
      this.pen=!this.pen;
      // $('#myModalcol_id').modal('');
      
    }
    else {
    if(this.collections[0].col_status=="pending" && this.collections[i].col_max_installment==this.collection ){
      // this.isDisable=false;
      this.di='block';
      this.trend=this.collections[0].col_outstanding;
      console.log(this.trend);
      $(".chit6").prop('enable',false);
      $('#myModalcol_id').modal('show');
      
    }
  }
    }    
    //this.payItem5(item,num);
      }
   
      public payItem5(item,num){
         $('#myModalcol_id').modal('show');
        console.log(item)
        console.log(num)
        const tempItem = JSON.parse(JSON.stringify(item));
        const temp = JSON.parse(JSON.stringify(num));
        this.collection=tempItem;
        this.chitnumber=temp;
        console.log(this.collection)
        console.log(this.chitnumber)
      this.collect.col_payable_amount='';
      
      // console.log(this.collections)
      this.colfilters=this.collections.filter(e=>e.col_status.indexOf('completed')!==-1);
        console.log(this.colfilters);
      for(let i=0;i<=this.collections.length;i++)
      {
      if(this.collections[i].col_status=="completed" && this.collections[i].col_max_installment==this.collection && this.col_outstanding[i]=='0')
      {
       
        // this.display='none';
        // var co7=this.collections[i].col_status=="completed";
        // this.completed7=co7;
        // console.log(this.completed7)
        //  this.isDisable=true;
        this.edu=this.collections[i].col_outstanding;
        console.log(this.edu);
        $(".chit7").prop('disabled',true);
        this.pal=!this.pal;
        $('#myModalcol_id').modal('hide');
      
      }
      else if(this.collections[i].col_status=="pending" && this.collections[i].col_max_installment==this.collection && this.col_outstanding[i]=='0'){
        // this.isDisable=false;
        this.edu=this.collections[0].col_outstanding;
        console.log(this.edu);
        $(".chit7").prop('enable',false);
        $('#myModalcol_id').modal('show');
        
      }
      }    
      this.payItem6(item,num);
        }
        public payItem6(item,num){
           $('#myModalcol_id').modal('show');
          console.log(item)
          console.log(num)
          const tempItem = JSON.parse(JSON.stringify(item));
          const temp = JSON.parse(JSON.stringify(num));
          this.collection=tempItem;
          this.chitnumber=temp;
          console.log(this.collection)
          console.log(this.chitnumber)
        this.collect.col_payable_amount='';
        
        // console.log(this.collections)
        this.colfilters=this.collections.filter(e=>e.col_status.indexOf('completed')!==-1);
          console.log(this.colfilters);
        for(let i=0;i<=this.collections.length;i++)
        {
        if(this.collections[i].col_status=="completed" && this.collections[i].col_max_installment==this.collection && this.col_outstanding[i]=='0')
        {
          
          // this.display='none';
        //   var co7=this.collections[i].col_status="completed";
        // this.completed7=co7;
        // console.log(this.completed7)
          //  this.isDisable=true;
          this.ramp=this.collections[i].col_outstanding;
          console.log(this.ramp);
          $(".chit8").prop('disabled',true);
          this.pan=!this.pan;
          $('#myModalcol_id').modal('hide');
    
        }
        else  if(this.collections[i].col_status=="pending" && this.collections[i].col_max_installment==this.collection && this.col_outstanding[i]=='0'){
          // this.isDisable=false;
          this.ramp=this.collections[0].col_outstanding;
          console.log(this.ramp);
          $(".chit8").prop('enable',false);
          $('#myModalcol_id').modal('show');
          
        }
        }    
        // this.payItem7(item,num);
          }
          public payItem7(item,num){
             $('#myModalcol_id').modal('show');
            console.log(item)
            console.log(num)
            const tempItem = JSON.parse(JSON.stringify(item));
            const temp = JSON.parse(JSON.stringify(num));
            this.collection=tempItem;
            this.chitnumber=temp;
            console.log(this.collection)
            console.log(this.chitnumber)
          this.collect.col_payable_amount='';
          
          // console.log(this.collections)
          this.colfilters=this.collections.filter(e=>e.col_status.indexOf('completed')!==-1);
            console.log(this.colfilters);
          for(let i=0;i<=this.collections.length;i++)
          {
            // if(this.collections[i].col_max_installment==this.collection)
            // {
            //   var co7=this.collections[i].col_status
            //   this.completed7=co7;
            //   console.log(this.completed7)
            // }
          
          if(this.collections[i].col_status=="completed" && this.collections[i].col_max_installment==this.collection )
          {
            // this.display='none';
            //  this.isDisable=true;
            this.mate=this.collections[i].col_outstanding;
          console.log(this.mate);
            $(".chit9").prop('disabled',true);
            this.payy=!this.payy;
            // $('#myModalcol_id').modal('hide');
          }
          else  if(this.collections[i].col_status=="pending" && this.collections[i].col_max_installment==this.collection ){
            // this.isDisable=false;
            this.mate=this.collections[0].col_outstanding;
            console.log(this.mate);
            $(".chit9").prop('enable',false);
            $('#myModalcol_id').modal('show');
            
          }
          }    
          
            }
            public payItem8(item,num){
              $('#myModalcol_id').modal('show');
              console.log(item)
              console.log(num)
              const tempItem = JSON.parse(JSON.stringify(item));
              const temp = JSON.parse(JSON.stringify(num));
              this.collection=tempItem;
              this.chitnumber=temp;
              console.log(this.collection)
              console.log(this.chitnumber)
            this.collect.col_payable_amount='';
            
            // console.log(this.collections)
            this.colfilters=this.collections.filter(e=>e.col_status.indexOf('completed')!==-1);
              console.log(this.colfilters);
            for(let i=0;i<=this.collections.length;i++)
            {
               if(this.collections[i].col_max_installment==this.collection)
            {
              var co7=this.collections[i].col_status
              this.completed7=co7;
              console.log(this.completed7)
            }
            if(this.collections[i].col_status=="completed" && this.collections[i].col_max_installment==this.collection )
            {
              // this.display='none';
              //  this.isDisable=true;
              this.paylo=this.collections[i].col_outstanding;
              console.log(this.paylo);
              $(".chit10").prop('disabled',true);
              this.plain=!this.plain;
              $('#myModalcol_id').modal('hide');
            }
            else if(this.collections[i].col_status=="pending" && this.collections[i].col_max_installment==this.collection ){
              // this.isDisable=false;
              this.paylo=this.collections[0].col_outstanding;
              console.log(this.paylo);
              $(".chit10").prop('enable',false);
              $('#myModalcol_id').modal('show');
              
            }
            }    
            
              }
              public payItem9(item,num){
                $('#myModalcol_id').modal('show');
                console.log(item)
                console.log(num)
                const tempItem = JSON.parse(JSON.stringify(item));
                const temp = JSON.parse(JSON.stringify(num));
                this.collection=tempItem;
                this.chitnumber=temp;
                console.log(this.collection)
                console.log(this.chitnumber)
              this.collect.col_payable_amount='';
              
              // console.log(this.collections)
              this.colfilters=this.collections.filter(e=>e.col_status.indexOf('completed')!==-1);
                console.log(this.colfilters);
              for(let i=0;i<=this.collections.length;i++)
              {
                if(this.collections[i].col_max_installment==this.collection)
                {
                  var co7=this.collections[i].col_status
                  this.completed7=co7;
                  console.log(this.completed7)
                }
              if(this.collections[i].col_status=="completed" && this.collections[i].col_max_installment==this.collection )
              {
                // this.display='none';
                //  this.isDisable=true;
                this.paylog=this.collections[i].col_outstanding;
                console.log(this.paylog);
                $(".chit11").prop('disabled',true);
                this.paaa=!this.paaa;
                $('#myModalcol_id').modal('hide');
              }
              else if(this.collections[i].col_status=="pending" && this.collections[i].col_max_installment==this.collection ){
                // this.isDisable=false;
                this.paylog=this.collections[0].col_outstanding;
                console.log(this.paylog);
                $(".chit11").prop('enable',false);
                $('#myModalcol_id').modal('show');
                
              }
              }    
              
                }
                public payItem10(item,num){
                   $('#myModalcol_id').modal('show');
                  console.log(item)
                  console.log(num)
                  const tempItem = JSON.parse(JSON.stringify(item));
                  const temp = JSON.parse(JSON.stringify(num));
                  this.collection=tempItem;
                  this.chitnumber=temp;
                  console.log(this.collection)
                  console.log(this.chitnumber)
                this.collect.col_payable_amount='';
                
                // console.log(this.collections)
                this.colfilters=this.collections.filter(e=>e.col_status.indexOf('completed')!==-1);
                  console.log(this.colfilters);
                for(let i=0;i<=this.collections.length;i++)
                {
                  if(this.collections[i].col_max_installment==this.collection)
                  {
                    var co7=this.collections[i].col_status
                    this.completed7=co7;
                    console.log(this.completed7)
                  
                  }
                if(this.collections[i].col_status=="completed" && this.collections[i].col_max_installment==this.collection )
                {
                  // this.display='none';
                  //  this.isDisable=true;
                  this.paylod=this.collections[i].col_outstanding;
                console.log(this.paylod);
                  $(".chit12").prop('disabled',true);
                  
                  this.pani=!this.pani;
                  $('#myModalcol_id').modal('hide');
                }
                else  if(this.collections[i].col_status=="pending" && this.collections[i].col_max_installment==this.collection){
                  // this.isDisable=false;
                  this.paylod=this.collections[0].col_outstanding;
                console.log(this.paylod);
                  $(".chit12").prop('enable',false);
                  $('#myModalcol_id').modal('show');
                  
                }
                }    
                
                  }
                  public payItem11(item,num){
                     $('#myModalcol_id').modal('show');
                    console.log(item)
                    console.log(num)
                    const tempItem = JSON.parse(JSON.stringify(item));
                    const temp = JSON.parse(JSON.stringify(num));
                    this.collection=tempItem;
                    this.chitnumber=temp;
                    console.log(this.collection)
                    console.log(this.chitnumber)
                  this.collect.col_payable_amount='';
                  
                  console.log(this.collections)
                  this.colfilters=this.collections.filter(e=>e.col_status.indexOf('completed')!==-1);
                    console.log(this.colfilters);
                    for(let i=0;i<=this.collections.length;i++)
                    {
                      if(this.collections[i].col_max_installment==this.collection)
                      {
                        var co7=this.collections[i].col_status
                        this.completed7=co7;
                        console.log(this.completed7)
                      
                      }
                    }
                  for(let i=0;i<=this.collections.length;i++)
                  {
                  if(this.collections[i].col_status=="completed" && this.collections[i].col_max_installment==this.collection )
                  {
                    // this.display='none';
                    //  this.isDisable=true;
                    this.paw=this.collections[i].col_outstanding;
                    console.log(this.paw);
                    $(".chit13").prop('disabled',true);
                    this.par=!this.par;
                    $('#myModalcol_id').modal('hide');
                  }
                  else  if(this.collections[i].col_status=="pending" && this.collections[i].col_max_installment==this.collection){
                    // this.isDisable=false;
                    this.paw=this.collections[0].col_outstanding;
                    console.log(this.paw);
                    $(".chit13").prop('enable',false);
                    $('#myModalcol_id').modal('show');
                    
                  }
                  }    
                  
                    }
                    public payItem12(item,num){
                      $('#myModalcol_id').modal('show');
                      console.log(item)
                      console.log(num)
                      const tempItem = JSON.parse(JSON.stringify(item));
                      const temp = JSON.parse(JSON.stringify(num));
                      this.collection=tempItem;
                      this.chitnumber=temp;
                      console.log(this.collection)
                      console.log(this.chitnumber)
                    this.collect.col_payable_amount='';
                    
                    // console.log(this.collections)
                    this.colfilters=this.collections.filter(e=>e.col_status.indexOf('completed')!==-1);
                      console.log(this.colfilters);
                      for(let i=0;i<=this.collections.length;i++)
                    {
                      if(this.collections[i].col_max_installment==this.collection)
                      {
                        var co7=this.collections[i].col_status
                        this.completed7=co7;
                        console.log(this.completed7)
                      
                      }
                    }
                    for(let i=0;i<=this.collections.length;i++)
                    {
                    if(this.collections[i].col_status=="completed" && this.collections[i].col_max_installment==this.collection )
                    {
                      // this.display='none';
                      //  this.isDisable=true;
                      this.quad=this.collections[i].col_outstanding;
                      console.log(this.quad);
                      this.quad=this.collections[i].col_payable_amount;
                      console.log(this.quad);
                      $(".chit14").prop('disabled',true);
                      this.para=!this.para;
                      $('#myModalcol_id').modal('hide');
                    }
                    else if(this.collections[i].col_status=="pending" && this.collections[i].col_max_installment==this.collection){
                      // this.isDisable=false;
                      this.quad=this.collections[0].col_outstanding;
                      console.log(this.quad);
                      $(".chit14").prop('enable',false);
                      $('#myModalcol_id').modal('show');
                      
                    }
                    }    
                    
                      }
                      public payItem13(item,num){
                         $('#myModalcol_id').modal('show');
                        console.log(item)
                        console.log(num)
                        const tempItem = JSON.parse(JSON.stringify(item));
                        const temp = JSON.parse(JSON.stringify(num));
                        this.collection=tempItem;
                        this.chitnumber=temp;
                        console.log(this.collection)
                        console.log(this.chitnumber)
                      this.collect.col_payable_amount='';
                      
                      // console.log(this.collections)
                      this.colfilters=this.collections.filter(e=>e.col_status.indexOf('completed')!==-1);
                        console.log(this.colfilters);
                      for(let i=0;i<=this.collections.length;i++)
                      {
                      if(this.collections[i].col_status=="completed" && this.collections[i].col_max_installment==this.collection)
                      {
                        // this.display='none';
                        //  this.isDisable=true;
                        this.teddy=this.collections[i].col_outstanding;
                        console.log(this.teddy);
                        this.ted=this.collections[i].col_payable_amount;
                        console.log(this.teddy);
                        $(".chit15").prop('disabled',true);
                        this.pt=!this.pt;
                        $('#myModalcol_id').modal('hide');
                      }
                      else if(this.collections[i].col_status=="pending" && this.collections[i].col_max_installment==this.collection){
                        // this.isDisable=false;
                        this.teddy=this.collections[0].col_outstanding;
                        console.log(this.teddy);
                        this.ted=this.collections[0].col_payable_amount;
                        console.log(this.teddy);
                        $(".chit15").prop('enable',false);
                        $('#myModalcol_id').modal('show');
                        
                      }
                      }    
                      
                        }
                        public payItem14(item,num){
                           $('#myModalcol_id').modal('show');
                          console.log(item)
                          console.log(num)
                          const tempItem = JSON.parse(JSON.stringify(item));
                          const temp = JSON.parse(JSON.stringify(num));
                          this.collection=tempItem;
                          this.chitnumber=temp;
                          console.log(this.collection)
                          console.log(this.chitnumber)
                        this.collect.col_payable_amount='';
                        
                        // console.log(this.collections)
                        this.colfilters=this.collections.filter(e=>e.col_status.indexOf('completed')!==-1);
                          console.log(this.colfilters);
                        for(let i=0;i<=this.collections.length;i++)
                        {
                        if(this.collections[i].col_status=="completed" && this.collections[i].col_max_installment==this.collection)
                        {
                          // this.display='none';
                          //  this.isDisable=true;
                          this.twin=this.collections[i].col_outstanding;
                          console.log(this.twin);
                          $(".chit16").prop('disabled',true);
                          this.patna=!this.patna;
                          $('#myModalcol_id').modal('hide');
                        }
                        else  if(this.collections[i].col_status=="pending" && this.collections[i].col_max_installment==this.collection){
                          // this.isDisable=false;
                          this.twin=this.collections[0].col_outstanding;
                          console.log(this.twin);
                          $(".chit16").prop('enable',false);
                          $('#myModalcol_id').modal('show');
                          
                        }
                        }    
                        
                          }
                          public payItem15(item,num){
                             $('#myModalcol_id').modal('show');
                            console.log(item)
                            console.log(num)
                            const tempItem = JSON.parse(JSON.stringify(item));
                            const temp = JSON.parse(JSON.stringify(num));
                            this.collection=tempItem;
                            this.chitnumber=temp;
                            console.log(this.collection)
                            console.log(this.chitnumber)
                          this.collect.col_payable_amount='';
                          
                          // console.log(this.collections)
                          this.colfilters=this.collections.filter(e=>e.col_status.indexOf('completed')!==-1);
                            console.log(this.colfilters);
                          for(let i=0;i<=this.collections.length;i++)
                          {
                          if(this.collections[i].col_status=="completed" && this.collections[i].col_max_installment==this.collection)
                          {
                            // this.display='none';
                            //  this.isDisable=true;
                            this.person=this.collections[i].col_outstanding;
                          console.log(this.person);
                            $(".chit17").prop('disabled',true);
                            this.payu=!this.payu;
                            $('#myModalcol_id').modal('hide');
                          }
                          else  if(this.collections[i].col_status=="pending" && this.collections[i].col_max_installment==this.collection){
                            // this.isDisable=false;
                            this.person=this.collections[0].col_outstanding;
                          console.log(this.person);
                            $(".chit17").prop('enable',false);
                            $('#myModalcol_id').modal('show');
                            
                          }
                          }    
                          
                            }
                            public payItem16(item,num){
                               $('#myModalcol_id').modal('show');
                              console.log(item)
                              console.log(num)
                              const tempItem = JSON.parse(JSON.stringify(item));
                              const temp = JSON.parse(JSON.stringify(num));
                              this.collection=tempItem;
                              this.chitnumber=temp;
                              console.log(this.collection)
                              console.log(this.chitnumber)
                            this.collect.col_payable_amount='';
                            
                            // console.log(this.collections)
                            this.colfilters=this.collections.filter(e=>e.col_status.indexOf('completed')!==-1);
                              console.log(this.colfilters);
                            for(let i=0;i<=this.collections.length;i++)
                            {
                            if(this.collections[i].col_status=="completed" && this.collections[i].col_max_installment==this.collection)
                            {
                              //  this.isDisable=true;
                              this.personpaid=this.collections[i].col_outstanding;
                              console.log(this.personpaid);
                              $(".chit18").prop('disabled',true);
                              this.part=!this.part;
                              $('#myModalcol_id').modal('hide');
                            }
                            else  if(this.collections[i].col_status=="pending" && this.collections[i].col_max_installment==this.collection){
                              // this.isDisable=false;
                              this.personpaid=this.collections[0].col_outstanding;
                              console.log(this.personpaid);
                              $(".chit18").prop('enable',false);
                              $('#myModalcol_id').modal('show');
                              
                            }
                            }    
                            
                              }
                              public payItem17(item,num){
                                 $('#myModalcol_id').modal('show');
                                console.log(item)
                                console.log(num)
                                          const tempItem = JSON.parse(JSON.stringify(item));
                                          const temp = JSON.parse(JSON.stringify(num));
                                          this.collection=tempItem;
                                          this.chitnumber=temp;
                                          console.log(this.collection)
                                          console.log(this.chitnumber)
                              this.collect.col_payable_amount='';
                              
                              // console.log(this.collections)
                              this.colfilters=this.collections.filter(e=>e.col_status.indexOf('completed')!==-1);
                                console.log(this.colfilters);
                              for(let i=0;i<=this.collections.length;i++)
                              {
                              if(this.collections[i].col_status=="completed" && this.collections[i].col_max_installment==this.collection)
                              {
                                //  this.isDisable=true;
                                this.paypal=this.collections[i].col_outstanding;
                                console.log(this.paypal);
                                $(".chit19").prop('disabled',true);
                                this.party=!this.party;
                                $('#myModalcol_id').modal('hide');
                              }
                              else  if(this.collections[i].col_status=="pending" && this.collections[i].col_max_installment==this.collection){
                                // this.isDisable=false;
                                this.paypal=this.collections[0].col_outstanding;
                                console.log(this.paypal);
                                $(".chit19").prop('enable',false);
                                $('#myModalcol_id').modal('show');
                                
                              }
                              }    
                              
                                }
                                public payItem18(item,num){
                                   $('#myModalcol_id').modal('show');
                                  console.log(item)
                                  console.log(num)
                                  const tempItem = JSON.parse(JSON.stringify(item));
                                  const temp = JSON.parse(JSON.stringify(num));
                                  this.collection=tempItem;
                                  this.chitnumber=temp;
                                  console.log(this.collection)
                                  console.log(this.chitnumber)
                                this.collect.col_payable_amount='';
                                
                                // console.log(this.collections)
                                this.colfilters=this.collections.filter(e=>e.col_status.indexOf('completed')!==-1);
                                  console.log(this.colfilters);
                                for(let i=0;i<=this.collections.length;i++)
                                {
                                if(this.collections[i].col_status=="completed" && this.colfilters[i].col_max_installment==this.collection)
                                {
                                  //  this.isDisable=true;
                                  this.payzip=this.collections[i].col_outstanding;
                                  console.log(this.payzip);
                                  $(".chit20").prop('disabled',true);
                                  this.park=!this.park;
                                  $('#myModalcol_id').modal('hide');
                                }
                                else if(this.collections[i].col_status=="pending" && this.colfilters[i].col_max_installment==this.collection){
                                  // this.isDisable=false;
                                  this.payzip=this.collections[0].col_outstanding;
                                  console.log(this.payzip);
                                  $(".chit20").prop('enable',false);
                                  $('#myModalcol_id').modal('show');
                                  
                                }
                                }    
                                
                                  }
                                  public payItem19(item,num){
                                     $('#myModalcol_id').modal('show');
                                    console.log(item)
                                    console.log(num)
                                    const tempItem = JSON.parse(JSON.stringify(item));
                                    const temp = JSON.parse(JSON.stringify(num));
                                    this.collection=tempItem;
                                    this.chitnumber=temp;
                                    console.log(this.collection)
                                    console.log(this.chitnumber)
                                  this.collect.col_payable_amount='';
                                  
                                  // console.log(this.collections)
                                  this.colfilters=this.collections.filter(e=>e.col_status.indexOf('completed')!==-1);
                                    console.log(this.colfilters);
                                  for(let i=0;i<=this.collections.length;i++)
                                  {
                                  if(this.collections[i].col_status=="completed" && this.collections[i].col_max_installment==this.collection)
                                  {
                                    //  this.isDisable=true;
                                    this.payzap=this.collections[i].col_outstanding;
                                    console.log(this.payzap);
                                    $(".chit21").prop('disabled',true);
                                    this.parnk=!this.parnk;
                                    $('#myModalcol_id').modal('hide');
                                  }
                                  else if(this.collections[i].col_status=="pending" && this.collections[i].col_max_installment==this.collection){
                                    // this.isDisable=false;
                                    this.payzap=this.collections[0].col_outstanding;
                                    console.log(this.payzap);
                                    $(".chit21").prop('enable',false);
                                    $('#myModalcol_id').modal('show');
                                    
                                  }
                                  }    
                                  
                                    }
                                    public payItem20(item,num){
                                       $('#myModalcol_id').modal('show');
                                      console.log(item)
                                      console.log(num)
                                      const tempItem = JSON.parse(JSON.stringify(item));
                                      const temp = JSON.parse(JSON.stringify(num));
                                      this.collection=tempItem;
                                      this.chitnumber=temp;
                                      console.log(this.collection)
                                      console.log(this.chitnumber)
                                    this.collect.col_payable_amount='';
                                    
                                    // console.log(this.collections)
                                    this.colfilters=this.collections.filter(e=>e.col_status.indexOf('completed')!==-1);
                                      console.log(this.colfilters);
                                    for(let i=0;i<=this.collections.length;i++)
                                    {
                                    if(this.collections[i].col_status=="completed" && this.collections[i].col_max_installment==this.collection)
                                    {
                                      //  this.isDisable=true;
                                   
                                    
                                      this.payzero=this.collections[i].col_outstanding;
                                      console.log(this.payzero);
                                      $(".col2").prop('disabled',true);
                                      // this.pay="paid"
                                      localStorage.setItem('pay20',item);
                                      this.paiditem = !this.paiditem;
                                      $('#myModalcol_id').modal('hide');
                                      this.isDisabled = true;
                                    }
                                    else if(this.collections[i].col_status=="pending" && this.collections[i].col_max_installment==this.collection){
                                      // this.isDisable=false;
                                      this.payzero=this.collections[0].col_outstanding;
                                      console.log(this.payzero);
                                      $(".col2").prop('enable',false);
                                      // this.pay="pay"
                                      $('#myModalcol_id').modal('show');
                                      
                                    }
                                    }    
                                    
                                      }
                                      public payItem21(item,num,event:MouseEvent){
                                         $('#myModalcol_id').modal('show');
                                       
                                        console.log(item)
                                        console.log(num)
                                        const tempItem = JSON.parse(JSON.stringify(item));
                                        const temp = JSON.parse(JSON.stringify(num));
                                        this.collection=tempItem;
                                        this.chitnumber=temp;
                                        console.log(this.collection)
                                        console.log(this.chitnumber)
                                      this.collect.col_payable_amount='';
                                      
                                      // console.log(this.collections)
                                      this.colfilters=this.collections.filter(e=>e.col_status.indexOf('completed')!==-1);
                                        console.log(this.colfilters);
                                      for(let i=0;i<=this.collections.length;i++)
                                      {
                                      if(this.collections[i].col_status=="completed" && this.collections[i].col_max_installment==this.collection)
                                      {
                                        // this.paying="paid"
                                        //  this.isDisable=true;
                                        
                                       
                                        this.paypending=this.collections[i].col_outstanding;
                                      console.log(this.paypending);
                                        // $(".chit2").prop('disabled',true);
                                        localStorage.setItem("pay21",JSON.stringify(item));
                                        // $('.chit2').hide();
                                        
                                        // localStorage.setItem('pay21','.chit2');
                                        this.pai = !this.pai;
                                        // $('#myModalcol_id').modal('hide');
                                        // this.btnstate = true;
                                        // (event.target as HTMLButtonElement).disabled = true;
                                      }
                                      else if(this.collections[i].col_status=="pending" && this.collections[i].col_max_installment==this.collection){
                                        // this.isDisable=false;
                                        this.paypending=this.collections[0].col_outstanding;
                                      console.log(this.paypending);
                                        $(".col3").prop('enable',false);
                                        // this.paying="pay"
                                        $('#myModalcol_id').modal('show');
                                        
                                      }
                                      }    
                                      
                                        }
                                       
                                        public payItem22(item,num){
                                           $('#myModalcol_id').modal('show');
                                          console.log(item)
                                          console.log(num)
                                          const tempItem = JSON.parse(JSON.stringify(item));
                                          const temp = JSON.parse(JSON.stringify(num));
                                          this.collection=tempItem;
                                          this.chitnumber=temp;
                                          console.log(this.collection)
                                          console.log(this.chitnumber)
                                        this.collect.col_payable_amount='';
                                        
                                        // console.log(this.collections)
                                        this.colfilters=this.collections.filter(e=>e.col_status.indexOf('completed')!==-1);
                                          console.log(this.colfilters);
                                        for(let i=0;i<=this.collections.length;i++)
                                        {
                                        if(this.collections[i].col_status=="completed" && this.collections[i].col_max_installment==this.collection)
                                        {
                                          //  this.isDisable=true;
                                          this.paytotal=this.collections[i].col_outstanding;
                                          console.log(this.paytotal);
                                          $(".col4").prop('disabled',true);
                                          // this.paying="paid"
                                          this.paya=!this.paya;
                                          $('#myModalcol_id').modal('hide');
                                        }
                                        else  if(this.collections[i].col_status=="pending" && this.collections[i].col_max_installment==this.collection){
                                          // this.isDisable=false;
                                          this.paytotal=this.collections[0].col_outstanding;
                                          console.log(this.paytotal);
                                          $(".col4").prop('enable',false);
                                          // this.paying="pay"
                                          $('#myModalcol_id').modal('show');
                                          
                                        }
                                        }    
                                        
                                          }
                                          public payItem23(item,num){
                                            $('#myModalcol_id').modal('show');
                                            console.log(item)
                                            console.log(num)
                                          const tempItem = JSON.parse(JSON.stringify(item));
                                          const temp = JSON.parse(JSON.stringify(num));
                                          this.collection=tempItem;
                                          this.chitnumber=temp;
                                          console.log(this.collection)
                                          console.log(this.chitnumber)
                                          this.collect.col_payable_amount='';
                                          
                                          // console.log(this.collections)
                                          this.colfilters=this.collections.filter(e=>e.col_status.indexOf('completed')!==-1);
                                            console.log(this.colfilters);
                                          for(let i=0;i<=this.collections.length;i++)
                                          {
                                          if(this.collections[i].col_status=="completed" && this.collections[i].col_max_installment==this.collection)
                                          {
                                            //  this.isDisable=true;
                                            this.paytot=this.collections[i].col_outstanding;
                                          console.log(this.paytot);
                                            $(".col5").prop('disabled',true);
                                            this.paytm=!this.paytm;
                                            $('#myModalcol_id').modal('hide');
                                          }
                                          else  if(this.collections[i].col_status=="pending" && this.collections[i].col_max_installment==this.collection){
                                            // this.isDisable=false;
                                            this.paytot=this.collections[0].col_outstanding;
                                          console.log(this.paytot);
                                            $(".col5").prop('enable',false);
                                            $('#myModalcol_id').modal('show');
                                            
                                          }
                                          }    
                                          
                                            }
                                            public payItem24(item,num){
                                               $('#myModalcol_id').modal('show');
                                              console.log(item)
                                              console.log(num)
                                          const tempItem = JSON.parse(JSON.stringify(item));
                                          const temp = JSON.parse(JSON.stringify(num));
                                          this.collection=tempItem;
                                          this.chitnumber=temp;
                                          console.log(this.collection)
                                          console.log(this.chitnumber);                                            
                                          this.collect.col_payable_amount='';
                                            
                                            // console.log(this.collections)
                                            this.colfilters=this.collections.filter(e=>e.col_status.indexOf('completed')!==-1);
                                              console.log(this.colfilters);
                                            for(let i=0;i<=this.collections.length;i++)
                                            {
                                            if(this.collections[i].col_status=="completed" && this.collections[i].col_max_installment==this.collection)
                                            {
                                              //  this.isDisable=true;
                                              this.payctc=this.collections[i].col_outstanding;
                                          console.log(this.payctc);
                                              $(".col6").prop('disabled',true);
                                              this.payto=!this.payto;
                                              $('#myModalcol_id').modal('hide');
                                            }
                                            else if(this.collections[i].col_status=="pending" && this.collections[i].col_max_installment==this.collection){
                                              // this.isDisable=false;
                                              this.payctc=this.collections[0].col_outstanding;
                                          console.log(this.payctc);
                                              $(".col6").prop('enable',false);
                                              $('#myModalcol_id').modal('show');
                                              
                                            }
                                            }    
                                            
                                              }
                                              public payItem25(item,num){
                                                $('#myModalcol_id').modal('show');
                                                console.log(item)
                                                console.log(num)
                                                const tempItem = JSON.parse(JSON.stringify(item));
                                                const temp = JSON.parse(JSON.stringify(num));
                                                this.collection=tempItem;
                                                this.chitnumber=temp;
                                                console.log(this.collection)
                                                console.log(this.chitnumber)
                                              this.collect.col_payable_amount='';
                                              
                                              // console.log(this.collections)
                                              this.colfilters=this.collections.filter(e=>e.col_status.indexOf('completed')!==-1);
                                                console.log(this.colfilters);
                                              for(let i=0;i<=this.collections.length;i++)
                                              {
                                              if(this.collections[i].col_status=="completed" && this.collections[i].col_max_installment==this.collection)
                                              {
                                                //  this.isDisable=true;
                                                this.hutch=this.collections[i].col_outstanding;
                                                console.log(this.hutch);
                                                $(".col7").prop('disabled',true);
                                                this.payam=!this.payam;
                                                $('#myModalcol_id').modal('hide');
                                              }
                                              else  if(this.collections[i].col_status=="pending" && this.collections[i].col_max_installment==this.collection){
                                                // this.isDisable=false;
                                                this.hutch=this.collections[0].col_outstanding;
                                                console.log(this.hutch);
                                                $(".col7").prop('enable',false);
                                                $('#myModalcol_id').modal('show');
                                                
                                              }
                                              }    
                                              
                                                }
                                                public payItem26(item,num){
                                                   $('#myModalcol_id').modal('show');
                                                  console.log(item)
                                                  console.log(num)
                                          const tempItem = JSON.parse(JSON.stringify(item));
                                          const temp = JSON.parse(JSON.stringify(num));
                                          this.collection=tempItem;
                                          this.chitnumber=temp;
                                          console.log(this.collection)
                                          console.log(this.chitnumber)
                                                this.collect.col_payable_amount='';
                                                
                                                // console.log(this.collections)
                                                this.colfilters=this.collections.filter(e=>e.col_status.indexOf('completed')!==-1);
                                                  console.log(this.colfilters);
                                                for(let i=0;i<=this.collections.length;i++)
                                                {
                                                if(this.collections[i].col_status=="completed" && this.collections[i].col_max_installment==this.collection)
                                                {
                                                  //  this.isDisable=true;
                                                  this.payji=this.collections[i].col_outstanding;
                                                console.log(this.payji);
                                                  $(".col8").prop('disabled',true);
                                                  this.paypm=!this.payam;
                                                  $('#myModalcol_id').modal('hide');
                                                }
                                                else  if(this.collections[i].col_status=="pending" && this.collections[i].col_max_installment==this.collection){
                                                  // this.isDisable=false;
                                                  this.payji=this.collections[0].col_outstanding;
                                                  console.log(this.payji);
                                                  $(".col8").prop('enable',false);
                                                  $('#myModalcol_id').modal('show');
                                                  
                                                }
                                                }    
                                                
                                                  }
                                                  public payItem27(item,num){
                                                     $('#myModalcol_id').modal('show');
                                                    console.log(item)
                                                    console.log(num)
                                                    const tempItem = JSON.parse(JSON.stringify(item));
                                                    const temp = JSON.parse(JSON.stringify(num));
                                                    this.collection=tempItem;
                                                    this.chitnumber=temp;
                                                    console.log(this.collection)
                                                    console.log(this.chitnumber)
                                                  this.collect.col_payable_amount='';
                                                  
                                                  // console.log(this.collections)
                                                  this.colfilters=this.collections.filter(e=>e.col_status.indexOf('completed')!==-1);
                                                    console.log(this.colfilters);
                                                  for(let i=0;i<=this.collections.length;i++)
                                                  {
                                                  if(this.collections[i].col_status=="completed" && this.collections[i].col_max_installment==this.collection)
                                                  {
                                                    //  this.isDisable=true;
                                                    this.paytou=this.collections[i].col_outstanding;
                                                    console.log(this.paytou);
                                                    $(".col9").prop('disabled',true);
                                                    this.payo=!this.payo;
                                                    $('#myModalcol_id').modal('hide');
                                                  }
                                                  else  if(this.collections[i].col_status=="pending" && this.collections[i].col_max_installment==this.collection){
                                                    // this.isDisable=false;
                                                    this.paytou=this.collections[0].col_outstanding;
                                                    console.log(this.paytou);
                                                    $(".col9").prop('enable',false);
                                                    $('#myModalcol_id').modal('show');
                                                    
                                                  }
                                                  }    
                                                  
                                                    }
                                                    public payItem28(item,num){
                                                       $('#myModalcol_id').modal('show');
                                                      console.log(item)
                                                      console.log(num)
                                                      const tempItem = JSON.parse(JSON.stringify(item));
                                                      const temp = JSON.parse(JSON.stringify(num));
                                                      this.collection=tempItem;
                                                      this.chitnumber=temp;
                                                      console.log(this.collection)
                                                      console.log(this.chitnumber)
                                                    this.collect.col_payable_amount='';
                                                    
                                                    // console.log(this.collections)
                                                    this.colfilters=this.collections.filter(e=>e.col_status.indexOf('completed')!==-1);
                                                      console.log(this.colfilters);
                                                    for(let i=0;i<=this.collections.length;i++)
                                                    {
                                                    if(this.collections[i].col_status=="completed" && this.collections[i].col_max_installment==this.collection)
                                                    {
                                                      //  this.isDisable=true;
                                                      this.paytodo=this.collections[i].col_outstanding;
                                                    console.log(this.paytodo);
                                                      $(".col10").prop('disabled',true);
                                                      this.pat=!this.pat;
                                                      $('#myModalcol_id').modal('hide');
                                                    }
                                                    else if(this.collections[i].col_status=="pending" && this.collections[i].col_max_installment==this.collection){
                                                      // this.isDisable=false;
                                                      this.paytodo=this.collections[0].col_outstanding;
                                                    console.log(this.paytodo);
                                                      $(".col10").prop('enable',false);
                                                      $('#myModalcol_id').modal('show');
                                                      
                                                    }
                                                    }    
                                                    
                                                      }
                                                      public payItem29(item,num){
                                                         $('#myModalcol_id').modal('show');
                                                        console.log(item)
                                                        console.log(num)
                                                        const tempItem = JSON.parse(JSON.stringify(item));
                                                        const temp = JSON.parse(JSON.stringify(num));
                                                        this.collection=tempItem;
                                                        this.chitnumber=temp;
                                                        console.log(this.collection)
                                                        console.log(this.chitnumber)
                                                      this.collect.col_payable_amount='';
                                                      
                                                      // console.log(this.collections)
                                                      this.colfilters=this.collections.filter(e=>e.col_status.indexOf('completed')!==-1);
                                                        console.log(this.colfilters);
                                                      for(let i=0;i<=this.collections.length;i++)
                                                      {
                                                      if(this.collections[i].col_status=="completed" && this.collections[i].col_max_installment==this.collection)
                                                      {
                                                        //  this.isDisable=true;
                                                        this.paytime=this.collections[i].col_outstanding;
                                                        console.log(this.paytime);
                                                        $(".col11").prop('disabled',true);
                                                        this.pata=!this.pata;
                                                        $('#myModalcol_id').modal('hide');
                                                      }
                                                      else  if(this.collections[i].col_status=="pending" && this.collections[i].col_max_installment==this.collection){
                                                        // this.isDisable=false;
                                                        this.paytime=this.collections[0].col_outstanding;
                                                        console.log(this.paytime);
                                                        $(".col11").prop('enable',false);
                                                        $('#myModalcol_id').modal('show');
                                                        
                                                      }
                                                      }    
                                                      
                                                        }
                                                                                          
                                                        

  public onSubmitPayment()
  {
    this.loadingText="Saving..."
    
    // this.collection.col_outstanding=0;
    for (let i = 0; i <= this.chits.length; i++) {
      this.ac_customer_id = this.chits[i].ac_customer_id;
     console.log(this.ac_customer_id)

      this.ac_name = this.chits[i].ac_name;
      console.log(this.ac_name);
      this.ac_phone = this.chits[i].ac_phone;
      console.log(this.ac_phone)

      this.ac_chit_scheme = this.chits[i].ac_chit_scheme;
      console.log(this.ac_chit_scheme)

      this.ac_chit_value = this.chits[i].ac_chit_value;
      console.log(this.ac_chit_value)

      this.ac_no_of_installment = this.chits[i].ac_no_of_installment;
      console.log(this.ac_no_of_installment)

      this.ac_first_payment = this.chits[i].ac_first_payment;
      console.log(this.ac_first_payment)

      // this.chitnum=this.collections[i].col_chit_no;
      // console.log(this.chitnum);

    var col_payable_amount =parseInt(this.collect.col_payable_amount) ;
      
    console.log(col_payable_amount);
    var col_date = this.collect.col_date;
    console.log(col_date);
var maxInstallment=this.collection;
console.log(maxInstallment);
var chitno=this.chitnumber;
console.log(chitno);
    
// for(let i=0;i<=this.collections.length;i++)
// {
//  console.log(this.collections[0].col_outstanding);
//  this.collect.col_outstanding=this.collections[0].col_outstanding;
//  this.collect.col_outstanding=this.eat;
 console.log(this.collect.col_outstanding)
//  this.eat =this.collections[i].col_outstanding;
//   console.log( this.eat);
// }
// this.eat=this.collections[0].col_outstanding;
// console.log( this.eat);

    if(this.collect.col_outstanding==0)
    {
      this.collect.col_outstanding =this.collection-this.collect.col_payable_amount;
      console.log(this.collect.col_outstanding);
      //  localStorage.setItem('coll',JSON.stringify(this.collect.col_outstanding));
      // this.subpay = !this.subpay;


    }
    else{
      // var sum=JSON.parse(localStorage.getItem('coll'));
      this.collect.col_outstanding=this.collections[0].col_outstanding-this.collect.col_payable_amount;
      console.log(this.collect.col_outstanding);
      // localStorage.setItem('coll',JSON.stringify(this.collect.col_outstanding));
    }
    
    
    if(this.collect.col_outstanding===0)
    {
      this.collect.col_status="completed";
    
      // this.isDisabled=false;
      //  this.goin=true;
      //  this.tea=true;
      //  this.milk=true;
      // const btn = document.getElementById('#chi');
      // this.pon==this.pon;
      // $('.chit2').prop('disable',true)
    // btn.disabled=true;
    
    }
    else{
      this.collect.col_status="pending";
       
      //  this.isDisabled=true;
      // this.goin=false;
      // this.tea=false;
      // this.milk=false;
      this.pon==this.pon;

    }
    console.log(this.collect.col_status)
alert(this.collect.col_status)
//    if(this.collect.col_status=="completed" && this.collect.col_chit_no=='2')
//    {
//     $('.chit3').prop('hide');
//    }
// else{
//   $('.chit3').prop('show');
// }
    this.collect = { col_id: '-1', collection_id:'',col_customer_id: this.ac_customer_id, col_name: this.ac_name, col_phone: this.ac_phone, col_chit_scheme: this.ac_chit_scheme, col_chit_value: this.ac_chit_value,col_chit_no:chitno, col_chit_installment:this.ac_no_of_installment,col_max_installment: maxInstallment, col_first_payment: this.ac_first_payment, col_payable_amount: col_payable_amount,col_outstanding: this.collect.col_outstanding ,col_new_payable_amount:'',col_status:this.collect.col_status, col_date: col_date, col_log: '', }
    console.log(this.collect)
    // const itemObj = JSON.stringify(this.collect);
    const itemObj = JSON.parse(JSON.stringify(this.collect));
      console.log(itemObj)
      this.collects=itemObj;
    //  this.collect.push(JSON.parse(localStorage.getItem('session')));
     //localStorage.setItem('see', JSON.stringify(this.collect));
     localStorage.setItem('coi',JSON.stringify(this.collects));
     
      this.app.getQuery('collections/add_edit_collections', itemObj).then(result => {
        this.loadingText = 'Save';
        console.log(result);            
        // if (result.status === 'OK') {
        //   $('#myModalac_id').modal('hide');
        //   this.onClear();
        // } else {
        //   this.message = result.message;
        //   setTimeout(() => {
        //     this.message = '';
        //   }, 4000);
        // }

      });
    // else{
    //   var sum=localStorage.getItem('coll');
    //   this.collect.col_outstanding=this.collect.col_payable_amount -parseInt(sum);
    //   console.log(this.collect.col_outstanding);
    //   localStorage.setItem('coll',JSON.stringify(this.collect.col_outstanding));
     
    // }
   
    location.reload();
    
  }
 
}


//  compareArray() {

//   const obj = {
//     num_per_page: '200',
//     order_by: 'ac_id',
//     order: 'DESC',
//     start_from: this.start_from,
//     search: this.search,
//     active: this.actfilter,
//     inactive: this.inactfilter
//   };
//   console.log(JSON.stringify(obj));
//   console.log(this.search);
//   // if (this.search === this.search) {


//     this.app.getQuery('addchit/get_all_addchit', obj).then(result => {

//       console.log(result);
//       // this.chits=result;
//       // console.log(this.chits);
//       if (result.status === 'OK') {

//         this.chits = this.chits.concat(result.data);
//         console.log(this.chits);
//         this.count = result.total;
//         this.received = result.received;
//         this.dbPages = [];
//         // this.activePage = 1;
//         for (let index = 0; index < result.pages; index++) {
//           this.dbPages.push(index);
//         }
//         this.displayCount = (this.chits.length) + ' of ' + this.count;
//       } else {

//       }
//       // localStorage.setItem('search', JSON.stringify(this.chits));
   

//     const obj1 = {
//       // num_per_page: this.num_per_page,
//       order_by: this.order_by,
//       order: this.order,
//       start_from: this.start_from,
//       search: this.search,
//       active: this.actfilter,
//       inactive: this.inactfilter
//     };
    
//     console.log(JSON.stringify(obj));
//     this.app.getQuery('collections/get_all_collections', obj1).then(result => {

//       console.log(result);
//       if (result.status === 'OK') {
//         this.collections = this.collections.concat(result.data);
//         console.log(this.collections);
       
//         this.count = result.total;
//         this.received = result.received;
//         this.dbPages = [];
//         // this.activePage = 1;
       
//         for (let index = 0; index < result.pages; index++) {
//           this.dbPages.push(index);
//         }
//         this.displayCount = (this.collections.length) + ' of ' + this.count;
        
      
//       } 
    
    
   
//     this.collections.forEach((array1Ttem) => {
//       this.chits.forEach((array2Item) => {
//         if (
//           array1Ttem.col_customer_id === array2Item.ac_customer_id 
          
//         ) {
//           $(".chit2").hide();
//           console.log("It's match", array1Ttem);
//           this.isOn = true;
//         } else {
//           console.log('This item not present in array =>', array1Ttem);
//         }
//       });
//     });
//   });
// });
// }          

  public editItem(itemObj) {
    const tempItem = JSON.parse(JSON.stringify(itemObj));
    //tempItem.user_password = '';

    this.collection = tempItem;
    console.log(this.collection);

    //   this.payloadsChanged();
    $('#myModalcol_id').modal('show');
    // $('#myModaluser_id').appendTo('body');
  }
  public printItem(itemObj) {
    const tempItem = JSON.parse(JSON.stringify(itemObj));
    //tempItem.user_password = '';

    this.collection = tempItem;
    console.log(this.collection);
    this.col_filters=this.collection;
    //   this.payloadsChanged();
    $('#myModalprintcol_id').modal('show');
    // $('#myModaluser_id').appendTo('body');
  }

  // public print(){
  //   const $btnPrint = document.querySelector("#btnPrint");
  // $btnPrint.addEventListener("click", () => {
  //     window.print();
  // });
  // }
 


  
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
