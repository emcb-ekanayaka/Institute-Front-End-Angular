import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrivilegeService {

  private baseUrl : string= 'http://localhost:8010/api/v1/privilege'; 

  constructor(
    private http:HttpClient
  ) { }

  
  GetPrivilegeById(ID:any):Observable<any>{
    return this.http.get(this.baseUrl+"/"+"getPrivilege"+"/"+ID);
  }

  GetAllPrivilegeForComponent(roleName:string,moduleId:string):Observable<any>{
    return this.http.get(this.baseUrl+"/"+"getPrivilegeForComponent"+"/"+roleName+"/"+moduleId);
  }

  GetAllPrivilege():Observable<any>{
    return this.http.get(this.baseUrl);
  }

  createPrivilege(privilege:any,type:any):Observable<any>{
    if(type=='Add'){
      console.log(privilege.rolesId);
      return this.http.post(this.baseUrl,privilege);
    }else{
      return this.http.put(this.baseUrl+"/"+privilege.id,privilege);
  }
      
}
}
