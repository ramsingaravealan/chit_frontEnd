import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, OnInit, OnDestroy, AfterViewInit, Input, Output, ViewChild, ElementRef, EventEmitter, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { AppService } from 'src/app/app.service';

declare var $: any;
declare var google: any;
declare var moment: any;

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FileUploadComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => FileUploadComponent),
      multi: true
    }
  ]
})
export class FileUploadComponent implements OnInit, AfterViewInit, OnDestroy, ControlValueAccessor {

  public mPhotoSrc = 'noimg.png';
  public browse = 'Browse';
  public progress = '0%';
  @Input() cId = Math.random();
  @Input() uploadBtn = 'true';
  @Input() placeholder = '';
  @Input() required = 'false';
  private mUrl = '';
  private mSelectedUrl = '';
  get url(): any {
    return this.mUrl;
  }
  @Input()
  set url(value: any) {
    if (value === '') {
      return;
    }
    this.mUrl = value;
  }

  get selectedUrl(): any {
    return this.mSelectedUrl;
  }
  @Input()
  set selectedUrl(value: any) {
    if (value === '') {
      return;
    }
    this.mSelectedUrl = value;
  }

  stateReady = false;
  onChange: any = () => {};
  onTouch: any = () => {};
  constructor(public app: AppService) { }


  validate({ value }: FormControl) {
    // console.log(typeof (this.required) + value + ' sel');
    if (this.required === 'true') {

    }

    return true;

  }

  writeValue(obj: any): void {
    // console.log('value written ' + obj);
    if (obj) {
      this.mPhotoSrc = obj;
    } else if (obj === '') {
      this.mPhotoSrc = 'noimg.png';
      this.onChange(this.mPhotoSrc);
    } else {
      this.mPhotoSrc = 'noimg.png';
      this.onChange(this.mPhotoSrc);
    }
  }
  registerOnChange(fn: any) {
    this.onChange = fn;
    // console.log(fn);
  }

  registerOnTouched(fn: any) {
    this.onTouch = fn;
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
  }

  ngOnDestroy() { }

  public changeListener($event, key: string): void {
    this.readThis($event.target, key);
  }

  public readThis(inputValue: any, key: string): void {
    const file: File = inputValue.files[0];
    const extn = file.name.split('.').pop();
    const myReader: FileReader = new FileReader();

    myReader.onloadend = (e) => {

      this.generatePhotoUrl(myReader.result, key, extn);
    };
    myReader.readAsDataURL(file);
  }

  // private generatePhotoUrl(base64, key: string, extn) {
  //   this.browse = 'Processing..';
  //   this.app.getQuery('clients/get_file_save', { photo: base64, extn }).then(result => {
  //     console.log(result);
  //     this.browse = 'Browse';
  //     if (result.status === 'OK') {
  //       this.mPhotoSrc = result.file_name;
  //       this.onChange(this.mPhotoSrc);
  //     }
  //   });
  // }

  private generatePhotoUrl(base64, key: string, extn) {
    this.browse = 'Processing..';
    this.app.getQuerySubscribe('clients/get_file_save', { photo: base64, extn }).subscribe(event => {
      // Via this API, you get access to the raw event stream.
      // Look for upload progress events.


      if (event.type === HttpEventType.UploadProgress) {
        // This is an upload progress event. Compute and show the % done:
        const percentDone = Math.round(100 * event.loaded / event.total);
        console.log(`File is ${percentDone}% uploaded.`);
        this.progress = percentDone + '%';
      } else if (event instanceof HttpResponse) {
        console.log('File is completely uploaded!');
        this.progress = '0%';
        console.log(event.body);
        this.browse = 'Browse';
        const result = event.body;
        if (result.status === 'OK') {
          this.mPhotoSrc = result.file_name;
          this.onChange(this.mPhotoSrc);
        }
      }
    });
  }
}
