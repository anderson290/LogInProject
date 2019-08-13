import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientService } from '../services/client.service';
import { formatDate } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {


  clientForm: FormGroup;
  
  validCpf: boolean = false;
  validDate: boolean = false;
  
  list: any = {aee: 11};
  message = {
    cpf: '',
    date: ''
  };

  constructor(
    private formBuilder: FormBuilder,
    private clientService: ClientService
  ) { }

  ngOnInit() {
    this.clientForm = this.formBuilder.group({
      cpf: ['', Validators.required],
      nome: ['', Validators.required],
      dataDeNascimento: [null, Validators.required]
    })
  }

  async saveClient() {
    if(this.clientForm.valid){
      await this.clientService.save(this.clientForm.value).subscribe(response => {
        Swal.fire({
          title: 'Sucesso!',
          text: response['conteudoDoResponse'],
          type: 'success',
          confirmButtonText: 'Confirmar'
        })   
      }, err => {
        Swal.fire({
          title: 'Algo de inesperado aconteceu!',
          text: err.error.errors,
          type: 'error',
          confirmButtonText: 'Retornar'
        })
        
      });
    }    
  }

  async checkCpf() {
    await this.clientService.validateCpf(this.clientForm.value.cpf).subscribe(response => {
      this.validCpf = true;
    }, err => {
      this.validCpf = false;
      this.message.cpf = err.error.errors;
    });
  }
  async checkDate(e) {
    this.clientForm.value.dataDeNascimento = formatDate(e.value, 'dd-MM-yyyy', 'en');
    await this.clientService.validateDate(this.clientForm.value.dataDeNascimento).subscribe(response => {     
      this.validDate = true;
    }, err => {
      this.validDate = false;
      this.message.date = err.error.errors;
    });
  }


}
