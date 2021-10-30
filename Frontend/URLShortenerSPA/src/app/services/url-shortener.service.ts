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

  public getUrls(){
    this.http.get<UrlShort[]>(`${environment.uri}/urls/urls`)
    .subscribe( (res) => {
      this.urlList = res
      this.urlList.sort( (a,b) => {
        return b.visits - a.visits
      } )
      
      
    } )
  }
  public getMostPopularUrls(){
    
    return this.http.get<UrlShort[]>(`${environment.uri}/urls/urls`)

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
 
  // public deleteShortUrl(_id:string){
  //   return this.http.delete(`${environment.uri + '/deleteurl'}`)
  // }
}
