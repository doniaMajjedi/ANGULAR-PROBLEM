import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StylecomposeComponent } from './stylecompose.component';

describe('StylecomposeComponent', () => {
  let component: StylecomposeComponent;
  let fixture: ComponentFixture<StylecomposeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StylecomposeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StylecomposeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
