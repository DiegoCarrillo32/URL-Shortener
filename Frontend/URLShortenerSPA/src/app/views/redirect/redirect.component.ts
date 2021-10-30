import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UrlShortenerService } from '../../services/url-shortener.service';

@Component({
  selector: 'app-redirect',
  templateUrl: './redirect.component.html',
  styleUrls: ['./redirect.component.css']
})
export class RedirectComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private urlShortener: UrlShortenerService, private router:Router) { }

  ngOnInit(): void {

    const short = this.activatedRoute.snapshot.paramMap.get('shortcode')
    if(short!==null){
      this.urlShortener.getLongUrl(short).subscribe( (res) => {
        window.open(res)
        this.router.navigate(['/urlshortener'])
      } )
    }
  }

}
