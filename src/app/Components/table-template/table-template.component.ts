import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/Services/api.service';
import Swal from 'sweetalert2';
import { MatDialog } from '@angular/material/dialog';
import { FormUsuarioComponent } from '../form-usuario/form-usuario.component';
import { FormRepositorioComponent } from '../form-repositorio/form-repositorio.component';
import { FormReportesComponent } from '../form-reportes/form-reportes.component';
import { FormsService } from 'src/app/Services/forms.service';

@Component({
  selector: 'app-table-template',
  templateUrl: './table-template.component.html',
  styleUrls: ['./table-template.component.css']
})
export class TableTemplateComponent implements OnInit {
  @Input() service: string;
  column: object;
  columnName: string[];
  dataSource: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public Api: ApiService, public dialog: MatDialog, public forms: FormsService) {
    this.dataSource = new MatTableDataSource();
  }
  ngOnInit(): void {
    this.GetData(this.service)
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  public async GetData(service: string) {
    await this.Api.get(service).then((res) => {
      this.column = res
      this.columnName = Object.keys(this.column[0])
      this.column= this.columnName
      this.dataSource.data = res;
      this.columnName.push('Acciones');
    });
  }

  edit(object: any) {
    console.log("edit id", object)

    switch (this.service) {
      case "Usuarios":
        this.forms.object = object;
        this.forms.component.next("Usuarios")
        this.dialog.open(FormUsuarioComponent);
        break;
      case "Repositorios":
        this.forms.object = object
        this.forms.component.next("Repositorios")
        this.dialog.open(FormRepositorioComponent);
        break;
      case "Historials":
        this.forms.object = object
        this.forms.component.next("Reportes")
        this.dialog.open(FormReportesComponent);
        break;
    }
  }

  delete(object: any) {
    object.estado = "Inactivo"
    console.log(object)
    Swal.fire({
      title: '¿Dejar registro inactivo?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes'
    }).then((result) => {
      if (result.isConfirmed) {
        switch (this.service) {
          case "Usuarios":
            this.Api.put("Usuarios", object, object.id)
            console.log(object)
            break;
          case "Repositorios":
            this.Api.put("Repositorios", object, object.idRepositorio)
            console.log(object)
            break;
          case "Historials":
            this.Api.put("Historials", object, object.id)
            console.log(object)
            break;
        }
        Swal.fire(
          'Inactivo!',
          'El registro esta inactivo',
          'success'
        )
      }
    })
  }
}
