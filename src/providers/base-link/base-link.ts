import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the BaseLinkProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/

@Injectable()
export class BaseLinkProvider {

  constructor(public http: Http) {
    
  }

  static GetBaseUrl() {
    return 'http://localhost:49520/api/Community';
  }

}
