import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyHistoryComponent } from './daily-history.component';

describe('WeatherComponent', () => {
  let component: DailyHistoryComponent;
  let fixture: ComponentFixture<DailyHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
