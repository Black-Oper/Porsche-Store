import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaycanComponent } from './taycan.component';

describe('TaycanComponent', () => {
  let component: TaycanComponent;
  let fixture: ComponentFixture<TaycanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TaycanComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TaycanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
