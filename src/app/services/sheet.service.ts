import {Inject, Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {API_CONFIG, ServicesModule} from "./services.module";
import {Song, SongSheets} from "./data-types/common.types";
import {map, pluck, switchMap} from "rxjs/operators";
import {Observable} from "rxjs";
import {SongService} from "./song.service";


@Injectable({
  providedIn: ServicesModule
})
export class SheetService {

  constructor(private http: HttpClient,
              @Inject(API_CONFIG) private url: string,
              private songService: SongService ) { }
  /**
   * @desc                               获取歌单详情
   * @param  { number     }  id          歌单id
   * @param  { Object     }  playlist    歌单详情数据
   * @return { Observable }  playlist    歌单详情数据
   */
  public getSheetDetail(id: number): Observable<SongSheets>{
    const params = new HttpParams().set('id',id.toString());
    return this.http.get(this.url + 'playlist/detail',{params})
      .pipe(map((res: any) => {
        return res.playlist
      }))
  }
  /**
   * @desc                       调用歌单详情接口，取出tracks数组（歌单中包含的歌曲信息）
   * @param  { number }  id      歌单id
   * @return { Array  }          歌单内的歌曲数组
   */
  public playSheet(id: number): Observable<Song[]>{
    return this.getSheetDetail(id)
      .pipe(
        pluck('tracks'),// 将playlist对象下的tracks映射到observable
        switchMap((tracks: any) => this.songService.getSongList(tracks))
      )
  }

}
