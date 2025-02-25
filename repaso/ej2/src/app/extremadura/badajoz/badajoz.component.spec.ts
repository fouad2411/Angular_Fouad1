import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadajozComponent } from './badajoz.component';

describe('BadajozComponent', () => {
  let component: BadajozComponent;
  let fixture: ComponentFixture<BadajozComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BadajozComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BadajozComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
