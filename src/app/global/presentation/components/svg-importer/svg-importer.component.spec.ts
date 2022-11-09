import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgImporterComponent } from './svg-importer.component';

describe('SvgImporterComponent', () => {
  let component: SvgImporterComponent;
  let fixture: ComponentFixture<SvgImporterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SvgImporterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SvgImporterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
