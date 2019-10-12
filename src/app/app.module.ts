import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  MatButtonModule,
  MatIconModule,
  MatCheckboxModule,
  MatSelectModule,
  MatFormFieldModule,
  MatInputModule,
  MatCardModule,
  MatRadioModule
} from '@angular/material';


import { FormsModule } from "@angular/forms";

import { ButtonComponent } from './button/button.component'; import { FlexLayoutModule } from '@angular/flex-layout';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { SelectComponent } from './select/select.component';
import { FormFieldComponent } from './form-field/form-field.component';
import { TwoWayDataBindingComponent } from './two-way-data-binding/two-way-data-binding.component';
import { RadioButtonComponent } from './radio-button/radio-button.component';
import { Page404Component } from './pageStatus/page404/page404.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    CheckboxComponent,
    SelectComponent,
    FormFieldComponent,
    TwoWayDataBindingComponent,
    RadioButtonComponent,
    Page404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    FlexLayoutModule,
    MatCheckboxModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    FormsModule,
    MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
