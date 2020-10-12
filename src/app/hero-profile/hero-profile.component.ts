import { Component, OnInit, Input } from '@angular/core';
import { ADComponent } from '../ad-banner/ad.component';

@Component({
  selector: 'app-hero-profile',
  templateUrl: './hero-profile.component.html',
  styleUrls: ['./hero-profile.component.less'],
})
export class HeroProfileComponent implements ADComponent, OnInit {

  @Input() data: any;
  constructor() {}

  ngOnInit(): void {}
}
