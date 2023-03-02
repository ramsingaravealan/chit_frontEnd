import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from '../app.service';
 declare var $:any;
@Component({
  selector: 'app-maxcollection',
  templateUrl: './maxcollection.component.html',
  styleUrls: ['./maxcollection.component.css']
})
export class MaxcollectionComponent implements OnInit {
  public collections=[];
  public collect:any={
    col_id: '-1',
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
  col_id: any;
  col_customer_id: string;
  constructor(public activateRoute:ActivatedRoute) { 
    this.collect={col_id:'',col_customer_id:'',col_name:'',col_phone:'',col_chit_scheme:'',col_chit_value:'',col_chit_installment:'',col_payable_amount:'',col_outstanding:'',col_max_installment:'',col_chit_no:'',col_status:'',col_date:'',col_log:''}
    console.log(this.collect)
    this.col_customer_id="1";
     this.col_id=this.activateRoute.snapshot.params['id'];
     console.log(this.activateRoute.snapshot)
  }

  ngOnInit() {
  }

}
