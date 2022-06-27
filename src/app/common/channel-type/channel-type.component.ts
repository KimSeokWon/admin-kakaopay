import { Component, OnInit } from '@angular/core';

interface SelectOption {
  value: string;
  code: string;
  default: boolean;
}

@Component({
  selector: 'app-channel-type',
  templateUrl: './channel-type.component.html',
  styleUrls: ['./channel-type.component.scss'],
})
export class ChannelTypeComponent implements OnInit {
  channelTypes: SelectOption[] = [
    { value: '전체', code: 'ALL', default: true },
    { value: '오프라인', code: 'QUATTRO', default: false },
    { value: '오프라인 글로벌', code: 'QUATTRO_GLOBAL', default: false },
    { value: '온라인 글로벌', code: 'GLOBAL_ONLINE', default: false },
    { value: 'QR택시', code: 'QR_TAXI', default: false },
    { value: 'GKA', code: 'GKA', default: false },
  ];
  selectedValue?: string;

  ngOnInit(): void {
    this.channelTypes
      .filter((item) => item.default)
      .forEach((item) => {
        this.selectedValue = item.code;
      });
  }
}
