import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public session = localStorage.getItem("session");
  constructor(private http: HttpClient, private router: Router) { }
  

  public signIn(username:string, password:string){
    
    return this.http.get(`${environment.uri}/users/signin/${username}/${password}`, { responseType:'text' })
  }
  public signOut(){
    localStorage.removeItem("session")
    this.session = null
    this.router.navigate(['/'])
  }
}
