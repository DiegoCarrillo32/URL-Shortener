import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { switchMap } from "rxjs/operators";
import { UrlShortenerService } from '../../services/url-shortener.service';
@Component({
  selector: 'app-linkshortener',
  templateUrl: './linkshortener.component.html',
  styleUrls: ['./linkshortener.component.css']
})
export class LinkshortenerComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
    const local = localStorage.getItem("session")
    if(local !== "on"){
      this.router.navigate(['/'])
    }
    

    
    

  }

}
