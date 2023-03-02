import { Component, OnInit, OnDestroy,
  AfterViewInit, Input, Output, ViewChild, ElementRef, EventEmitter, forwardRef, Self } from '@angular/core';
import { AbstractControl,
  ControlValueAccessor, FormControl, NgControl, NG_VALIDATORS, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';
import { AppService } from 'src/app/app.service';


declare var $: any;
declare var google: any;
declare var moment: any;

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DropdownComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => DropdownComponent),
      multi: true
    }
  ]
})
export class DropdownComponent implements OnInit, AfterViewInit, OnDestroy, ControlValueAccessor {

  constructor(public app: AppService) {

   }

  val = '';

  onChange: any = () => {
    console.log('h');
  }
  onTouch: any = () => {
    console.log('hg');
  }

  validate({ value }: FormControl) {
    // console.log(value);
    if (value === 'Vasudev') {
      return {
        invalid: true
      };
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
