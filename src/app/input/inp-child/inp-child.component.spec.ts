import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InpChildComponent } from './inp-child.component';

describe('InpChildComponent', () => {
  let component: InpChildComponent;
  let fixture: ComponentFixture<InpChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InpChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InpChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
