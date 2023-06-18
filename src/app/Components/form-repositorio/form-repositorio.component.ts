import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { FormsService } from 'src/app/Services/forms.service';
import Swal from 'sweetalert2';
import { ApiService } from 'src/app/Services/api.service';


@Component({
  selector: 'app-form-repositorio',
  templateUrl: './form-repositorio.component.html',
  styleUrls: ['./form-repositorio.component.css']
})
export class FormRepositorioComponent implements OnInit {
  FormRepositorio = this.fb.group({
    Fecha: [null, Validators.required],
    IdUsuario: [null, Validators.required],
    Acceso: [null, Validators.required],
    Ambiente: [null, Validators.required],
    Servidor: [null, Validators.required],
    NombreAcceso: [null, Validators.required],
    Usuario: [null, Validators.required],
    Contraseña: [null, Validators.required],
    RutaAcceso: [null, Validators.required],
    DetalleRegistro: [null, Validators.required],

  });

 

  Acceso = [
    {name: 'Pagina Web', abbreviation: 'PW'},
    {name: 'Servidor', abbreviation: 'SER'},
    {name: 'Aplicacion', abbreviation: 'APL'},
    {name: 'Ruta Intranet', abbreviation: 'RI'},
    {name: 'Instacia base de datos', abbreviation: 'IBD'}
    
  ];

  Ambiente = [
    {name: 'Desarrollo', abbreviation: 'DES'},
    {name: 'Pruebas', abbreviation: 'PRU'},
    {name: 'Produccion', abbreviation: 'PRO'}
  ];

  Servidor = [
    {name: 'Propio del provedor'},
    {name: 'ServerPROContable'},
    {name: 'ServerPROContable'},
    {name: 'ServerPROOnix'},
    {name: 'ServerDesSa1'},
    {name: 'ServerDesSa2'},
    {name: 'ServerPruebasSQL'}
  ];

  Detalle = [
    {name: 'Registro Nuevo', abbreviation: 'RN'},
    {name: 'Retirado', abbreviation: 'Rt'},
    {name: 'Modificacion de Registro', abbreviation: 'MR'}
  ];

  
  constructor(private fb: FormBuilder, public forms: FormsService, public Api: ApiService) {}

  ngOnInit(): void {
    this.forms.component.subscribe((res)=>{
      if(res==="Repositorios"){
        this.FormRepositorio.setControl("Fecha", new FormControl(this.forms.object.fechaCreacionRegistro))
        this.FormRepositorio.setControl("IdUsuario", new FormControl(this.forms.object.nombres))
        this.FormRepositorio.setControl("Acceso", new FormControl(this.forms.object.acceso))
        this.FormRepositorio.setControl("Ambiente", new FormControl(this.forms.object.ambiente))
        this.FormRepositorio.setControl("Servidor", new FormControl(this.forms.object.servidor))
        this.FormRepositorio.setControl("NombreAcceso", new FormControl(this.forms.object.nombreAcceso))
        this.FormRepositorio.setControl("Usuario", new FormControl(this.forms.object.usuario))
        this.FormRepositorio.setControl("Contraseña", new FormControl(this.forms.object.contraseña))
        this.FormRepositorio.setControl("RutaAcceso", new FormControl(this.forms.object.rutaAcceso))
        this.FormRepositorio.setControl("DetalleRegistro", new FormControl(this.forms.object.detalleRegistro))
      }
    });
  }

  edit(): void {

    interface EditRepositorio{
      idRepositorio: string;
      fechaCreacionRegistro: string;
      nombres: string;
      apellidos: string;
      documento: string;
      acceso: string;
      ambiente: string;
      servidor: string;
      nombreAcceso: string;
      usuario: string;
      contraseña: string;
      rutaAcceso: string;
      detalleRegistro: string;
      estado:String;
    }

    this.forms.component.subscribe((res)=>{
      this.forms.object.fechaCreacionRegistro=this.FormRepositorio.get('Fecha').value
      this.forms.object.nombreAcceso=this.FormRepositorio.get('NombreAcceso').value
      this.forms.object.usuario=this.FormRepositorio.get('Usuario').value
      this.forms.object.contraseña=this.FormRepositorio.get('Contraseña').value
      this.forms.object.rutaAcceso=this.FormRepositorio.get('RutaAcceso').value
      this.forms.object.acceso=this.FormRepositorio.get('Acceso').value
      this.forms.object.ambiente=this.FormRepositorio.get('Ambiente').value
      this.forms.object.servidor=this.FormRepositorio.get('Servidor').value
      this.forms.object.detalleRegistro=this.FormRepositorio.get('DetalleRegistro').value


      const editRepositorio: EditRepositorio = {
        idRepositorio: this.forms.object.idRepositorio,
        fechaCreacionRegistro: this.forms.object.fechaCreacionRegistro,
        nombres: this.forms.object.nombres,
        apellidos: this.forms.object.apellidos,
        documento: this.forms.object.documento,
        acceso: this.forms.object.acceso,
        ambiente: this.forms.object.ambiente,
        servidor: this.forms.object.servidor,
        nombreAcceso: this.forms.object.nombreAcceso,
        usuario: this.forms.object.usuario,
        contraseña: this.forms.object.contraseña,
        rutaAcceso: this.forms.object.rutaAcceso,
        detalleRegistro: this.forms.object.detalleRegistro,
        estado:this.forms.object.estado
      }
      console.log(editRepositorio)
      this.Api.put('Repositorios', editRepositorio, editRepositorio.idRepositorio)
    })

    if (this.FormRepositorio.valid) {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500
      })
    } else {
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'datos icompletos',
        showConfirmButton: false,
        timer: 1500
      })
    }
  }
}

