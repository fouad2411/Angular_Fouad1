import { Component, OnInit } from '@angular/core';
import { ColoresService } from '../colores.service';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-listado-colores',
  templateUrl: './listado-colores.component.html',
  styleUrls: ['./listado-colores.component.css']
})
export class ListadoColoresComponent implements OnInit {
  constructor( private http: ColoresService) {}
  listadoColores: string [] = [];

  ngOnInit(): void {

    this.http.listarColores().subscribe((data:String ) => {
      this.listadoColores = data.split(',');


    });
  }
}
