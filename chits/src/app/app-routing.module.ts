
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlankComponent } from './blank/blank.component';
import { ConsoleComponent } from './console/console.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
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
const routes: Routes = [
    // { path: 'forgotpassword', component: ForgetPasswordComponent },
  { path: '', redirectTo: 'console', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'console', component: ConsoleComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
            // { path: 'adminsettings', component: AdminSettingsComponent },
            { path: 'users', component: UsersComponent },
            { path: 'customerdetails', component: CustomerDetailsComponent },
            { path: 'newcustomers', component: NewCustomersComponent },
            { path: 'chitscheme', component: ChitSchemeComponent },
            { path: 'chitgroup', component: ChitgroupComponent },
            { path: 'chitvalue', component: ChitvalueComponent },
            { path: 'addagent', component: AddagentComponent },
            { path: 'addchits', component: AddChitsComponent },
            { path: 'collections', component: CollectionsComponent },
            { path: 'report', component: ReportComponent },
            { path: 'maxinstallment', component: MaxinstallmentComponent },
            { path: 'taxes', component: TaxesComponent },
            { path: 'addch', component: AddChComponent },
            { path: 'maxcollection', component:  MaxcollectionComponent },
            { path: 'chits', component:  ChitsComponent },
      { path: 'blank', component: BlankComponent },
      { path: 'settings', component: SettingsComponent },
      { path: 'translations', component: TranslationComponent },
      { path: '**', redirectTo: 'dashboard' }
    ]
  },
  { path: '**', redirectTo: 'console' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
/*
<li routerLinkActive="active open">
    <a routerLink=".dsstore">
        <span>{{ app.text..ds_store || '.ds_store' }}</span>
    </a>
</li>
<li routerLinkActive="active open">
    <a routerLink="adminsettings">
        <span>{{ app.text.admin_settings || 'admin_settings' }}</span>
    </a>
</li>
<li routerLinkActive="active open">
    <a routerLink="emailtemplates">
        <span>{{ app.text.email_templates || 'email_templates' }}</span>
    </a>
</li>
<li routerLinkActive="active open">
    <a routerLink="endusers">
        <span>{{ app.text.end_users || 'end_users' }}</span>
    </a>
</li>
<li routerLinkActive="active open">
    <a routerLink="endusercarts">
        <span>{{ app.text.enduser_carts || 'enduser_carts' }}</span>
    </a>
</li>
<li routerLinkActive="active open">
    <a routerLink="orderedproducts">
        <span>{{ app.text.ordered_products || 'ordered_products' }}</span>
    </a>
</li>
<li routerLinkActive="active open">
    <a routerLink="orders">
        <span>{{ app.text.orders || 'orders' }}</span>
    </a>
</li>
<li routerLinkActive="active open">
    <a routerLink="productcategories">
        <span>{{ app.text.product_categories || 'product_categories' }}</span>
    </a>
</li>
<li routerLinkActive="active open">
    <a routerLink="products">
        <span>{{ app.text.products || 'products' }}</span>
    </a>
</li>
<li routerLinkActive="active open">
    <a routerLink="taxes">
        <span>{{ app.text.taxes || 'taxes' }}</span>
    </a>
</li>
<li routerLinkActive="active open">
    <a routerLink="users">
        <span>{{ app.text.users || 'users' }}</span>
    </a>
</li>

*/



