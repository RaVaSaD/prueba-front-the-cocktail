import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public stars: any[];
  public regimenes: ICardConfig[];
  public regimenModal: ICardConfig;

  constructor() { }

  ngOnInit() {
    this.stars = [
      { path : 'assets/img/star-orange.svg'},
      { path : 'assets/img/star-orange.svg'},
      { path : 'assets/img/star-orange.svg'},
      { path : 'assets/img/star-orange.svg'},
      { path : 'assets/img/star-orange.svg'}
    ];

    this.regimenes = [
      {
        title : 'Solo Alojamiento',
        options: [
          'Sin regimen',
          'Botella de agua de bienvenida'
        ]
      },
      {
        title : 'Alojamiento y Desayuno',
        options: [
          'Desayuno buffet completo'
        ]
      },
      {
        title : 'Media Pensión',
        options: [
          'Desayuno buffet completo',
          'Cena buffet',
          'No incluye'
        ]
      },
      {
        title : 'Todo incluido',
        options: [
          'Dispondrás de comida y bebida todo el día y durante toda tu estancia.',
          'Restaurante buffet',
          'Snack Bar',
          'Servicio de Bares'
        ]
      },
      {
        title : 'Unlimited Services',
        options: [
          'Restaurante buffet con bebdidas Premium',
          'Restaurante a la carta (una cena por estancia)',
          'Snack Bar con bebidas Premium',
          'Minibar incluido',
          'Acceso a SPA y 45 minutos de masaje por persona',
          'Actividades deportivas (acuáticas sin motor)',
          'Caja Fuerte',
          'Parking Gratuito',
          'Lavandería'
        ]
      }
    ];
  }

  public verRegimen(_regimen) {
    this.regimenModal = _regimen;
  }

}

export interface ICardConfig {
  title: string;
  options: string[];
}
