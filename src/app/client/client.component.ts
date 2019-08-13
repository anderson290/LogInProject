import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientService } from '../services/client.service';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {


  clientForm: FormGroup;
  validCpf: boolean = false;

  message: string = '';
  constructor(
    private formBuilder: FormBuilder,
    private clientService: ClientService) { }

  ngOnInit() {
    this.clientForm = this.formBuilder.group({
      cpf: ['', Validators.required],
      nome: ['', Validators.required],
      dataDeNascimento: [null, Validators.required]
    })
  }

  saveClient(){
    
  }

 async checkCpf(){
    await this.clientService.validateCpf(this.clientForm.value.cpf).subscribe(response =>{
      console.log(response);
      this.validCpf = true;
    },err=>{
      this.validCpf = false;
      console.log(err);
      this.message = err.error.errors;
    });
  }
  async checkDate(){
    this.clientForm.value.dataDeNascimento = formatDate(this.clientForm.value.dataDeNascimento = new Date(), 'dd/MM/yyyy', 'en');
    // console.log("DATA", formatDate(this.clientForm.value.dataDeNascimento = new Date(), 'dd/MM/yyyy', 'en'))
    await this.clientService.validateDate(this.clientForm.value.dataDeNascimento).subscribe(response =>{
      console.log(response);
      this.validCpf = true;
    },err=>{
      this.validCpf = false;
      console.log(err);
      this.message = err.error.errors;
    });
  }

}
