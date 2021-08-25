import {Injectable} from "@angular/core";
import {Resolve} from "@angular/router";
import {Banners, HotTags, Singer, SongSheets} from "../../services/data-types/common.types";
import {forkJoin, Observable} from "rxjs";
import {HomeService} from "../../services/home.service";
import {SingerService} from "../../services/singer.service";
import {first, take} from "rxjs/operators";

/*homeDatas类型*/
type HomeDataType = [Banners[], HotTags[], SongSheets[], Singer[]];

@Injectable()
export class HomeResolveService implements  Resolve<HomeDataType>{
  constructor(private hs: HomeService,
              private ss: SingerService) {}
  resolve(): Observable<HomeDataType> {
   // forkJoin 类似 promise All ,first 表示只取第一次返回的结果
   return  forkJoin([
     this.hs.getBanners(),
     this.hs.getHotTags(),
     this.hs.getPersonalizedSongs(),
     this.ss.getEnterSinger()
   ]).pipe(first())
  }
}
