import { Component, OnInit, OnDestroy, AfterViewInit, Input, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { AppService } from '../app.service';

declare var $: any;
declare var tinymce: any;
declare var moment: any;

@Component({
  selector: 'app-translation',
  templateUrl: './translation.component.html',
  styleUrls: ['./translation.component.css']
})
export class TranslationComponent implements OnInit, OnDestroy, AfterViewInit {

 
  @ViewChild('baseForm') baseForm: NgForm;
  // tslint:disable-next-line:variable-name
  public translations = [];
  // tslint:disable-next-line:variable-name
  public translation: any;

  public timer: any;


  public loadingText = 'Save';
  // tslint:disable-next-line:variable-name
  public num_per_page = '10';
  // tslint:disable-next-line:variable-name
  public order_by = 'trx_id';
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
    this.translation = {
      trx_id: '-1',
      trx_key: '', trx_en: '', trx_es: '',
      trx_ln1: '', trx_ln2: '', trx_ln3: '', trx_ln4: '', trx_log: ''
    };
  }

  ngOnInit() {

  }

  ngOnDestroy() {

  }

  ngAfterViewInit() {
    this.init();
  }



  public init() {
    this.translations = [];
    this.reset();
    this.getAllTranslations();
  }

  public reset() {
    this.translation = {
      trx_id: '-1',
      trx_key: '', trx_en: '', trx_es: '',
      trx_ln1: '', trx_ln2: '', trx_ln3: '', trx_ln4: '', trx_log: ''
    };
    this.baseForm.form.markAsPristine();
    this.baseForm.form.markAsUntouched();
    this.baseForm.form.updateValueAndValidity();
  }

  public onKey(e, obj) {
    // console.log(e.target.value);
    // console.log(obj);
    obj.trx_en = e.target.value;
    this.translation = obj;

    // console.log(this.translations);
    if (this.timer) {
      clearTimeout(this.timer);
    }
    this.timer = setTimeout(() => {
      this.onSubmitUpdate();
    }, 3000);
  }

  public onKeyES(e, obj) {
    // console.log(e.target.value);
    // console.log(obj);
    obj.trx_es = e.target.value;
    this.translation = obj;

    // console.log(this.translations);
    if (this.timer) {
      clearTimeout(this.timer);
    }
    this.timer = setTimeout(() => {
      this.onSubmitUpdate();
    }, 3000);
  }

  public getAllTranslations() {
    const obj = {
      num_per_page: this.num_per_page,
      order_by: this.order_by,
      order: this.order,
      start_from: this.start_from,
      search: this.search
    };
    console.log(JSON.stringify(obj));
    this.app.getQuery('translations/get_all_translations', obj).then(result => {

      console.log(result);
      if (result.status === 'OK') {
        this.translations = this.translations.concat(result.data);
        this.count = result.total;
        this.received = result.received;
        this.dbPages = [];
        // this.activePage = 1;
        for (let index = 0; index < result.pages; index++) {
          this.dbPages.push(index);
        }
        this.displayCount = (this.translations.length) + ' of ' + this.count;
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
    this.getAllTranslations();
  }

  public onSubmit() {
    this.loadingText = 'Saving...';
    const itemObj = JSON.parse(JSON.stringify(this.translation));
    console.log(itemObj);
    this.app.getQuery('translations/add_edit_translation', itemObj).then(result => {
      this.loadingText = 'Save';
      console.log(result);
      if (result.status === 'OK') {
        $('#myModal').modal('hide');
        this.onClear();
        this.app.fetchTexts();
      } else {
        this.message = result.message;
        setTimeout(() => {
          this.message = '';
        }, 4000);
      }
    });
  }


  public onSubmitUpdate() {

    this.loadingText = 'Saving...';
    const itemObj = JSON.parse(JSON.stringify(this.translation));
    // this.app.getQuery('translations/add_edit_translation', itemObj).then(result => {
    this.app.getQuery('translations/mass_edit_translation', { payload: this.translations }).then(result => {
      this.loadingText = 'Save';
      console.log(result);
      if (result.status === 'OK') {
        // $('#myModal').modal('hide');
        // this.onClear();
        // this.translation = result.updated[0];
        this.app.fetchTexts();
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
    // tinymce.get('campaign_text').setContent('');
    $('#myModal').modal('show');
  }

  public editItem(itemObj) {

    const tempItem = JSON.parse(JSON.stringify(itemObj));

    this.translation = tempItem;
    // tinymce.get('campaign_text').setContent(this.translations.campaign_text);
    // console.log(this.item);

    $('#myModal').modal('show');
  }

  /*
    public convertToTime(day) {
    var breakDay = moment(day, "YYYY-MM-DD HH:mm:ss").format("hh:mm A");
    return breakDay;
  }

  public convertToDate(day) {
    var breakDay = moment(day, "YYYY-MM-DD").format("DD MMM YYYY");
    return breakDay;
  }

  public convertToDateTime(day) {
    var breakDay = moment(day, "YYYY-MM-DD HH:mm:ss").format("DD MMM YYYY hh:mm A");
    return breakDay;
  }

  public calculateDuration(item) {
    var startTime = moment(item.sca_hour_start, "YYYY-MM-DD HH:mm:ss");
    var end = moment(item.sca_hour_end, "YYYY-MM-DD HH:mm:ss");
    var duration = moment.duration(end.diff(startTime));
    var hours = duration.asHours();
    item.tothrs = hours.toFixed(1);
  }
  */


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
        this.translation[key] = result.file_name;
      }
    });
  }


}
