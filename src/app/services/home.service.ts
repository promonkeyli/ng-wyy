import {Inject, Injectable} from '@angular/core';
import {API_CONFIG, ServicesModule} from "./services.module";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Banners} from "./data-types/common.types";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: ServicesModule
})
export class HomeService {

  constructor(private http: HttpClient, @Inject(API_CONFIG) private url: string) { }
  /**获取轮播图数据**/
  public getBanners(): Observable<Banners[]>{
    return this.http.get(this.url + 'banner')
      .pipe(map((res:any) => res.banners));
  }
}
