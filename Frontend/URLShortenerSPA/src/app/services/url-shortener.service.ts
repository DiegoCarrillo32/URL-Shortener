import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { UrlShort } from '../interfaces/urlshort.interface';
@Injectable({
  providedIn: 'root'
})
export class UrlShortenerService {
  public urlList: UrlShort[] = [];
  constructor(private http: HttpClient) { }

  public getMostPopularUrls(){
    
    this.http.get<UrlShort[]>(`${environment.uri}/urls/urls`).subscribe( (res) => {
      this.urlList = res;
    } )

  }
  public getLongUrl(short:string){
    console.log("Desde el servicio", short);
    
    return this.http.get(`${environment.uri}/urls/${short}`, {responseType:'text'})
  }

  public postUrlShort(urlShort:UrlShort){
    console.log("Desde el servicio", urlShort);
    
    return this.http.post(`${environment.uri}/urls/add`, urlShort);
  }
  public moreVisits(newUrlShort:any){
    console.log("Desde el servicio", newUrlShort);
    
    return this.http.put(`${environment.uri}/urls/${newUrlShort.short}`, newUrlShort, {responseType:'text'});
  }
 
}
