import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingscriptsComponent } from './pendingscripts.component';

describe('PendingscriptsComponent', () => {
  let component: PendingscriptsComponent;
  let fixture: ComponentFixture<PendingscriptsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendingscriptsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingscriptsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
