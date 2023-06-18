import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormUsuarioComponent } from '../form-usuario/form-usuario.component';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  title = "Usuarios"
  serviceName = "Usuarios"

  constructor(public dialog: MatDialog, public Api: ApiService) {
  }

  ngOnInit(): void {
 
  }

  newUsuario(): void {
    const dialogRef = this.dialog.open(FormUsuarioComponent);
    
  }
}
