import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { UrlShort } from '../interfaces/urlshort.interface';
@Injectable({
  providedIn: 'root'
})
export class UrlShortenerService {
  public data:UrlShort[] = []
  public top:UrlShort[] = []
  constructor(private http: HttpClient) { }

  public getAll(){
    this.http.get<UrlShort[]>(`${environment.uri}/urls/all`).subscribe( (res) => {
      this.data = res
    } )
  }
  public getMostPopularUrls(){
    
    this.http.get<UrlShort[]>(`${environment.uri}/urls/urls`).subscribe( (res) => {
      this.top = res
    } )

  }
  public getLongUrl(short:string){
    
    return this.http.get(`${environment.uri}/urls/${short}`, {responseType:'text'})
  }

  public postUrlShort(urlShort:UrlShort){
    
    return this.http.post(`${environment.uri}/urls/add`, urlShort);
  }
  public moreVisits(newUrlShort:any){
    
    return this.http.put(`${environment.uri}/urls/${newUrlShort.short}`, newUrlShort, {responseType:'text'});
  }
 
}
