import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';
import { AuthGuardService } from '../guards/auth-guard.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private authService: AuthGuardService,
    private route: Router) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      usuario: ['', Validators.nullValidator],
      senha: ['', Validators.nullValidator]
    });
  }

  async login() {
    await this.userService.loginUser(this.form.value).subscribe(response => {
      Swal.fire({
        title: 'Sucesso!',
        text: `Login Efetuado Com Êxito!`,
        type: 'success',
        confirmButtonText: 'Prosseguir'
      })
      this.route.navigate(['/client']);
    }, err => {
      Swal.fire({
        title: `Algo de inesperado aconteceu!`,
        text: err.error.errors,
        type: 'error',
        showCancelButton: true,
        showConfirmButton: false,
        cancelButtonText: 'Retornar'
      })
    });
  }
}
