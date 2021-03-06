import { RegistrationService } from '../registration.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/components/registration/user.model';


@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})

export class CreateUserComponent implements OnInit {

  public form: any;
  public apiURL: string = 'http://localhost:4201/user';

  user: User = {
    login: '',
    avatar_url: '',
    name: '',
    email: '',
    cidade: '',
    formacao: '',
    tecnologias: ''
  }

  constructor(
    private router: Router,
    private registration: RegistrationService,
    private formBuilder: FormBuilder,
    private http: HttpClient
    ){}

  ngOnInit(): void {
    
  }

  createUser(): void {
    this.registration.createDev(this.user).subscribe(() => {
      this.registration.showMessage('Cadastro realizado com sucesso');
      this.router.navigate(['/'])
    })
  }

  backToHome(): void {
    this.router.navigate(['/'])
  }
}