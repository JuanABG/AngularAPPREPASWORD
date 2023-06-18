import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PanelprincipalComponent } from './Components/panelprincipal/panelprincipal.component';
import { InicioComponent } from './Components/inicio/inicio.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './Components/menu/menu.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { UsuarioComponent } from './Components/usuario/usuario.component';
import { TablasComponent } from './Components/tablas/tablas.component';
import { RepositorioComponent } from './Components/repositorio/repositorio.component';
import { ReportesComponent } from './Components/reportes/reportes.component';
import { AvatarModule } from 'ngx-avatars';
import { HttpClientModule } from '@angular/common/http';
import {MatInputModule} from '@angular/material/input';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';
import { TableTemplateComponent } from './Components/table-template/table-template.component';
import {MatDialogModule} from '@angular/material/dialog';
import { FormUsuarioComponent } from './Components/form-usuario/form-usuario.component';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { FormRepositorioComponent } from './Components/form-repositorio/form-repositorio.component';
import { FormReportesComponent } from './Components/form-reportes/form-reportes.component';
import { LoginComponent } from './Components/login/login.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatDatepickerModule} from '@angular/material/datepicker';







@NgModule({
  declarations: [
    AppComponent,
    PanelprincipalComponent,
    InicioComponent,
    MenuComponent,
    UsuarioComponent,
    TablasComponent,
    RepositorioComponent,
    ReportesComponent,
    TableTemplateComponent,
    FormUsuarioComponent,
    FormRepositorioComponent,
    FormReportesComponent,
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    HttpClientModule,
    AvatarModule,
    MatInputModule,
    MatPaginatorModule,
    MatTableModule,
    MatFormFieldModule,
    MatDialogModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatDatepickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
