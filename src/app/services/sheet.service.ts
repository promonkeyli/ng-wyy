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
   * @desc                               获取歌单
   * @param  { number     }  id          歌单id
   * @param  { Object     }  playlist    歌单详情数据
   * @return { Observable }  playlist    歌单详情数据
   */
  public getSheetDetail(id: number): Observable<SongSheets[]>{
    const params = new HttpParams().set('id',id.toString());
    return this.http.get(this.url + 'playlist/detail',{params})
      .pipe(map((songSheet: any) => songSheet.playlist));
  }
  /**
   * @desc                       描述 pluck操作符可以取出指定的对象，switchMap
   * @param  { Object }  params  参数
   * @return { Object }          返回值
   */
  public PlaySheet(id: number): Observable<Song[]>{
    return this.getSheetDetail(id).pipe(pluck('tracks'), switchMap(tracks => this.songService.getSongList(tracks)))
  }

}
