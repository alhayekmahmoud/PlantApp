import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  slideOpts={
    slidesPeriew:2.2,
  };
  slidesOpts1={
    slidesPerview:1.3,
  };
  populerItems:any[]=[];
  featuredItems:any[]=[];

  constructor(private apiService:ApiService) { }

  ngOnInit() {
    this.populerItems= this.apiService.item;
    this.featuredItems= this.apiService.item;
  }

}
