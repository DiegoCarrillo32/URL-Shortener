import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShortenerComponent } from './shortener/shortener.component';
import { TableComponent } from './table/table.component';
import { MaterialModule } from '../modules/material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ShortenerComponent,
    TableComponent,
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule,
    RouterModule
  ],
  exports:[
    ShortenerComponent,
    TableComponent
  ]
})
export class ComponentsModule { }
