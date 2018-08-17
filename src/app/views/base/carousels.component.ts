import { Component } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  templateUrl: 'carousels.component.html',   providers: [
    { provide: CarouselConfig, useValue: { interval: 1500, noPause: true } }
  ]
})
export class CarouselsComponent {

  myInterval: Number = 6000;
  slides: any[] = [];
  activeSlideIndex: Number = 0;
  noWrapSlides: Boolean = false;

  constructor() {
    for (let i = 0; i < 4; i++) {
      this.addSlide();
    }
  }

  addSlide(): void {
    this.slides.push({
      image: `https://lorempixel.com/900/500/sports/${this.slides.length % 8 + 1}/`
    });
  }

  removeSlide(index?: number): void {
    const toRemove = index ? index : this.activeSlideIndex;
  //  this.slides.splice(toRemove, 1);
  }

}
