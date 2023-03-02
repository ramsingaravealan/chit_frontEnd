import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import {NgxPrintModule} from 'ngx-print';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DatePickerComponent } from './components/date-picker/date-picker.component';
import { DateTimePickerComponent } from './components/date-time-picker/date-time-picker.component';
import { TimePickerComponent } from './components/time-picker/time-picker.component';
import { DateRangePickerComponent } from './components/date-range-picker/date-range-picker.component';
import { SelectSingleComponent } from './components/select-single/select-single.component';
import { SelectMulitpleComponent } from './components/select-mulitple/select-mulitple.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { SelectComponent } from './components/select/select.component';
import { TextFieldComponent } from './components/text-field/text-field.component';
import { TextAreaComponent } from './components/text-area/text-area.component';
import { CheckBoxComponent } from './components/check-box/check-box.component';
import { FilterRadioComponent } from './components/filter-radio/filter-radio.component';
import { ImageUploadComponent } from './components/image-upload/image-upload.component';
import { ImageThumbnailComponent } from './components/image-thumbnail/image-thumbnail.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { MapViewRetroComponent } from './components/map-view-retro/map-view-retro.component';
import { SelectMultipleWithTagsComponent } from './components/select-multiple-with-tags/select-multiple-with-tags.component';

import { ConsoleComponent } from './console/console.component';
import { LoginComponent } from './login/login.component';
import { BlankComponent } from './blank/blank.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { AppService } from './app.service';

import { SettingsComponent } from './settings/settings.component';

import { TranslationComponent } from './translation/translation.component';
// import { AdminSettingsComponent } from './admin-settings/admin-settings.component';

import { TaxesComponent } from './taxes/taxes.component';
import { UsersComponent } from './users/users.component';

import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { NewCustomersComponent } from './new-customers/new-customers.component';
import { AddChitsComponent } from './add-chits/add-chits.component';
import { ChitSchemeComponent } from './chit-scheme/chit-scheme.component';
import { ChitgroupComponent } from './chitgroup/chitgroup.component';
import { ChitvalueComponent } from './chitvalue/chitvalue.component';
import { AddChComponent } from './add-ch/add-ch.component';
import { AddagentComponent } from './addagent/addagent.component';
import { CollectionsComponent } from './collections/collections.component';
import { ReportComponent } from './report/report.component';
import { MaxinstallmentComponent } from './maxinstallment/maxinstallment.component';
import { MaxcollectionComponent } from './maxcollection/maxcollection.component';
import { ChitsComponent } from './chits/chits.component';



@NgModule({
  declarations: [
    AppComponent,
    DatePickerComponent,
    DateTimePickerComponent,
    TimePickerComponent,
    DateRangePickerComponent,
    SelectSingleComponent,
    SelectMulitpleComponent,
    DropdownComponent,
    SelectComponent,
    TextFieldComponent,
    TextAreaComponent,
    CheckBoxComponent,
    MapViewRetroComponent,
    SelectMultipleWithTagsComponent,
    FilterRadioComponent,
    ImageUploadComponent,
    FileUploadComponent,
    ConsoleComponent,
    LoginComponent,
    BlankComponent,
    DashboardComponent,
    SettingsComponent,
    TranslationComponent,
    // AdminSettingsComponent,
  
    TaxesComponent,
    UsersComponent,
   
    CustomerDetailsComponent,
   
    NewCustomersComponent,
   
    AddChitsComponent,
   
    ChitSchemeComponent,
   
    ChitgroupComponent,
   
    ChitvalueComponent,
   
    AddChComponent,
   
    AddagentComponent,
   
    ImageThumbnailComponent,
   
    CollectionsComponent,
   
    ReportComponent,
   
    MaxinstallmentComponent,
   
    MaxcollectionComponent,
   
    ChitsComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgxPrintModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
