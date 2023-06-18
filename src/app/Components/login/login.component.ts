import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/Services/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(public loginservice:LoginService){

  }
  usuario="";
  pass="";
  

  loginForm= new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('',Validators.required)
  });
  async onSumbit(){
    this.usuario = this.loginForm.controls["username"].value;
    this.pass = this.loginForm.controls["password"].value;
    if(this.usuario==="Isabella" && this.pass==="1234"){
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Se logueo correctamente',
        timer: 1500
      })
      localStorage.setItem('login','login');
      this.loginservice.login.next("login");
    }else{
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Oops...',
        text: 'Datos incorrectos',
        timer: 1500
      })
    }
  }
}
