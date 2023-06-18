import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { FormsService } from 'src/app/Services/forms.service';
import Swal from 'sweetalert2';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-form-usuario',
  templateUrl: './form-usuario.component.html',
  styleUrls: ['./form-usuario.component.css']
})
export class FormUsuarioComponent implements OnInit {
  FormUsuario = this.fb.group({
    Nombres: [null, Validators.required],
    Apellidos: [null, Validators.required],
    Documento: [null, Validators.required],
    Cargo: [null, Validators.required],
    Correo: [null, Validators.required],
    Telefono: [null, Validators.required],
    Area: [null, Validators.required],
    Rol: [null, Validators.required],
    Estado: [null, Validators.required],
    Fecha: [null, Validators.required],
  });

  hasUnitNumber = false;

  Rol = [
    { name: 'Administrador', abbreviation: 'ADM' },
    { name: 'Coordinador', abbreviation: 'COR' },
    { name: 'Colaborador', abbreviation: 'COL' }
  ];
  Area = [
    { name: 'Bases de datos', abbreviation: 'BDA' },
    { name: 'Plataforma', abbreviation: 'PLA' },
    { name: 'Redes', abbreviation: 'RED' },
    { name: 'Seguridad', abbreviation: 'SEG' },
    { name: 'Aplicaciones', abbreviation: 'APL' },
    { name: 'Desarrollo', abbreviation: 'DES' },
    { name: 'Soluciones', abbreviation: 'SOL' },
    { name: 'ProceDatos', abbreviation: 'PD' }
  ];
  Estado = [
    { name: 'Activo', abbreviation: 'AC' },
    { name: 'Inactivo', abbreviation: 'IN' },
  ];

  constructor(private fb: FormBuilder, public forms: FormsService, public Api: ApiService) { }

  ngOnInit(): void {
    this.forms.component.subscribe((res) => {
      if (res === "Usuarios") {
        this.FormUsuario.setControl("Nombres", new FormControl(this.forms.object.nombres))
        this.FormUsuario.setControl("Apellidos", new FormControl(this.forms.object.apellidos))
        this.FormUsuario.setControl("Documento", new FormControl(this.forms.object.documento))
        this.FormUsuario.setControl("Area", new FormControl(this.forms.object.nombreArea))
        this.FormUsuario.setControl("Rol", new FormControl(this.forms.object.rol))
        this.FormUsuario.setControl("Cargo", new FormControl(this.forms.object.cargo))
        this.FormUsuario.setControl("Estado", new FormControl(this.forms.object.estado))
        this.FormUsuario.setControl("Correo", new FormControl(this.forms.object.correo))
        this.FormUsuario.setControl("Telefono", new FormControl(this.forms.object.telefono))
        this.FormUsuario.setControl("Fecha", new FormControl(this.forms.object.fecha))
      }
    });
  }

  edit(): void {
    interface EditUsuario {
      id: string;
      nombres: string;
      apellidos: string;
      documento: string;
      cargo: string;
      correo: string;
      rol: String;
      nombreArea: String;
      telefono: string;
      estado: String;
      fecha: number;
    }
    
    this.forms.component.subscribe(() => {
      this.forms.object.nombres = this.FormUsuario.get('Nombres').value;
      this.forms.object.apellidos = this.FormUsuario.get('Apellidos').value;
      this.forms.object.documento = this.FormUsuario.get('Documento').value;
      this.forms.object.cargo = this.FormUsuario.get('Cargo').value;
      this.forms.object.correo = this.FormUsuario.get('Correo').value;
      this.forms.object.telefono = this.FormUsuario.get('Telefono').value;
      this.forms.object.fecha = this.FormUsuario.get('Fecha').value;
      this.forms.object.nombreArea= this.FormUsuario.get('Area').value;
      this.forms.object.rol=this.FormUsuario.get('Rol').value;
      this.forms.object.estado=this.FormUsuario.get('Estado').value;

      const editUsuario: EditUsuario = {
        id: this.forms.object.id,
        nombres: this.forms.object.nombres,
        apellidos: this.forms.object.apellidos,
        documento: this.forms.object.documento,
        cargo: this.forms.object.cargo,
        correo: this.forms.object.correo,
        rol: this.forms.object.rol,
        nombreArea: this.forms.object.nombreArea,
        telefono: this.forms.object.telefono,
        estado: this.forms.object.estado,
        fecha: this.forms.object.fecha,
      };

      console.log(editUsuario);
      this.Api.put('Usuarios', editUsuario, editUsuario.id)
    });

    if (this.FormUsuario.valid) {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500
      });
    } else {
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'Datos incompletos',
        showConfirmButton: false,
        timer: 1500
      });
    }
  }
}
