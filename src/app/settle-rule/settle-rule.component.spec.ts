import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettleRuleComponent } from './settle-rule.component';

describe('SettleRuleComponent', () => {
  let component: SettleRuleComponent;
  let fixture: ComponentFixture<SettleRuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettleRuleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettleRuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
