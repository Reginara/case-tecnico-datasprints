import { RegistrationService } from '../registration.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
// import { map } from 'rxjs/operators';
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
    )
    {
      // this.form = new FormGroup({
      //   login: new FormControl(),
      //   avatar_url: new FormControl(),
      //   name: new FormControl(),
      //   email: new FormControl(),
      //   cidade: new FormControl(),
      //   formacao: new FormControl(),
      //   tecnologias: new FormControl()
      // });
      // this.apiURL == 'http://localhost:4201/user';
    }

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

  // onSubmit(): void {
  //   console.log(this.form.value)
  //   this.http.post(`${ this.apiURL }`, JSON.stringify(this.form.value))
  //     .pipe(map((res: any) => res))
  //     .subscribe((dados: any) => console.log(dados))
  // }
}