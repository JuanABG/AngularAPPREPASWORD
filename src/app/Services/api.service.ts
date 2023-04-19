import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( public http: HttpClient) {
  }
   url= "https://localhost:7206/api/";

  public async  get(controlador:String){

   var response:any
   await this.http.get(this.url+controlador).toPromise().then(res=>{
     response=res
   });
    return response
    }
    public async  post(controlador:String,data:object){
    var response:any
    await this.http.post(this.url+controlador, data).subscribe(res=>{
    response=res
    });
    return response
    }
    public async  put(controlador:String,data:object,id:number){
      var response:any
      await this.http.put(this.url+controlador+'/'+id, data).subscribe(res=>{
      response=res
    });
      return response
    }
    public async  delete(controlador:String, id:number){
      var response:any
      await this.http.delete(this.url+controlador+'/'+id).subscribe(res=>{
      response=res
    });
      return response
    }
 }