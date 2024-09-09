import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-sorteo-page',
  templateUrl: './sorteo-page.component.html',
  styleUrl: './sorteo-page.component.css'
})
export class SorteoPageComponent implements OnInit {

  public myForm:FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      codigo: ['', [Validators.required]]
    });
  }

  isFieldValid(field: string) {
    return !this.myForm.get(field)?.valid && this.myForm.get(field)?.touched;
  }

  findByCode() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }
    console.log(this.myForm.value);
  }



}
