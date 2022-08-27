import { Injectable } from '@angular/core';
import {ResponseFrutasI} from '../../modelos/responseFrutas.interface';
import {ResponseVerdurasI} from '../../modelos/responseVerduras.interface';
import {ResponseHortalizasI} from '../../modelos/responseHortalizas.interface';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  //url:string = "http://localhost/esenci/";
  url:string = "https://esenci.000webhostapp.com/esenci/";

  constructor(private http: HttpClient) { }

  getListaFrutas():Observable<ResponseFrutasI[]>{
    let direccion = this.url+'index.php?filter=Frutas';
    return this.http.get<ResponseFrutasI[]>(direccion);
  }

  getListaVerduras():Observable<ResponseVerdurasI[]>{
    let direccion = this.url+'index.php?filter=Verduras';
    return this.http.get<ResponseVerdurasI[]>(direccion);
  }

  getListaHortalizas():Observable<ResponseHortalizasI[]>{
    let direccion = this.url+'index.php?filter=Hortalizas';
    return this.http.get<ResponseHortalizasI[]>(direccion);
  }
}
