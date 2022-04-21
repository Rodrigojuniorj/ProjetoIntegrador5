import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovaGaragemComponent } from './nova-garagem.component';

describe('NovaGaragemComponent', () => {
  let component: NovaGaragemComponent;
  let fixture: ComponentFixture<NovaGaragemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovaGaragemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NovaGaragemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
