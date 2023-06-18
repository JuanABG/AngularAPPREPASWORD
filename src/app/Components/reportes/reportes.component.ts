import { Component, OnInit, ViewChild} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormReportesComponent } from '../form-reportes/form-reportes.component';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent implements OnInit{
  title = "Reportes"
  serviceName = "Historials"

  constructor(public dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  openModal() {
    const dialogRef = this.dialog.open(FormReportesComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}