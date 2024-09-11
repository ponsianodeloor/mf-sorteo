import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SorteoRoutingModule } from './sorteo-routing.module';
import { SorteoPageComponent } from './pages/sorteo-page/sorteo-page.component';
import { SorteoCategoryPageComponent } from './pages/category/sorteo-category-page/sorteo-category-page.component';
import { SorteoCategoryAddPageComponent } from './pages/category/sorteo-category-add-page/sorteo-category-add-page.component';
import {MaterialModule} from "../material/material.module";
import {ReactiveFormsModule} from "@angular/forms";
import { CategoriesTableComponent } from './components/categories-table/categories-table.component';
import {MatTable} from "@angular/material/table";


@NgModule({
  declarations: [
    SorteoPageComponent,
    SorteoCategoryPageComponent,
    SorteoCategoryAddPageComponent,
    CategoriesTableComponent,
  ],
  imports: [
    CommonModule,
    SorteoRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    MatTable
  ]
})
export class SorteoModule { }
