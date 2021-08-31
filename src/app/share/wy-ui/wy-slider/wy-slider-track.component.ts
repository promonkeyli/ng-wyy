/**
 * @description   播放器进度条组件-总时间进度条
 * @author        Young
 * @date          2021/8/31
 */
import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {sliderStyle} from "./wy-slider-types";

@Component({
  selector: 'app-wy-slider-track',
  template: `<div class="wy-slider-track" [ngStyle]="style"></div>`
})
export class WySliderTrackComponent implements OnInit,OnChanges {
  @Input() sliderVertical = false;           // 进度条垂直与否
  @Input() sliderOffset: number| undefined; // 进度条条的偏移量
  public   style: sliderStyle = {};                         // 进度条样式
  /*********************周期钩子***********************/
  constructor() { }
  ngOnInit(): void {}
  ngOnChanges(changes: SimpleChanges) {
    /*
    * 偏移量改变触发
    * 先判断是否垂直，垂直改变bottom，水平改变left
    * 偏移量设置为百分数
    * */
    if(changes['sliderOffset']){
      if(this.sliderVertical){
        this.style.height = this.sliderOffset + '%';
        this.style.left = null;
        this.style.width = null;
      }else {
        this.style.width = this.sliderOffset + '%';
        this.style.bottom = null;
        this.style.height = null;
      }
    }
  }


}
