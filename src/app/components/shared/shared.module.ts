import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ControlErroComponent } from "./control-erro/control-erro.component";
import { FormDebugComponent } from "./form-debug/form-debug.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FormDebugComponent,
    ControlErroComponent
  ],
  exports: [
    FormDebugComponent,
    ControlErroComponent
  ]
})

export class SharedModule { }