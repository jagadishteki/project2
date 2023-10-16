import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateFormUpdateComponent } from './template-form-update.component';

describe('TemplateFormUpdateComponent', () => {
  let component: TemplateFormUpdateComponent;
  let fixture: ComponentFixture<TemplateFormUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateFormUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateFormUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
