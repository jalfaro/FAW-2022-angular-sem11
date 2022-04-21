import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Personaje } from 'src/app/models/Personaje';
import { ShareDataService } from 'src/app/services/share-data.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {
  formGroup: FormGroup = new FormGroup({})
  listado = new Array<Personaje>();
  constructor(private fb: FormBuilder,
      private share: ShareDataService,
      private router: Router) {
    this.formGroup = this.fb.group({
        id: '',
        nombre: '',
        compania: '',
        imagen: ''
    })
   }

  ngOnInit(): void {
  }

  borrarFormulario() {
    this.formGroup.patchValue({
      id: '',
      nombre: '',
      compania: '',
      imagen: ''
    })
  }
  guardarPersonaje() {
    this.listado.push(new Personaje(
      this.formGroup.controls['id'].value,
      this.formGroup.controls['nombre'].value,
      this.formGroup.controls['compania'].value,
      this.formGroup.controls['imagen'].value
    ))
    console.log(this.listado);
    this.borrarFormulario()
    this.share.setListadoPersonaje(this.listado);
  }

  verListado() {
    this.router.navigateByUrl('/listado');
  }
}
