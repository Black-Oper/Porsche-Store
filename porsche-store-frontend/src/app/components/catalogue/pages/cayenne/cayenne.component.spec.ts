import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CayenneComponent } from './cayenne.component';

describe('CayenneComponent', () => {
  let component: CayenneComponent;
  let fixture: ComponentFixture<CayenneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CayenneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CayenneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
