import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemCaminhoneiroComponent } from './listagem-caminhoneiro.component';

describe('ListagemCaminhoneiroComponent', () => {
  let component: ListagemCaminhoneiroComponent;
  let fixture: ComponentFixture<ListagemCaminhoneiroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListagemCaminhoneiroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListagemCaminhoneiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
