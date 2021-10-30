import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Material

import {MatTableModule} from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    
    MatTableModule,
    MatButtonModule
    
  ]
})
export class MaterialModule { }
