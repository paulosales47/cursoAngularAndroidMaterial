import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputBindingComObjetosComponent } from './input-binding-com-objetos.component';

describe('InputBindingComObjetosComponent', () => {
  let component: InputBindingComObjetosComponent;
  let fixture: ComponentFixture<InputBindingComObjetosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputBindingComObjetosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputBindingComObjetosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
