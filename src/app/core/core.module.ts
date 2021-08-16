import {NgModule, Optional, SkipSelf} from '@angular/core';
import {CommonModule, registerLocaleData} from '@angular/common';
import {BrowserModule} from "@angular/platform-browser";
import {AppRoutingModule} from "../app-routing.module";
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ServicesModule} from "../services/services.module";
import {PagesModule} from "../pages/pages.module";
import {ShareModule} from "../share/share.module";
import en from "@angular/common/locales/en";
import {en_US, NZ_I18N} from "ng-zorro-antd/i18n";

registerLocaleData(en);

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ServicesModule,
    PagesModule,
    ShareModule,
    AppRoutingModule
  ],
  exports:[
    ShareModule,
    AppRoutingModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
})
export class CoreModule {
  // 自己注入自己
  constructor(@SkipSelf() @Optional() parentModule: CoreModule) {
    if (parentModule){
      throw new Error('CoreModule只能被AppModule引入')
    }
  }
}
