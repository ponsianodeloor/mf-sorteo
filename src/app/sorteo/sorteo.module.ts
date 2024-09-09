import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SorteoRoutingModule } from './sorteo-routing.module';
import { SorteoPageComponent } from './pages/sorteo-page/sorteo-page.component';
import { SorteoCategoryPageComponent } from './pages/category/sorteo-category-page/sorteo-category-page.component';
import { SorteoCategoryAddPageComponent } from './pages/category/sorteo-category-add-page/sorteo-category-add-page.component';


@NgModule({
  declarations: [
    SorteoPageComponent,
    SorteoCategoryPageComponent,
    SorteoCategoryAddPageComponent,
  ],
  imports: [
    CommonModule,
    SorteoRoutingModule
  ]
})
export class SorteoModule { }
