import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeteUmOitoComponent } from './sete-um-oito.component';

describe('SeteUmOitoComponent', () => {
  let component: SeteUmOitoComponent;
  let fixture: ComponentFixture<SeteUmOitoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SeteUmOitoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SeteUmOitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
