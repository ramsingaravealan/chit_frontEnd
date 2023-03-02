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
declare var tinymce: any;
declare var moment: any;

@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextAreaComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => TextAreaComponent),
      multi: true
    }
  ]
})
export class TextAreaComponent implements OnInit, AfterViewInit, OnDestroy, ControlValueAccessor {
  @Input() required = 'false';
  @Input() type = 'mediumtext';
  @Input() view = 'text';
  private initialized = false;
  @Input() cId = Math.random();
  @Input() placeholder = '';
  private regexpEmail: RegExp;
  private regexpPhone: RegExp;
  constructor() {
    this.regexpEmail = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i);
    this.regexpPhone = new RegExp(/^[1-9]+[0-9]*$/i);
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
    if (this.type === 'richtext') {
      if (this.initialized) {
       // tinymce.get(this.cId).setContent(this.val);
      }
      // if (value) {
      //   if (tinymce.get(this.cId)) {
      //     tinymce.get(this.cId).setContent(this.val);
      //   } else {
      //     // this.setupTiny();
      //     setTimeout(() => {
      //       console.log(tinymce.get(this.cId));
      //       // if (tinymce.get(this.cId).initialized) {
      //       tinymce.get(this.cId).setContent(this.val);
      //       // }
      //     }, 1000);
      //   }


      // }
    }
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
    // console.log(fn);
  }

  registerOnTouched(fn: any) {
    this.onTouch = fn;
  }

  ngAfterViewInit(): void {
    if (this.type === 'richtext') {
      this.setupTiny();
    }
  }
  ngOnDestroy(): void {
    // throw new Error('Method not implemented.');
  }

  ngOnInit() {
  }

  private setupTiny() {
    if (this.type === 'richtext') {
      const isNotLoaded = true;
      if (tinymce) {
        console.log('richtext');
        tinymce.EditorManager.editors = [];
        // tinymce.remove();
        // console.log(tinymce.EditorManager.editors);
        // tinymce.EditorManager.editors.forEach(element => {
        //   if (this.cId === element.id) {
        //     tinymce.execCommand('mceRemoveControl', true, this.cId);

        //     isNotLoaded = false;
        //   }
        // });
      }
      // if (isNotLoaded) {
      tinymce.init({
        // tslint:disable-next-line:max-line-length
        selector: '#' + this.cId,
        theme: 'modern',
        height: 300,
        plugins: [
          'advlist autolink link image lists charmap print preview hr anchor pagebreak spellchecker',
          'searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking',
          'save table contextmenu directionality emoticons template paste textcolor'
        ],
        // tslint:disable-next-line:max-line-length
        toolbar: 'insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | l      ink image | print preview media fullpage | forecolor backcolor emoticons',
        setup: (ed) => {
          ed.on('init', () => {
            setTimeout(() => {
              console.log('init tiny');
              ed.setContent(this.val);
            }, 2000);

            // console.log(ed);
            // load your content here!
            // tinymce.activeEditor.setContent(html);
            // or
            // tinymce.editors[0].setContent(html);
            // tinymce.get(this.cId).setContent(this.val);
            this.initialized = true;
            // tinymce.get(this.cId).setContent(this.val);
          });
          ed.on('change', (e) => {

            console.log('the event object ', e);
            console.log('the editor object ', ed);
            console.log('the content ', ed.getContent());
            this.onChange(ed.getContent());
          });
        }
      });
      // }
    }
  }

}
