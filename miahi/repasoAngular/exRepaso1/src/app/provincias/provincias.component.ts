import { Component, OnInit } from '@angular/core';
import { ListadosServiceService } from '../listados-service.service';
import { Provincias } from '../provincias';

@Component({
  selector: 'app-provincias',
  templateUrl: './provincias.component.html',
  styleUrls: ['./provincias.component.css']
})
export class ProvinciasComponent implements OnInit {
  provincias: Provincias[] = [];

  constructor(private http: ListadosServiceService) {}

  ngOnInit() {
    this.http.leerProvincias().subscribe((pro: Provincias[]) => {
      this.provincias = pro;
    });
  }
}
