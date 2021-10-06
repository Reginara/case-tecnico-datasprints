import { Component, OnInit } from "@angular/core";
import { RegistrationService } from "../registration.service";
import { ActivatedRoute, Router } from "@angular/router";
import { User } from "../user.model";

@Component({
  selector: "app-user-update",
  templateUrl: "./user-update.component.html",
  styleUrls: ["./user-update.component.css"],
})
export class UserUpdateComponent implements OnInit {
  user: User = {
    login: "",
    avatar_url: "",
    name: "",
    email: "",
    cidade: "",
    formacao: "",
    tecnologias: ""
  };

  constructor(
    private registration: RegistrationService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id: any = this.route.snapshot.paramMap.get("id");
    this.registration.readById(id).subscribe((user) => {
      this.user = user;
    });
  }

  updateUser(): void {
    this.registration.update(this.user).subscribe(() => {
      this.registration.showMessage("Cadastro alterado com sucesso!");
      this.router.navigate(["/"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/"]);
  }
}
