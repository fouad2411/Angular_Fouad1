import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoralejaComponent } from './moraleja.component';

describe('MoralejaComponent', () => {
  let component: MoralejaComponent;
  let fixture: ComponentFixture<MoralejaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoralejaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoralejaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
