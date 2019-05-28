import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyHistoryComponent } from './monrthly-history.component';

describe('MonthlyHistoryComponent', () => {
  let component: MonthlyHistoryComponent;
  let fixture: ComponentFixture<MonthlyHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthlyHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthlyHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
