import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Personaje } from 'src/app/models/Personaje';
import { ShareDataService } from 'src/app/services/share-data.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {
  dataSource = new MatTableDataSource(new Array<Personaje>());
  displayedColumns = ['id', 'nombre', 'compania']
  constructor(private share: ShareDataService) { }

  ngOnInit(): void {
    this.share.currentlistadoPersonaje.subscribe(listado => {
      console.log("Entro al listado");
      console.log(listado);
      this.dataSource.data = listado;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
