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
  MatRadioModule,
  MatProgressBarModule,
  MatDividerModule
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
import { InputBindingComponent } from './input-binding/input-binding.component';
import { InputBindingComObjetosComponent } from './input-binding-com-objetos/input-binding-com-objetos.component';
import { EventComponent } from './event/event.component';
import { ChildItemComponent } from './event/child-item/child-item.component';
import { PaiComponent } from './pai/pai.component';
import { FilhoComponent } from './pai/filho/filho.component';
import { TimerComponent } from './pai/timer/timer.component';
import { OnChangeComponent } from './on-change/on-change.component';
import { ChangeNameComponent } from './on-change/change-name/change-name.component';

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
    Page404Component,
    InputBindingComponent,
    InputBindingComObjetosComponent,
    EventComponent,
    ChildItemComponent,
    PaiComponent,
    FilhoComponent,
    TimerComponent,
    OnChangeComponent,
    ChangeNameComponent
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
    MatRadioModule,
    MatProgressBarModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
