import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

declare var $: any;
// tslint:disable-next-line:variable-name
// const site_url = 'http://localhost/sdv2/index.php/';
// tslint:disable-next-line:variable-name
// const profile_url = 'http://localhost/sdv2/uploads/';

// tslint:disable-next-line:variable-name
const stripe_url = 'https://miratumascota.com/mirav2/pgs/public/';
// tslint:disable-next-line:variable-name
const site_url = 'http://localhost/chitv2/index.php/';
// tslint:disable-next-line:variable-name
const profile_url = 'http://localhost/chitv2/uploads/';

// tslint:disable-next-line:variable-name
// const site_url = 'http://localhost/ayudav2/index.php/';
// tslint:disable-next-line:variable-name
// const profile_url = 'http://localhost/ayudav2/uploads/';

// const site_url: string = "http://10.19.224.154/helix/index.php/";
// const profile_url: string = "http://10.19.224.154/helix/uploads/";

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private tokenKey = '_token_chitv2_ramrajesh_ip';
  public login: any = { id: '-1' };
  public loading = '';
  public logo: any;
  public selectedId = '-1';
  public aptCount = '0';
  public teleCount = '0';
  public pReqCount = '0';
  public selectedItem  = {name: '', content: '', img: '', id: '', ticket_id: '-1'};
  public lang = 'es';
  public text: any = {};
  public admin: any = {as_id: -1};

  constructor(private http: HttpClient) {
    const userLang = navigator.language;
    console.log(userLang);
    this.fetchTexts();

  }


  // public getText(key) {
  //   const x = this.texts.find(obj => obj.trx_key === key);
  //   console.log(x);
  // }

  public setLang(l = 'en') {
    this.lang = l;
   // console.log(this.translate.getBrowserLang());
   // this.translate.setDefaultLang(this.lang);
    localStorage.setItem(this.tokenKey + '_lang', this.lang);
  }

  public fetchTexts() {
    this.getQuery('translations/getlang', {lang: this.getLang()}).then(result => {

      console.log(result);
      if (result.status === 'OK') {
        this.text = result.data;
      }
    });
  }

  public getLang(): any {
    if (localStorage.getItem(this.tokenKey + '_lang')) {
      this.lang = localStorage.getItem(this.tokenKey + '_lang');
      // this.translate.setDefaultLang(this.lang);
    } else {
      if (window.navigator.language.substring(0, 2) === 'es') {
        this.setLang('es');
      } else {
        this.setLang('en');
      }
    }
    return this.lang;
  }

  // public updateCounts() {
  //   if (this.con) {
  //     this.con.getAllAppointmentsCount();
  //     // this.con.getAllTeleReqCount();
  //   }
  // }

  public checkLogin(obj): any {
    const headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json');
   // const options = new RequestOptions({ headers });
    return this.http.post(site_url + 'clients/checklogin', obj, {headers})
    .toPromise();
  }

  public changePassword(obj): any {
    const headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json');
   // const options = new RequestOptions({ headers });
    return this.http.post(site_url + 'clients/change_pass', obj, {headers})
    .toPromise();
  }
  // public setConsole(c) {
  //   this.con = c;
  // }


  public getQueryHasura(link, obj) {
    // obj.self_id = this.login.obj.user_id;
    // obj.user_backoffice_admin_id = this.login.obj.user_backoffice_admin_id;
    console.log(JSON.stringify(obj));
    const headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json');
    return this.http.post(link, obj, {headers})
    .toPromise();
  }


  public getQueryMore(link, obj): any {
    // obj.self_id = this.login.obj.user_id;
    // obj.user_backoffice_admin_id = this.login.obj.user_backoffice_admin_id;
    console.log(JSON.stringify(obj));
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: this.getToken()
      })
    };
    return this.http.post(site_url + link, obj, httpOptions)
    .toPromise();
  }


  public getQueryGet(link): any {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
    return this.http.get(link, httpOptions)
      .toPromise();

  }

  public getGeoName(id, type, name) {
    console.log(type);
    // this.getQuery('prodsales/get_geo_name', {id, type}).then(result => {
    //   console.log(result);
    //   this.admin[name] = result.name;
    // });
  }

  public getQuery(link, obj): any {

    console.log(JSON.stringify(obj));
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: this.getToken()
      })
    };
    console.log(httpOptions);
    return this.http.post(site_url + link, obj, httpOptions)
      .toPromise();

  }

  public getQuerySubscribe(link, obj): any {

    console.log(JSON.stringify(obj));
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: this.getToken()
      }),
      reportProgress: true
    };
    const uploadReq = new HttpRequest('POST', site_url + link, obj, httpOptions);
    return this.http.request(uploadReq);
  }

  public getQueryStripe(link, obj): any {

    console.log(JSON.stringify(obj));
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.post(stripe_url + link, obj, httpOptions)
      .toPromise();

  }

  public getQueryPlain(link, obj): any {
    // obj.self_id = this.login.obj.user_id;
    // obj.user_backoffice_admin_id = this.login.obj.user_backoffice_admin_id;
    console.log(JSON.stringify(obj));
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: this.getToken()
      })
    };
    return this.http.post(site_url + link, obj, httpOptions)
    .toPromise();
  }

  public getLog(pid, table): any {
    const obj: any = { pid };
    obj.self_id = this.login.obj.user_id;
    obj.table = table;
    obj.user_backoffice_admin_id = this.login.obj.user_backoffice_admin_id;
    console.log(JSON.stringify(obj));
    const headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json');
    return this.http.post(site_url + 'clients/get_log', obj, {headers})
    .toPromise();
  }



  private extractData(res: Response) {
    // console.log(res);
    const body = res.json();
    // console.log(body);
    return body || {};

  }

  private handleError(error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    // console.log(error);
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

  public getProfileUrl() {
    return profile_url;
  }

  public getSiteUrl() {
    return site_url;
  }

  setLogin(data: any) {
    // this.login = data;
    localStorage.setItem(this.tokenKey, data);
  }

  setLogout() {
    // this.login = { id: '-1' };
    // localStorage.setItem(this.tokenKey, JSON.stringify(this.login));
    localStorage.removeItem(this.tokenKey);
  }
  public getToken() {
    if ( localStorage.getItem(this.tokenKey)) {
      return  localStorage.getItem(this.tokenKey);
    }
    return 'error';
  }

  public getLogin() {

    const base64Url = this.getToken().split('.')[1];
    if (typeof base64Url === 'undefined') {
      this.login = { id: '-1' };
    } else {
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      try {
        // attempt to execute this code
        const jsonPayload = decodeURIComponent(atob(base64).split('').map((c) => {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      }).join(''));
        this.login = JSON.parse(jsonPayload);
        console.log(this.login);
      } catch (exception) {
        // this code handles exceptions
        this.setLogout();
      } finally {
        // this code always gets executed
      }

    }
    return this.login;
  }

  private applySentenceCase(str) {
    return str.replace(/\w\S*/g, (txt) => {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }

  public attachSelect2(viewId, initials = [], link, obj) {
    $(viewId).select2({
      data: initials,
      allowClear: true,
      ajax: {
        crossDomain: true,
        type: 'POST',
        beforeSend: (xhr) => {
          xhr.setRequestHeader('Authorization', this.getToken());
        },
        url: site_url + link,
        dataType: 'json',
        delay: 250,
        data: params => {
          const queryParameters = {
            term: params.term,
          };
          Object.keys(obj).forEach( (key) => {
            console.log(obj[key]);
            queryParameters[key] = obj[key];
          });
          console.log(queryParameters);
          return JSON.stringify(queryParameters);
        },
        processResults: (data) => {
          console.log(data);
          return {
            // tslint:disable-next-line:only-arrow-functions
            results: $.map(data.data, (item) => {
              return {
                text: item.text,
                id: item.id
              };
            })
          };
        },
        cache: true
      }

    });
  }
}
