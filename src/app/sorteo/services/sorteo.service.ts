import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {Sorteo} from "../interfaces/sorteo";
import {catchError, Observable, of} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SorteoService {

  private serverPesnot:string = environment.SERVER_PESNOT;
  private microservicePesnotActo:string = environment.MICROSERVICE_PESNOT_ACTO;
  private endpointGetSorteoByCodigo:string = environment.ENDPOINT_GET_SORTEO_BY_CODIGO;

  public sorteo: Sorteo = {
    idSorteo: 0,
    alias: '',
    codigoSorteo: '',
    cuantia: 0,
    nombreContrato: '',
    numeroDocumento: '',
    numeroFojas: 0,
    idCategoria: 0
  };

  constructor(
    private http: HttpClient
  ) { }

  getSorteoByCodigo(codigo:string):Observable<Sorteo | undefined>{
    return this.http.get<Sorteo>(`${this.serverPesnot}${this.microservicePesnotActo}${this.endpointGetSorteoByCodigo}/${codigo}`)
      .pipe(
        catchError(err => of(undefined))
      );
  }
}
