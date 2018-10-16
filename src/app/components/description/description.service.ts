import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DescriptionService {

  constructor() { }

  public getDescription() {
    return [
      {
        title:  'Mejora tu Estancia',
        items : [
          {
            subtitle: 'Olvídese de la rutina',
            image: 'assets/img/rutina.png',
            text: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.'
          },
          {
            subtitle: 'Experiencias y Programas SPA con agua',
            image: 'assets/img/experiencia.png',
            text: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.'
          }
        ]
      },
      {
        title:  'Servicios de Habitación',
        items : [
          {
            subtitle: 'Olvídese de la rutina',
            image: 'assets/img/rutina.png',
            text: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.'
          },
          {
            subtitle: 'Experiencias y Programas SPA con agua',
            image: 'assets/img/experiencia.png',
            text: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.'
          }
        ]
      }
    ];
  }
}
