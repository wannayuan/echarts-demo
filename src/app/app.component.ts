import { Component, OnInit } from '@angular/core';
import { ADItem } from './ad-banner/ad.item';
import {ADService} from './ad-banner/ad.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent implements OnInit {
  title = 'my-app';
  ads: ADItem[];

  constructor(private adService: ADService){}

  ngOnInit() {
    this.ads = this.adService.getAds();
  }
}
