import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypescriptEjemploComponent } from './typescript-ejemplo.component';

describe('TypescriptEjemploComponent', () => {
  let component: TypescriptEjemploComponent;
  let fixture: ComponentFixture<TypescriptEjemploComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypescriptEjemploComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypescriptEjemploComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
