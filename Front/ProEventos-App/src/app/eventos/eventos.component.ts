import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent implements OnInit {

  public eventos: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getEventos();
  }

  public getEventos(): void
  {
    this.http.get(`https://localhost:44366/api/eventos`).subscribe(
      response => this.eventos = response,
      error => console.log(error)
    );

    // this.eventos = [
    //   {
    //       Tema: 'Angular 11',
    //       Local: 'Belo Horizonte'
    //   },
    //   {
    //       Tema: '.NET',
    //       Local: 'Vitória'
    //   },
    //   {
    //       Tema: 'Angular e sua novidades',
    //       Local: 'Vila Velha'
    //   }
    // ];
  }

}
