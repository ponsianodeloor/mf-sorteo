import {Component, OnInit} from '@angular/core';
import {CategoryService} from "../../services/category.service";
import {Category} from "../../interfaces/category";

@Component({
  selector: 'app-sorteo-categories-table',
  templateUrl: './categories-table.component.html',
  styleUrl: './categories-table.component.css'
})
export class CategoriesTableComponent implements OnInit {

  categories: Category[] = [];
  displayedColumns: string[] = ['codigo', 'equidad', 'estado', 'nombre', 'requiereCuantia', 'orden'];

  constructor(
    private categoryService: CategoryService
  ) {
  }

  ngOnInit(): void {
    this.categoryService.getSorteoCategoriaByEstado('ACT')
      .subscribe(categories => this.categories = categories);
  }

}
