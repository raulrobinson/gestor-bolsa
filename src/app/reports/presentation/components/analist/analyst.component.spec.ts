import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalystComponent } from './analyst.component';

describe('AnalistComponent', () => {
  let component: AnalystComponent;
  let fixture: ComponentFixture<AnalystComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalystComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnalystComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
