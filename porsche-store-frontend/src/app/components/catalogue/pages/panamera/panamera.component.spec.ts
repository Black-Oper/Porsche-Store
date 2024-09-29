import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanameraComponent } from './panamera.component';

describe('PanameraComponent', () => {
  let component: PanameraComponent;
  let fixture: ComponentFixture<PanameraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PanameraComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PanameraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
