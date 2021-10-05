import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-read-user',
  templateUrl: './read-user.component.html',
  styleUrls: ['./read-user.component.css']
})
export class ReadUserComponent implements OnInit {

  users: User[] = [];

  constructor(private registration: RegistrationService) { }

  ngOnInit(): void {
    this.registration.readUser().subscribe(users => {
      this.users = users
      console.log(users)
    })
  }

}
