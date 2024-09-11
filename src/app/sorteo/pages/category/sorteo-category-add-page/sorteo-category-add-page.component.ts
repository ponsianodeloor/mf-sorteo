import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {CategoryService} from "../../../services/category.service";

@Component({
  selector: 'app-sorteo-category-add-page',
  templateUrl: './sorteo-category-add-page.component.html',
  styleUrl: './sorteo-category-add-page.component.css'
})
export class SorteoCategoryAddPageComponent implements OnInit {

  @Output() categorySaved = new EventEmitter<void>();

  categoryForm: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private categoryService: CategoryService
  ) {
    this.categoryForm = this.fb.group({
      codigo: ['', Validators.required],
      equidad: [1, [Validators.required, Validators.min(0)]],
      estado: ['', Validators.required],
      nombre: ['', Validators.required],
      requiereCuantia: [0, [Validators.required, Validators.min(0)]],
      iCategoriaPadre: [],
      orden: [0, [Validators.required, Validators.min(0)]]
    });
  }

  ngOnInit(): void {}

  saveCategory() {
    if (this.categoryForm.invalid) {
      return;
    }
    this.categoryService.createOrUpdateSorteoCategoria(this.categoryForm.value)
      .subscribe(category => {
        console.log(category);
        this.categorySaved.emit();
      });
  }

  isFieldValid(field: string) {
    return !this.categoryForm.get(field)?.valid && this.categoryForm.get(field)?.touched;
  }

}
