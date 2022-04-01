import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovaMarcaComponent } from './nova-marca.component';

describe('NovaMarcaComponent', () => {
  let component: NovaMarcaComponent;
  let fixture: ComponentFixture<NovaMarcaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovaMarcaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NovaMarcaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
