import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import { HomeService } from 'src/app/services/home.service';
import { Banners } from '../../services/data-types/common.types';
import {NzCarouselComponent} from "ng-zorro-antd/carousel";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  carouselActiveIndex = 0;
  public banners: Banners[] = [];
  @ViewChild(NzCarouselComponent, {static: true}) private nzCarousel?: NzCarouselComponent;
  constructor(private homeServe: HomeService) {
    this.homeServe.getBanners().subscribe(banners => {
      this.banners = banners;
    });
  }

  ngOnInit() {
  }

  onBeforeChange({ to}:any) {
    this.carouselActiveIndex = to;
  }

  onChangeSlide(type: 'pre' | 'next') {
    // @ts-ignore
    this.nzCarousel[type]();
  }

}
