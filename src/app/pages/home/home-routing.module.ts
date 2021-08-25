import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home.component";
import {HomeResolveService} from "./home-resolve.service";

const routes: Routes = [
  {path: 'home', component: HomeComponent, data: { title: '发现' },resolve:{HomeDatas: HomeResolveService}}
];

@NgModule({
  providers:[HomeResolveService],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
