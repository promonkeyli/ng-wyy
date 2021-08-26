/**
 * @description   歌单组件
 * @author        Young
 * @date          2021/8/26
 */
import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-single-sheet',
  templateUrl: './single-sheet.component.html',
  styleUrls: ['./single-sheet.component.less']
})
export class SingleSheetComponent implements OnInit {
  /*********************参数变量***********************/
  @Input() sheet: any;
  @Output() sheetClickOuter = new EventEmitter<number>();
  /*********************钩子函数***********************/
  constructor() { }
  ngOnInit(): void {}
  /*********************功能函数***********************/
  /**
   * @desc                       歌单图标点击事件响应函数
   * @param  { string }  id      歌单id
   * @return { void   }          无返回值
   */
  public sheetClick(id: number): void{
    this.sheetClickOuter.emit(id);
  }

}
