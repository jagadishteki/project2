import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormUpdateComponent } from './reactive-form-update.component';

describe('ReactiveFormUpdateComponent', () => {
  let component: ReactiveFormUpdateComponent;
  let fixture: ComponentFixture<ReactiveFormUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveFormUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveFormUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
