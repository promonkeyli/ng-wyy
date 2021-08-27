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
   * @param  { number  }  ids         歌曲id字符（一首或者多首）
   * @return { SongUrl }              歌单内的歌曲数据
   */
  public getSongUrl(ids: string): Observable<SongUrl[]>{
    const params = new HttpParams().set('id',ids);
    return this.http.get(this.url + 'song/url',{params})
      .pipe(map((res: any) => res.data));
  }
  /**
   * @desc                       获取歌曲（一个或者多个）
   * @param  { Object }  songs   歌曲列表（一首或者多首）
   * @return { Object }          歌曲列表
   */
  public getSongList ( songs: Song | Song[]): Observable<Song[]>{
    const songArr = Array.isArray(songs) ? songs.slice(): [songs]; // 数组判断转化
    // 遍历每一首歌曲信息，取得id后用逗号连接id join() 方法用于把数组中的所有元素放入一个字符串。  元素是通过指定的分隔符进行分隔的。
    const ids = songArr.map(v => v.id).join(',');
    return this.getSongUrl(ids).pipe(map(urls => this.generateSongList(songArr,urls)));
  }
  /**
   * @desc                       描述
   * @param  { Object }  params  参数
   * @return { Object }          返回值
   */
  private generateSongList(songs: Song[], urls: SongUrl[]): Song[]{
    const result: Song[] = [];
    songs.forEach(song => {
      const url = urls.find(url => url.id === song.id)?.url;
      if(url){
        result.push({...song, url});
      }
    })
    return result;
  }
}
