import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovalExtensionComponent } from './approval-extension.component';

describe('ApprovalExtensionComponent', () => {
  let component: ApprovalExtensionComponent;
  let fixture: ComponentFixture<ApprovalExtensionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApprovalExtensionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApprovalExtensionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
