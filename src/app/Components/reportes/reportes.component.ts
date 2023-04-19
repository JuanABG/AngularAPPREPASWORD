import { Component, OnInit, ViewChild} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent implements OnInit{
  column:object;
  displayedColumns: string[] = [];
  dataSource: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

    constructor(public Api: ApiService){
      this.dataSource= new MatTableDataSource();
     }

    ngOnInit(): void {
        this.GetHistorials();
    }

    public async GetHistorials(){
        await this.Api.get("Historials").then((res)=>{
           this.column=res
          this.displayedColumns=Object.keys(this.column[0])
          //this.loadTable([res[0]])
          this.dataSource.data=res
        });
        this.dataSource.paginator=this.paginator;
        this.dataSource.sort=this.sort;
    }

    //loadTable(data:any[]){
      //for (let column in data[0]){
        //this.displayedColumns.push(column)
      //}
    //}

    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
  
      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      }
    }
}