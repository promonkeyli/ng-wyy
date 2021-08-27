import {Component, OnInit, TemplateRef, ViewChild, OnChanges, SimpleChanges} from '@angular/core';
import {Banners, HotTags, Singer, SongSheets} from '../../services/data-types/common.types';
import {NzCarouselComponent} from "ng-zorro-antd/carousel";
import {ActivatedRoute} from "@angular/router";
import {map} from "rxjs/operators";
import {SheetService} from "../../services/sheet.service";


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
  public singers: Array<Singer> = [];
  @ViewChild(NzCarouselComponent, {static: true}) private nzCarousel?: NzCarouselComponent;
  /*********************周期钩子***********************/
  constructor(private route: ActivatedRoute,
              private sheetService: SheetService) {
  }
  ngOnInit() {
    // 路由解析守卫
    this.route.data.pipe(map(res => res.HomeDatas))
      .subscribe(([banners,hotTags,songSheets,singers]) => {
        this.banners = banners;
        this.hotTags = hotTags;
        this.songSheets = songSheets;
        this.singers = singers;
      });
  }
  ngOnChanges(changes: SimpleChanges){}
  /*********************功能函数***********************/
  /**
   * @desc                       走马灯切换面板的回调函数
   * @param  { number }  to      切换后的索引
   * @return { void }            无返回值
   */
  public onBeforeChange({ to}:any) {
    this.carouselActiveIndex = to;
  }
  /**
   * @desc                            走马灯的左右箭头父组件响应函数
   * @param  { string }  type         切换的箭头类型
   * @param  { Object }  nzCarousel   走马灯dom引用，用于调用组件内的切换方法
   */
  public onChangeSlide(type: 'pre' | 'next') {
    // @ts-ignore
    this.nzCarousel[type]();
  }
  /**
   * @desc                               歌单点击播放按钮事件响应函数
   * @param     { number   }  id         歌单id
   * @function  { function }  playSheet  根据歌单id查里面每一首哥的播放地址，然年添加到tracks原数组里，再返回歌曲数组（包含播放地址的）
   * @return    { void     }             无返回值
   */
  public sheetClick(id: number): void{
    this.sheetService.playSheet(id).subscribe((res: any) => {
      console.log(res, 'res');
    })
  }

}
