import { NgModule } from '@angular/core';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';



const materials = [MatFormFieldModule, MatInputModule, MatButtonModule];

@NgModule({
  imports: [materials],
  exports: [materials],
})
export class MaterialModule {}
