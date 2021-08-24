import {Component, OnInit, TemplateRef, ViewChild, OnChanges, SimpleChanges} from '@angular/core';
import { HomeService } from 'src/app/services/home.service';
import {Banners, HotTags, SongSheets} from '../../services/data-types/common.types';
import {NzCarouselComponent} from "ng-zorro-antd/carousel";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit, OnChanges {
  /*********************参数变量***********************/
  carouselActiveIndex = 0;
  public banners: Array<Banners> = [];
  public hotTags: Array<HotTags> = [];
  public songSheets: Array<SongSheets> = [];
  @ViewChild(NzCarouselComponent, {static: true}) private nzCarousel?: NzCarouselComponent;
  /*********************周期钩子***********************/
  constructor(private homeServe: HomeService) {
    this.getBannersList();
    this.getHotList();
    this.getSheetList();
  }
  ngOnInit() {}
  ngOnChanges(changes: SimpleChanges){}
  /*********************功能函数***********************/
  /**
   * @desc                       走马灯切换面板的回调函数
   * @param  { number }  to      切换后的索引
   * @return { void }            无返回值
   */
  onBeforeChange({ to}:any) {
    this.carouselActiveIndex = to;
  }
  /**
   * @desc                            走马灯的左右箭头父组件响应函数
   * @param  { string }  type         切换的箭头类型
   * @param  { Object }  nzCarousel   走马灯dom引用，用于调用组件内的切换方法
   */
  onChangeSlide(type: 'pre' | 'next') {
    // @ts-ignore
    this.nzCarousel[type]();
  }
  /**
   * @desc                       获取轮播图数据函数
   * @param  { Object }  banners 轮播图数组接收参数
   * @return { void }            无返回值
   */
  private getBannersList(): void{
    this.homeServe.getBanners().subscribe(banners => this.banners = banners);
  }
  /**
   * @desc                       获取热门歌单数据函数
   * @param  { Object }  tags    热门歌单数组接收参数
   * @return { void }            无返回值
   */
  private getHotList(): void{
    this.homeServe.getHotTags().subscribe(tags => this.hotTags = tags);
  }
  /**
   * @desc                          获取推荐歌单数据函数
   * @param  { Object }  songSheets 推荐歌单数组接收参数
   * @return { void }               无返回值
   */
  private getSheetList(): void{
    this.homeServe.getPersonalizedSongs().subscribe(songSheets => this.songSheets =songSheets);
  }

}
