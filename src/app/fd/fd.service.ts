import { Injectable } from '@angular/core';
import { Fd } from './fd';
import { Config } from './../config';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class FdService {

  private headers  = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
  private options       = new RequestOptions({ headers: this.headers }); 
  private url = Config.API_ENDPOINT+'FixedDeposits/';

  constructor(private http: Http) { }

  

  getFixedDeposits(userId : number[]): Observable<Fd[]>{
        return this.http.get(this.url+userId.join(','))
                         .map((res:Response) => res.json())
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  addFixedDeposit(fd : Fd): Observable<boolean>{

        return this.http.post(this.url, JSON.stringify(fd), this.options) 
                         .map((res:Response) => res.json()) 
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error')); 
  }

  updateFixedDeposit(fd: Fd):Observable<boolean>{

    return this.http.put(this.url+fd.InvestmentId, JSON.stringify(fd), this.options) // ...using put request
                         .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
                          
  }

  deleteFixedDeposit(fixedDepositId :string):Observable<boolean>{

    return this.http.delete(this.url+fixedDepositId) 
                         .map((res:Response) => res.json()) 
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

  }


}
