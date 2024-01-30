import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyProfilePopupComponent } from './modify-profile-popup.component';

describe('ModifyProfilePopupComponent', () => {
  let component: ModifyProfilePopupComponent;
  let fixture: ComponentFixture<ModifyProfilePopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModifyProfilePopupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModifyProfilePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
