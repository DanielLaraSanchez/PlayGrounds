import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyscriptsComponent } from './dailyscripts.component';

describe('DailyscriptsComponent', () => {
  let component: DailyscriptsComponent;
  let fixture: ComponentFixture<DailyscriptsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyscriptsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyscriptsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
