import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoriaComponent } from './coria.component';

describe('CoriaComponent', () => {
  let component: CoriaComponent;
  let fixture: ComponentFixture<CoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoriaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
