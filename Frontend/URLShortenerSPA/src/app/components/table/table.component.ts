import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UrlShortenerService } from '../../services/url-shortener.service';
import { UrlShort } from '../../interfaces/urlshort.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  public displayedColumns: string[] = ['visits', 'short', 'url'];
  constructor(public urlService:UrlShortenerService, private router: Router) { }

  ngOnInit(): void {
    
    this.urlService.getUrls()
  }

  public redirectCode(urlshort:any):void{
    const cont = urlshort.visits + 1
    const newUrl = {
      ...urlshort,
      visits:cont,
    }
    console.log(newUrl);
    
    this.urlService.moreVisits(newUrl).subscribe( () => {
      this.urlService.getUrls();
      window.open(newUrl.url)
    } )
    


    // this.urlService.moreVisits(newUrl).subscribe( () => {
    //   // window.location.replace(newUrl.url);
    // } )

    
  }

}
