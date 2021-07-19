import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UserInterface } from './interfaces/persona';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit, OnDestroy {
  title = 'Hola Mundo';
  fecha = new Date();

  array = ['Javier', 'Jorge', 'Kike'];

  arrayObj: UserInterface[] = [
    {
      nombre: 'Javier',
      edad: 24,
      sexo: 'm'
    },
    {
      nombre: 'Jorge',
      edad: '30',
      sexo: 'm'
    },
    {
      nombre: 'Kike',
      sexo: 'm'
    }
  ];

  // @Input() title: string = 'Hola Mundo';

  ngOnInit() {
    // this.despedir();
  }

  ngOnDestroy() {

  }

  despedir() {
    this.title = 'Chau Mundo';
  }
}
