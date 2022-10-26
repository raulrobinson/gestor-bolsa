import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavItemMenuComponent } from './sidenav-item-menu.component';

describe('SidenavItemMenuComponent', () => {
  let component: SidenavItemMenuComponent;
  let fixture: ComponentFixture<SidenavItemMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidenavItemMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidenavItemMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
