import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaceresComponent } from './caceres.component';

describe('CaceresComponent', () => {
  let component: CaceresComponent;
  let fixture: ComponentFixture<CaceresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaceresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaceresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
