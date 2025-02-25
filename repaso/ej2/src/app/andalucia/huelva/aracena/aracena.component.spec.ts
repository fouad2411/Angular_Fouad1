import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AracenaComponent } from './aracena.component';

describe('AracenaComponent', () => {
  let component: AracenaComponent;
  let fixture: ComponentFixture<AracenaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AracenaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AracenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
