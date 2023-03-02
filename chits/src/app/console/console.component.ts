import { Component, OnInit, OnDestroy, AfterViewInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { AppService } from '../app.service';
declare var $: any;
declare var moment: any;
@Component({
  selector: 'app-console',
  templateUrl: './console.component.html',
  styleUrls: ['./console.component.css']
})
export class ConsoleComponent implements OnInit, OnDestroy, AfterViewInit {

  constructor(public app: AppService,
              private router: Router, private location: Location
  ) {
    this.lang = this.app.getLang();
    this.getAllAdminSettings();
    // this.login = { id: '-1' };
  }
  public lang;
  public login: any = {id: '-1', type: ''};
  public user: any;
  public message = '';
  public browse = 'Browse';

  public helps = [];
  public viewHidden = true;
  public helpObject: any = {};
  public search = '';
  public admin: any = {as_id: '-1'};


  onChangeLang() {
    this.app.setLang(this.lang);
    location.reload();
  }

  setLangEng() {
    this.app.setLang('en');
    location.reload();
  }

  setLangEs() {
    this.app.setLang('es');
    location.reload();
  }

  ngOnInit() {
    this.check();
  }

  ngOnDestroy() {

  }

  ngAfterViewInit() {
    // assets/bundles/mainscripts.bundle.js
    $('body').removeClass('authentication sidebar-collapse');
    // $.getScript('assets/bundles/libscripts.bundle.js');
    // $.getScript('assets/bundles/vendorscripts.bundle.js');
    $.getScript('assets/bundles/mainscripts.bundle.js');
    $('.menu-collapsed').toggleClass('d-none');
  }
  onClickTerms() {
    $('#myModalTerms').modal('show');
  }

  public onSubmit() {

  }

  public check() {
    const tempItem = JSON.parse(JSON.stringify(this.app.getLogin()));

    if (tempItem.id !== '-1') {


      this.login = tempItem;
      console.log(this.login);
      if (this.login.type === 'Backend') {
        // this.location.replaceState('/');
        // this.router.navigate(['dashboard']);
      } else if (this.login.type === 'Customer') {
        this.location.replaceState('/');
        this.router.navigate(['admin/customers']);
      }

    } else {
      this.location.replaceState('/');
      this.router.navigate(['login']);
    }
  }

  public viewHelpDetail(obj) {
    this.helpObject = obj;
    this.viewHidden = false;
  }

  public closeDetail() {
    this.helpObject = {};
    // this.viewHidden = true;
    this.viewHidden = true;
  }
  public getAccountSetting() {
    $('#myModalUser').modal('show');

  }
  public viewHelp() {
    this.search = '';
    this.helps = [];
    this.getHelps();
    $('#myModalHelp').modal('show');
  }
  public getTerms() {
    $('#myModalTerms').modal('show');
  }
  public onClear() {
    this.search = '';
    this.helps = [];
    this.getHelps();
  }

  public onSearchSubmitHelp() {
    this.helps = [];
    this.getHelps();
  }
  public getHelps() {

    const obj = { user_type: 1, search: this.search };
    // if (parseInt(this.login.user_mlc_id, 10) > 0) {
    //   obj.user_type = 2;
    // } else if (parseInt(this.login.user_do_id, 10) > 0) {
    //   obj.user_type = 3;
    //   // this.app.getQuery('doctor_offices/get_dnr_by_do', this.login).then(result => {

    //   //   console.log(result);
    //   //   if (result.status === 'OK') {
    //   //     this.dnrMenus = result.data;
    //   //   }
    //   // });
    // } else if (parseInt(this.login.user_pharm_id, 10) > 0) {
    //   obj.user_type = 4;
    // } else if (parseInt(this.login.user_osrv_id, 10) > 0) {
    //   obj.user_type = 6;
    // }
    console.log(obj);
    this.app.getQuery('helps/get_all_helps_by_cat', obj).then(result => {

      console.log(result);
      if (result.status === 'OK') {
        this.helps = result.data;
      }
    });

  }

  public logout() {
    this.app.setLogout();
    this.location.replaceState('/');
    this.router.navigate(['login']);
  }

  public changeListener($event, key: string): void {
    this.readThis($event.target, key);
  }

  public readThis(inputValue: any, key: string): void {
    const file: File = inputValue.files[0];
    const myReader: FileReader = new FileReader();

    myReader.onloadend = (e) => {

      this.generatePhotoUrl(myReader.result, key);
    };
    myReader.readAsDataURL(file);
  }

  private generatePhotoUrl(base64, key: string) {
    this.browse = 'Processing..';
    this.app.getQuery('clients/get_photo_save', { photo: base64 }).then(result => {
      console.log(result);
      this.browse = 'Browse';
      if (result.status === 'OK') {
        this.login[key] = result.file_name;
      }
    });
  }
  public getAllAdminSettings() {
    const obj = {
      num_per_page: 1,
      order_by: 'as_id',
      order: 'ASC',
      start_from: 0,
      search: '',
      active: true,
      inactive: false
    };
    console.log(JSON.stringify(obj));
    this.app.getQuery('adminsettings/get_all_admin_settings', obj).then(result => {

      console.log(result);
      if (result.status === 'OK') {
        this.admin = result.data[0];
        this.app.admin = result.data[0];
        this.app.getGeoName(this.app.admin.as_city_id, 'cities', 'as_city');
      } else {

      }
    });
  }

}

