import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { User } from 'src/app/components/registration/user.model';

@Injectable({
  providedIn: 'root'
})

export class RegistrationService {

  apiURL = 'http://localhost:4201/user';

  constructor(
    private snackBar: MatSnackBar,
    private http: HttpClient
    ) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, '', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    });
  }

  createDev(user: User): Observable<User> {
    return this.http.post<User>(this.apiURL, user)
  }

  readUser(): Observable<User[]> {
    return this.http.get<User[]>(this.apiURL)
  }

}
