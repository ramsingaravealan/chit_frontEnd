import {
  Component, OnInit, OnDestroy,
  AfterViewInit, Input, Output, ViewChild, ElementRef, EventEmitter, forwardRef, Self
} from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor, FormControl, NgControl, NG_VALIDATORS, NG_VALUE_ACCESSOR, Validators
} from '@angular/forms';
import { AppService } from 'src/app/app.service';

declare var $: any;
declare var google: any;
declare var moment: any;

@Component({
  selector: 'app-text-field',
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextFieldComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => TextFieldComponent),
      multi: true
    }
  ]
})
export class TextFieldComponent implements OnInit, AfterViewInit, OnDestroy, ControlValueAccessor {
  @Input() required = 'false';
  @Input() type = 'text';
  @Input() view = 'text';
  @Input() readonly = false;
  @Input() cId = Math.random();
  @Input() placeholder = '';
  private regexpEmail: RegExp;
  private regexpPhone: RegExp;
  private regexpCurrency: RegExp;
  constructor() {
    this.regexpEmail = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i);
    this.regexpPhone = new RegExp(/^[1-9]+[0-9]*$/i);
    this.regexpCurrency = new RegExp(/^(?:[1-9]\d+|\d)(?:\.\d\d)?$/i);

  }

  public val = '';

  onChange: any = () => { };
  onTouch: any = () => { };

  validate({ value }: FormControl) {

    switch (this.view) {
      case 'email':
        if (this.required === 'true') {
          if (this.regexpEmail.test(value)) {
            return true;
          } else {
            return {
              invalid: true
            };
          }
        } else if (value !== '') {
          if (this.regexpEmail.test(value)) {
            return true;
          } else {
            return {
              invalid: true
            };
          }
        }
        return true;
      case 'phone':
        if (this.required === 'true') {
          if (this.regexpPhone.test(value)) {
            return true;
          } else {
            return {
              invalid: true
            };
          }
        } else if (value !== '') {
          if (this.regexpPhone.test(value)) {
            return true;
          } else {
            return {
              invalid: true
            };
          }
        }
        return true;
      case 'currency':
        if (this.required === 'true') {
          if (this.regexpCurrency.test(value)) {
            return true;
          } else {
            return {
              invalid: true
            };
          }
        } else if (value !== '') {
          if (this.regexpCurrency.test(value)) {
            return true;
          } else {
            return {
              invalid: true
            };
          }
        }
        return true;
      case 'input':
        if (this.required === 'true') {
          if (value === '') {
            return {
              invalid: true
            };
          } else {
            return true;
          }
        }
        return true;
      default:
        if (this.required === 'true') {
          if (value === '') {
            return {
              invalid: true
            };
          } else {
            return true;
          }
        }
    }


    return true;

  }

  public onChangeMoron() {
    this.val = 'Machi';
    this.onChange(this.val);
  }




  writeValue(value: any) {
    this.val = value;
    // console.log(value);
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
    // console.log(fn);
  }

  registerOnTouched(fn: any) {
    this.onTouch = fn;
  }

  ngAfterViewInit(): void {
    // throw new Error('Method not implemented.');
  }
  ngOnDestroy(): void {
    // throw new Error('Method not implemented.');
  }

  ngOnInit() {
  }

}
