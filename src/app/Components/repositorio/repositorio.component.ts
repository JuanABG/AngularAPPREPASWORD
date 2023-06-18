import { Component, OnInit, ViewChild} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/Services/api.service';
import { FormRepositorioComponent } from '../form-repositorio/form-repositorio.component';

@Component({
  selector: 'app-repositorio',
  templateUrl: './repositorio.component.html',
  styleUrls: ['./repositorio.component.css']
})
export class RepositorioComponent implements OnInit {
  title = "Repositorio"
  serviceName = "Repositorios"

  constructor(public dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  openModal() {
    const dialogRef = this.dialog.open(FormRepositorioComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  }
  
