import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoveUmUmComponent } from './nove-um-um.component';

describe('NoveUmUmComponent', () => {
  let component: NoveUmUmComponent;
  let fixture: ComponentFixture<NoveUmUmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NoveUmUmComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NoveUmUmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
