import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { MaterialModule } from "./material.module";

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    IonicModule,
  ],
  exports: [
    CommonModule,
    MaterialModule,
    IonicModule,
  ]
})
export class SharedModule {}