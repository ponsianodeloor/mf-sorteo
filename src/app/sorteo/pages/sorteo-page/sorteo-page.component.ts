import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {SorteoService} from "../../services/sorteo.service";
import {Sorteo} from "../../interfaces/sorteo";

@Component({
  selector: 'app-sorteo-page',
  templateUrl: './sorteo-page.component.html',
  styleUrl: './sorteo-page.component.css'
})
export class SorteoPageComponent implements OnInit {

  public myForm:FormGroup = new FormGroup({});
  public sorteo?: Sorteo;

  constructor(
    private fb: FormBuilder,
    private sorteoService: SorteoService
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
    const codigo = this.myForm.get('codigo')?.value;
    console.log(codigo);

    this.sorteoService.getSorteoByCodigo(codigo).subscribe(sorteo => {
      console.log(sorteo);
      this.sorteo = sorteo;
    });




  }



}
