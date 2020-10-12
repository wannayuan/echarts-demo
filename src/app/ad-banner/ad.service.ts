import { Injectable } from '@angular/core';
import { HeroProfileComponent } from '../hero-profile/hero-profile.component';
import { HeroJobAdComponent } from '../hero-job-ad/hero-job-ad.component';
import { ADItem } from './ad.item';

@Injectable()
export class ADService {
  getAds() {
    return [
      new ADItem(HeroProfileComponent, {
        name: 'Bombasto',
        bio: 'Brave as they come',
      }),
      new ADItem(HeroProfileComponent, {
        name: 'DR IQ',
        bio: 'Smart as they come',
      }),
      new ADItem(HeroJobAdComponent, {
        headline: 'Hiring for several positions',
        body: 'Submit your resume today!',
      }),
      new ADItem(HeroJobAdComponent, {
        headline: 'Opening in all departments',
        bio: 'Apply today',
      })
    ];
  }
}
