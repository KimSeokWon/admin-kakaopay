import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';

interface SelectOption {
  value: string;
  code: string;
}
interface SettleRuleInformation {
  id: number;
  channelType: string;
  cid: string;
  paymentMethodType: string;
  description: string;
  businessScaleType: string;
  businessSectorType: string;
  factor: number;
  rate: number;
  currency: string;
  createdAt: Date;
  createdBy: string;
  updatedAt: Date;
  updatedBy: string;
  checked: boolean;
}

@Component({
  selector: 'app-settle-rule',
  templateUrl: './settle-rule.component.html',
  styleUrls: ['./settle-rule.component.scss'],
})
export class SettleRuleComponent implements OnInit {
  panelOpenState = false;
  allSelected = false;
  editEnabled = false;
  settleRule: SettleRuleInformation[] = [];

  constructor(private mainService: MainService) {
    this.initSettleRuleInformation();
  }

  ngOnInit(): void {
    this.mainService.changeTitle('Voyager > Settlement rule');
  }

  paymentMethodType: SelectOption[] = [
    { value: '전체', code: '*' },
    { value: '머니', code: 'MONEY' },
    { value: '카드', code: 'CARD' },
    { value: '알리페이', code: 'ALIPAY' },
  ];
  goHistory(evt: Event): void {
    evt.preventDefault();
    evt.stopPropagation();
  }

  initSettleRuleInformation() {
    for (var i = 0; i < 10; i++) {
      this.settleRule.push({
        id: i + 1,
        channelType: '오프라인',
        cid: 'C00000000' + i,
        paymentMethodType: '머니',
        description: '오프라인 정산룰',
        businessScaleType: 'NORMAL',
        businessSectorType: 'NORMAL',
        factor: 0.1,
        rate: 0.1,
        currency: 'KRW',
        createdAt: new Date(),
        createdBy: 'christian.kim',
        updatedAt: new Date(),
        updatedBy: 'christian.kim',
        checked: false,
      });
    }
  }

  selectedAll(checked: boolean = true) {
    this.settleRule.forEach((item) => {
      item.checked = !checked;
    });
    this.allSelected = !this.allSelected;
  }
  onChange(checked: boolean, i: number) {
    this.settleRule
      .filter((item) => item.id === i)
      .forEach((item) => (item.checked = checked));
  }

  onClick(evt: Event): void {
    evt.stopPropagation();
  }
  hasChecked(): boolean {
    return this.settleRule.filter((item) => item.checked).length > 0;
  }
  canEditable(): boolean {
    return this.settleRule.filter((item) => item.checked).length == 1;
  }
  isChecked(i: number): boolean {
    return this.settleRule.filter((item) => item.id === i)[0].checked;
  }
  isIntermediateChecked(): boolean {
    return (
      this.settleRule.filter((item) => item.checked).length > 0 &&
      this.settleRule.filter((item) => item.checked).length <
        this.settleRule.length
    );
  }
}
