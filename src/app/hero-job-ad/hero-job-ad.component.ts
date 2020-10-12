import { Component, OnInit, Input } from '@angular/core';
import { ADComponent } from '../ad-banner/ad.component';

@Component({
  selector: 'app-hero-job-ad',
  templateUrl: './hero-job-ad.component.html',
  styleUrls: ['./hero-job-ad.component.less'],
})
export class HeroJobAdComponent implements ADComponent, OnInit {

  @Input() data: any;
  constructor() {}

  ngOnInit(): void {}
}
