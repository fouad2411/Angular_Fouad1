import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColiflorComponent } from './coliflor.component';

describe('ColiflorComponent', () => {
  let component: ColiflorComponent;
  let fixture: ComponentFixture<ColiflorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColiflorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColiflorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
