import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {Category} from "../interfaces/category";
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private serverPesnot:string = environment.SERVER_PESNOT;
  private microservicePesnotActo:string = environment.MICROSERVICE_PESNOT_ACTO;
  private endpointGetSorteoByCategoria:string = environment.ENDPOINT_GET_SORTEO_BY_CATEGORIA;
  private byEstado:string = environment.BY_ESTADO;

  category: Category[] = [];

  constructor(
    private http: HttpClient
  ) { }

  getSorteoCategoriaByEstado(estado:string):Observable<Category[] | []>{
    return this.http.get<Category[]>(`${this.serverPesnot}${this.microservicePesnotActo}${this.endpointGetSorteoByCategoria}${this.byEstado}/${estado}`)
      .pipe(
        catchError(err => of([]))
      );
  }
}
