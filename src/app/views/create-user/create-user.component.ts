import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../../components/registration/registration.service';
import { Router } from '@angular/router';
import { User } from 'src/app/components/registration/user.model';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  user: User = {
    username: '',
    avatarUrl: '',
    nome: '',
    email: '',
    cidade: '',
    formacao: '',
    tecnologias: ''
  }

  constructor(private registrationService: RegistrationService, private router: Router) { }

  ngOnInit(): void {
  }

  createUser(): void {
    this.registrationService.create(this.user).subscribe(() => {
      this.registrationService.showMessage('Cadastro realizado com sucesso!')
      this.router.navigate(['/'])
    })
  }

  backToHome(): void {
    this.router.navigate(['/'])
  }
}
