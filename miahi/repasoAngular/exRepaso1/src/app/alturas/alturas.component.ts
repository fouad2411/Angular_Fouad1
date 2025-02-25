import { Component } from '@angular/core';
import { Alturas } from '../alturas';
import { ListadosServiceService } from '../listados-service.service';

@Component({
  selector: 'app-alturas',
  templateUrl: './alturas.component.html',
  styleUrls: ['./alturas.component.css']
})
export class AlturasComponent {
  alturas: Alturas[] = [];

  constructor(private http: ListadosServiceService) {}

  ngOnInit() {
    this.http.leerAlturas().subscribe((al: Alturas[]) => {
      this.alturas = al;
    });
  }
}
