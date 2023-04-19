import { Component, OnInit, ViewChild} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-repositorio',
  templateUrl: './repositorio.component.html',
  styleUrls: ['./repositorio.component.css']
})
export class RepositorioComponent implements OnInit {
  column:object;
  displayedColumns: string[] = [];
  dataSource: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

    constructor(public Api: ApiService){
      this.dataSource= new MatTableDataSource();
     }

    ngOnInit(): void {
        this.GetRepositorios();
    }

    public async GetRepositorios(){
        await this.Api.get("Repositorios").then((res)=>{
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
  
