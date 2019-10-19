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
import { RadioButtonComponent } from './radio-button/radio-button.component';
import { Page404Component } from './pageStatus/page404/page404.component';
import { InputBindingComObjetosComponent } from './input-binding-com-objetos/input-binding-com-objetos.component';
import { EventComponent } from './event/event.component';
import { ChildItemComponent } from './event/child-item/child-item.component';
import { PaiComponent } from './pai/pai.component';
import { OnChangeComponent } from './on-change/on-change.component';
import { InterceptingComponent } from './intercepting/intercepting.component';


const routes: Routes = [
  { path: 'button', component: ButtonComponent },
  { path: 'property-binding', component: PropertyBindingComponent },
  { path: 'event-binding', component: EventBindingComponent },
  { path: 'check-box', component: CheckboxComponent },
  { path: 'select', component: SelectComponent },
  { path: 'form-field', component: FormFieldComponent },
  { path: 'two-way-data-binding', component: TwoWayDataBindingComponent },
  { path: 'radio-button', component: RadioButtonComponent },
  { path: 'input-binding', component: InputBindingComObjetosComponent },
  { path: 'event', component: EventComponent },
  { path: 'event-child', component: ChildItemComponent },
  { path: 'pai', component: PaiComponent },
  { path: 'onchange', component: OnChangeComponent },
  { path: 'intercepting', component: InterceptingComponent },
  { path: '', loadChildren: () => import('./template/template.module').then(m => m.TemplateModule) },
  { path: '**', component: Page404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
