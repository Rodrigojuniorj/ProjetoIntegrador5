import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemGaragemComponent } from './listagem-garagem.component';

describe('ListagemGaragemComponent', () => {
  let component: ListagemGaragemComponent;
  let fixture: ComponentFixture<ListagemGaragemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListagemGaragemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListagemGaragemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
