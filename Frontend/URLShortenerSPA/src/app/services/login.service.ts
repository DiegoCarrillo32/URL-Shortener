import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }


  public signIn(username:string, password:string){
    return this.http.get(`${environment.uri}/users/signin/${username}/${password}`, { responseType:'text' })
  }
  public signOut(){
    
  }
}
