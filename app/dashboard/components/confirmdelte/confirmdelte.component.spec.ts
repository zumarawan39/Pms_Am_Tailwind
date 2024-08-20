import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmdelteComponent } from './confirmdelte.component';

describe('ConfirmdelteComponent', () => {
  let component: ConfirmdelteComponent;
  let fixture: ComponentFixture<ConfirmdelteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfirmdelteComponent]
    });
    fixture = TestBed.createComponent(ConfirmdelteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
