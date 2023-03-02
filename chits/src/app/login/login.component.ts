import {
  Component, OnInit, OnDestroy, AfterViewInit, Input, Output, EventEmitter,
  ViewChild, ElementRef
} from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { AppService } from '../app.service';

declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy, AfterViewInit {
  public login: any = { id: '-1', user_checked: false};
  status = '';
  btnText = 'Login';
  public errorText = '';

  // tslint:disable-next-line:variable-name
  public num_per_page = '10';
  // tslint:disable-next-line:variable-name
  // public order_by = 'as_id';
  // public order = 'DESC';
  // tslint:disable-next-line:variable-name
  public start_from = 0;
  public count = 0;
  public received = -1;
  public displayCount = '';
  public dbPages = [];
  public activePage = 0;
  public search = '';



  constructor(private service: AppService, public app: AppService, private router: Router, private location: Location) {



  }

  ngOnInit() {

  }

  ngOnDestroy() {

  }

  ngAfterViewInit() {
    //  authentication sidebar-collapse
    $('body').addClass('authentication sidebar-collapse');
    $.getScript('assets/bundles/libscripts.bundle.js');
    $.getScript('assets/bundles/vendorscripts.bundle.js');
    // $.getScript('assets/bundles/mainscripts.bundle.js');
    // tslint:disable-next-line:only-arrow-functions
    $('.navbar-toggler').on('click', function() {
      $('html').toggleClass('nav-open');
    });
    // =============================================================================
    $('.form-control').on('focus', function() {
      $(this).parent('.input-group').addClass('input-group-focus');
    }).on('blur', function() {
      $(this).parent('.input-group').removeClass('input-group-focus');
    });
    console.log(this.service.getLogin());
    // this.getAllAdmin_settings();
  }

  public onClickTerms() {
    this.router.navigate(['view_terms']);
  }

  // public getAllAdmin_settings() {
  //   const obj = {
  //     num_per_page: this.num_per_page,
  //     order_by: this.order_by,
  //     order: this.order,
  //     start_from: this.start_from,
  //     search: this.search
  //   };
  //   console.log(JSON.stringify(obj));
  //   this.service.getQueryPlain('adminsettingse/get_terms', obj).then(result => {

  //     console.log(result);
  //     if (result.status === 'OK') {
  //       this.login.user_terms = result.data[0].as_terms;
  //     } else {

  //     }
  //   });
  // }

  public onSubmit() {

    this.btnText = 'Logging in..';
    console.log(JSON.stringify(this.login));
    this.service.checkLogin(this.login).then(result => {
      this.btnText = 'Login';
      console.log(result);

      if (result.status === 'OK') {
        this.service.setLogin(result.data);
        this.location.replaceState('/');
        location.reload();


      } else {
        this.status = result.message;
        this.btnText = 'Login';
        setTimeout(() => {
          this.status = '';
        }, 3000);
      }

    });


  }

}


