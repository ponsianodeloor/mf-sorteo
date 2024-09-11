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

  private endpointPostCreateOrUpdateSorteoCategoria:string =
    environment.ENDPOINT_POST_CREATE_OR_UPDATE_SORTEO_CATEGORIA;

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

  createOrUpdateSorteoCategoria(category:Category):Observable<Category>{
    return this.http.post<Category>(`${this.serverPesnot}${this.microservicePesnotActo}${this.endpointPostCreateOrUpdateSorteoCategoria}`, category);
  }


}
