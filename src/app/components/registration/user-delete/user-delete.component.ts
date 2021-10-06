import { Component, OnInit } from "@angular/core";
import { User } from "src/app/components/registration/user.model";
import { RegistrationService } from "../registration.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-user-delete",
  templateUrl: "./user-delete.component.html",
  styleUrls: ["./user-delete.component.css"],
})
export class UserDeleteComponent implements OnInit {
  user!: User | any;


  constructor(
    private registration: RegistrationService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id: any = this.route.snapshot.paramMap.get('id');
    this.registration.readById(id).subscribe((user) => {
      this.user = user;
    });
  }

  deleteUser(): void {
    this.registration.delete(this.user.id).subscribe(() => {
      this.registration.showMessage("Cadastro excluído com sucesso!");
      this.router.navigate(["/"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/"]);
  }
}
