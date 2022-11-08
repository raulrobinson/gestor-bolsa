import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MassiveRetentionComponent } from './massive-retention.component';

describe('MassiveRetentionComponent', () => {
  let component: MassiveRetentionComponent;
  let fixture: ComponentFixture<MassiveRetentionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MassiveRetentionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MassiveRetentionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
