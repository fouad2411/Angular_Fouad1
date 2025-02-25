import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadizComponent } from './cadiz.component';

describe('CadizComponent', () => {
  let component: CadizComponent;
  let fixture: ComponentFixture<CadizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadizComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
