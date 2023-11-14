import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeModeTogglerComponent } from './theme-mode-toggler.component';

describe('ThemeModeTogglerComponent', () => {
  let component: ThemeModeTogglerComponent;
  let fixture: ComponentFixture<ThemeModeTogglerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThemeModeTogglerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThemeModeTogglerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
