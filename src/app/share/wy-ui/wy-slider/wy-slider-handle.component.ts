/**
 * @description   播放器缓存进度条
 * @author        Young
 * @date          2021/8/31
 */
import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {sliderStyle} from "./wy-slider-types";

@Component({
  selector: 'app-wy-slider-handle',
  template: `<div class="wy-slider-handle" [ngStyle]="style"></div>`
})
export class WySliderHandleComponent implements OnInit,OnChanges{
/*********************参数变量***********************/
  @Input() sliderVertical = false;           // 进度条垂直与否
  @Input() sliderOffset: number | undefined; // 缓存条的偏移量
  public style: sliderStyle = {};                         // 缓存条样式
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
      this.style[this.sliderVertical ? 'bottom': 'left'] = this.sliderOffset + '%';
    }
  }


}
