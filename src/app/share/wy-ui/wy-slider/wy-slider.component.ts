/**
 * @description   播放器滑块组件封装
 * @author        Young
 * @date          2021/8/31
 */
/*
* 进度条逻辑：track进度条显示的是总时间，handle显示的是缓存的进度
* 水平：track组件：改变width  handle组件：改变left
* 垂直：track组件：改变height handle组件：改变bottom
* */
import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-wy-slider',
  templateUrl: './wy-slider.component.html',
  styleUrls: ['./wy-slider.component.less'],
  encapsulation: ViewEncapsulation.None // 视图封装模式 默认样式只进不出
})
export class WySliderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
