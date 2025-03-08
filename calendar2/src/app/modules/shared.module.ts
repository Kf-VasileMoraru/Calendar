import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';

export const COMPONENTS = [];
export const DIRECTIVES = [];
export const PIPES = [];

@NgModule({
  declarations: [COMPONENTS, DIRECTIVES, PIPES],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MaterialModule],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,

    COMPONENTS,
    DIRECTIVES,
    PIPES,
  ],
})
export class SharedModule {}
