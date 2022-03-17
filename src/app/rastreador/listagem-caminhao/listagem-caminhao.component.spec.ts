import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemCaminhaoComponent } from './listagem-caminhao.component';

describe('ListagemCaminhaoComponent', () => {
  let component: ListagemCaminhaoComponent;
  let fixture: ComponentFixture<ListagemCaminhaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListagemCaminhaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListagemCaminhaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
