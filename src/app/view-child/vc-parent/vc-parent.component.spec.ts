import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VcParentComponent } from './vc-parent.component';

describe('VcParentComponent', () => {
  let component: VcParentComponent;
  let fixture: ComponentFixture<VcParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VcParentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VcParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
