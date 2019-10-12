import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ButtonComponent } from './button/button.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { SelectComponent } from './select/select.component';
import { FormFieldComponent } from './form-field/form-field.component';
import { combineLatest } from 'rxjs';
import { TwoWayDataBindingComponent } from './two-way-data-binding/two-way-data-binding.component';


const routes: Routes = [
  { path: 'button', component: ButtonComponent },
  { path: 'property-binding', component: PropertyBindingComponent },
  { path: 'event-binding', component: EventBindingComponent },
  { path: 'check-box', component: CheckboxComponent },
  { path: 'select', component: SelectComponent },
  { path: 'form-field', component: FormFieldComponent },
  { path: 'two-way-data-binding', component: TwoWayDataBindingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
