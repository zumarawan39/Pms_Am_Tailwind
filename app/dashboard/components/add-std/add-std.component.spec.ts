import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStdComponent } from './add-std.component';

describe('AddStdComponent', () => {
  let component: AddStdComponent;
  let fixture: ComponentFixture<AddStdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddStdComponent]
    });
    fixture = TestBed.createComponent(AddStdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
