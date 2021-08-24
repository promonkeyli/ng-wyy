import {Inject, Injectable} from '@angular/core';
import {API_CONFIG, ServicesModule} from "./services.module";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Banners, HotTags, SongSheets} from "./data-types/common.types";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: ServicesModule
})
export class HomeService {

  constructor(private http: HttpClient, @Inject(API_CONFIG) private url: string) { }
  /**
   * @desc                       获取轮播图数组
   * @param  { Array }  banners  轮播图数组
   * @return { Array }  banners  返回轮播图数组
   */
  public getBanners(): Observable<Banners[]>{
    return this.http.get(this.url + 'banner')
      .pipe(map((res:any) => res.banners));
  }
  /**
   * @desc
   * @param  { Array }      tags     热门歌单数组
   * @return { Observable } tabs     Observable的歌单数组
   */
  public getHotTags(): Observable<HotTags[]>{
    return this.http.get(this.url + 'playlist/hot')
      .pipe(map((res: any) => res.tags.sort((x: HotTags, y: HotTags)=> x.position - y.position).slice(0, 5)) );
  }
  /**
   * @desc
   * @param  { Array }      SongSheets     推荐歌单数组
   * @return { Observable } songSheet      Observable推荐噶扽数组
   */
  public getPersonalizedSongs(): Observable<SongSheets[]>{
    return this.http.get(this.url + 'personalized')
      .pipe(map((songSheet: any) => songSheet.result));
  }
}
