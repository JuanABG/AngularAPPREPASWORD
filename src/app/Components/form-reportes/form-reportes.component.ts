import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { FormsService } from 'src/app/Services/forms.service';
import Swal from 'sweetalert2';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-form-reportes',
  templateUrl: './form-reportes.component.html',
  styleUrls: ['./form-reportes.component.css']
})
export class FormReportesComponent {
  FormReportes = this.fb.group({
    FechaNovedad: [null, Validators.required],
    IdRegistro: [null, Validators.required],
    FechaCreacionRegistro: [null, Validators.required],
    IdUsuario: [null, Validators.required],
    Acceso: [null, Validators.required],
    Ambiente: [null, Validators.required],
    Servidor: [null, Validators.required],
    NombreAcceso: [null, Validators.required],
    RutaAcceso: [null, Validators.required],
    Usuario: [null, Validators.required],
    DetalleRegistro: [null, Validators.required],
    Comentarios: [null, Validators.required],

  });

  hasUnitNumber = false;

  Acceso = [
    {name: 'Pagina Web', abbreviation: 'PW'},
    {name: 'Servidor', abbreviation: 'SER'},
    {name: 'Aplicacion', abbreviation: 'APL'},
    {name: 'Ruta Intranet', abbreviation: 'RI'},
    {name: 'Instancia Base de Datos', abbreviation: 'IBD'}
  ];

  Ambiente = [
    {name: 'Desarrollo', abbreviation: 'DES'},
    {name: 'Pruebas', abbreviation: 'PRU'},
    {name: 'Produccion', abbreviation: 'PRO'}
  ];

  Servidor = [
    {name: 'Propio del provedor'},
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
      if(res==="Reportes"){
        this.FormReportes.setControl("FechaNovedad", new FormControl(this.forms.object.fechaNovedad))
        this.FormReportes.setControl("IdRegistro", new FormControl(this.forms.object.idRepositorio))
        this.FormReportes.setControl("IdUsuario", new FormControl(this.forms.object.nombres))
        this.FormReportes.setControl("FechaCreacionRegistro", new FormControl(this.forms.object.fechaCreacionRegistro))
        this.FormReportes.setControl("Acceso", new FormControl(this.forms.object.acceso))
        this.FormReportes.setControl("Ambiente", new FormControl(this.forms.object.ambiente))
        this.FormReportes.setControl("Servidor", new FormControl(this.forms.object.servidor))
        this.FormReportes.setControl("NombreAcceso", new FormControl(this.forms.object.nombreAcceso))
        this.FormReportes.setControl("Usuario", new FormControl(this.forms.object.usuario))
        this.FormReportes.setControl("RutaAcceso", new FormControl(this.forms.object.rutaAcceso))
        this.FormReportes.setControl("DetalleRegistro", new FormControl(this.forms.object.detalleRegistro))
        this.FormReportes.setControl("Comentarios", new FormControl(this.forms.object.comentarios))
      }
    });
  }

  edit(): void {

    interface EditHistorial{
      id: string;
      fechaNovedad: string;
      idRepositorio: number;
      fechaCreacionRegistro: string;
      nombres: string;
      apellidos: string;
      documento: string;
      cargo: String;
      rol: string;
      nombreArea: string;  
      acceso: string;
      ambiente: string;
      servidor: string;
      usuario: string;
      rutaAcceso: string;
      nombreAcceso: string;
      detalleRegistro: string;
      comentarios: string;
      estado:String;
    }

    this.forms.component.subscribe((res)=>{
      this.forms.object.fechaNovedad = this.FormReportes.get('FechaNovedad').value
      this.forms.object.idRepositorio= this.FormReportes.get('IdRegistro').value
      this.forms.object.comentarios = this.FormReportes.get('Comentarios').value


      const editHistorial: EditHistorial = {
        id: this.forms.object.id,
        fechaNovedad: this.forms.object.fechaNovedad,
        idRepositorio:this.forms.object.idRepositorio,
        fechaCreacionRegistro: this.forms.object.fechaCreacionRegistro,
        nombres: this.forms.object.nombres,
        apellidos: this.forms.object.apellidos,
        documento: this.forms.object.documento,
        cargo: this.forms.object.cargo,
        rol:this.forms.object.rol,
        nombreArea: this.forms.object.nombreArea,
        acceso: this.forms.object.acceso,
        ambiente: this.forms.object.ambiente,
        servidor: this.forms.object.servidor,
        nombreAcceso: this.forms.object.nombreAcceso,
        usuario: this.forms.object.usuario,
        rutaAcceso: this.forms.object.rutaAcceso,
        detalleRegistro: this.forms.object.detalleRegistro,
        comentarios: this.forms.object.comentarios,
        estado:this.forms.object.estado
      }
      console.log(editHistorial)
      this.Api.put('Historials', editHistorial, editHistorial.id)
    })

    if (this.FormReportes.valid) {
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
