import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveUpdateComponent } from './reactive-update.component';

describe('ReactiveUpdateComponent', () => {
  let component: ReactiveUpdateComponent;
  let fixture: ComponentFixture<ReactiveUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
