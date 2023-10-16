import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefChildComponent } from './ref-child.component';

describe('RefChildComponent', () => {
  let component: RefChildComponent;
  let fixture: ComponentFixture<RefChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RefChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
