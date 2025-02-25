import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtremaduraComponent } from './extremadura.component';

describe('ExtremaduraComponent', () => {
  let component: ExtremaduraComponent;
  let fixture: ComponentFixture<ExtremaduraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtremaduraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExtremaduraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
