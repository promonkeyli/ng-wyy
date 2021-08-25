import {Inject, Injectable} from '@angular/core';
import {API_CONFIG, ServicesModule} from "./services.module";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Singer} from "./data-types/common.types";
import {SingerParams} from "./data-types/params.types";
import {map} from "rxjs/operators";
// @ts-ignore
import * as queryString from "querystring";

// 默认请求参数
const defaultParams: SingerParams = {
  offset: 0,
  limit: 9
}
@Injectable({
  providedIn: ServicesModule
})
export class SingerService {

  constructor(private http: HttpClient, @Inject(API_CONFIG) private url: string) { }
  /**
   * @desc                       获取歌手数组
   * @param  { Array  }  artists 歌手数组
   * @param  { Object }  args    请求参数
   * @return { Array }  artists  返回歌手数组
   */
  public getEnterSinger(args: SingerParams = defaultParams): Observable<Singer[]>{
    const params = new HttpParams({fromString: queryString.stringify(args)});
    return this.http.get(this.url + 'artist/list', { params })
      .pipe(map((res:any) => res.artists));
  }
}
