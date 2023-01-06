import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {
  public precio: number = 0;
  public descripcion: string = '';
  public id: number = 0;
  public titulo: string = '';
  constructor(
    private activa: ActivatedRoute
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter(){


    this.activa.queryParams.subscribe(parametros => {
      this.precio = parametros['0']
      this.descripcion = parametros['1']
      this.id = parametros['2']

    })



    this.activa.params.subscribe( parametros => {
      this.titulo = parametros['titulo']
    })



  }

}
