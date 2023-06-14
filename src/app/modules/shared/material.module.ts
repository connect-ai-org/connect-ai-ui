import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';


const modules = [
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatCardModule
];

@NgModule({
  imports: [...modules],
  exports: [...modules],
})
export class MaterialModule {};