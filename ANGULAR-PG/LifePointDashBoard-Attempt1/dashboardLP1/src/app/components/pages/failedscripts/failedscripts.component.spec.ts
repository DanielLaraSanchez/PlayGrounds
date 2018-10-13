import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FailedscriptsComponent } from './failedscripts.component';

describe('FailedscriptsComponent', () => {
  let component: FailedscriptsComponent;
  let fixture: ComponentFixture<FailedscriptsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FailedscriptsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FailedscriptsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
