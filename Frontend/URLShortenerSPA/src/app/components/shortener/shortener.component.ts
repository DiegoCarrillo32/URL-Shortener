
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UrlShortenerService } from 'src/app/services/url-shortener.service';

@Component({
  selector: 'app-shortener',
  templateUrl: './shortener.component.html',
  styleUrls: ['./shortener.component.css']
})
export class ShortenerComponent implements OnInit {



  constructor(
    private formBuilder: FormBuilder,
    private urlService: UrlShortenerService) { }

  ngOnInit(): void {
  }
  
  public urlForm: FormGroup = this.formBuilder.group({
    url: [],
  });

  public sendData(): void {
    
    const urlshort = {
      visits: 0,
      short: 'test',
      url: this.urlForm?.controls.url.value,
    };
    this.urlService.postUrlShort(urlshort).subscribe((res) => {
      this.getData()
      this.urlForm.reset()
      
    });
  }

  public getData() {
    this.urlService.getMostPopularUrls()
    this.urlService.getAll()
  }

}
