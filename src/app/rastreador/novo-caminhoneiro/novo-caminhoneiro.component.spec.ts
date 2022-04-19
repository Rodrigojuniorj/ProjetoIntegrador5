import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoCaminhoneiroComponent } from './novo-caminhoneiro.component';

describe('NovoCaminhoneiroComponent', () => {
  let component: NovoCaminhoneiroComponent;
  let fixture: ComponentFixture<NovoCaminhoneiroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovoCaminhoneiroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NovoCaminhoneiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
