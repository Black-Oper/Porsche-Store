import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MacanComponent } from './macan.component';

describe('MacanComponent', () => {
  let component: MacanComponent;
  let fixture: ComponentFixture<MacanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MacanComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MacanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
