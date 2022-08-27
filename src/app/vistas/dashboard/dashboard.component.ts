import { Component, OnInit } from '@angular/core';
import { ApiService } from "../../servicios/api/api.service";
import {Router} from "@angular/router";

import {ResponseFrutasI} from '../../modelos/responseFrutas.interface';
import {ResponseVerdurasI} from '../../modelos/responseVerduras.interface';
import {ResponseHortalizasI} from '../../modelos/responseHortalizas.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  listaFrutas: ResponseFrutasI[] = [];
  listaVerduras: ResponseVerdurasI[] = [];
  listaHortalizas: ResponseHortalizasI[] = [];

  constructor(private api: ApiService, private router: Router) { }

  ngOnInit(): void {
    try {
      this.api.getListaFrutas().subscribe(data=>{
        this.listaFrutas=data;
      });

      this.api.getListaVerduras().subscribe(data=>{
        this.listaVerduras=data;
      });

      this.api.getListaHortalizas().subscribe(data=>{
        this.listaHortalizas=data;
      });
    } catch (error) {
      console.log(error);
    }
  }

  priceFormat(value:string){
    if(value=='0'){
      return '-';
    }else{
      const formatterPeso = new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 0
      })
      return formatterPeso.format(parseInt(value));
    }
  }

}
