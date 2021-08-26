import {Inject, Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {API_CONFIG, ServicesModule} from "./services.module";
import {Song, SongSheets, SongUrl} from "./data-types/common.types";
import {map} from "rxjs/operators";
import {Observable} from "rxjs";


@Injectable({
  providedIn: ServicesModule
})
export class SongService {

  constructor(private http: HttpClient, @Inject(API_CONFIG) private url: string) { }
  /**
   * @desc                            获取多首歌曲的url（可批量获取）
   * @param  { number  }  ids         歌曲id字符
   * @return { SongUrl }              歌单详情数据
   */
  public getSongUrl(ids: string): Observable<SongUrl[]>{
    const params = new HttpParams().set('id',id.toString());
    return this.http.get(this.url + '/song/url',{params})
      .pipe(map((songSheet: any) => songSheet.playlist));
  }
  /**
   * @desc                       获取歌曲（一个或者多个）
   * @param  { Object }  songs   歌曲列表（一首或者多首）
   * @return { Object }          返回值
   */
  public getSongList ( songs: Song | Song[]):Observable<Song[]>{


  }
}
