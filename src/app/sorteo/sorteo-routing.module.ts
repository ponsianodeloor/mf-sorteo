import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SorteoCategoryPageComponent} from "./pages/category/sorteo-category-page/sorteo-category-page.component";
import {
  SorteoCategoryAddPageComponent
} from "./pages/category/sorteo-category-add-page/sorteo-category-add-page.component";

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'all', component: SorteoCategoryPageComponent },
      { path: 'categories', component: SorteoCategoryPageComponent },
      { path: 'categories/add', component: SorteoCategoryAddPageComponent},
      { path: '**', redirectTo: 'all' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SorteoRoutingModule { }
