import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';
@Component({
  selector: 'app-partner',
  templateUrl: './partner.component.html',
  styleUrls: ['./partner.component.scss'],
})
export class PartnerComponent implements OnInit {
  constructor(private mainService: MainService) {}

  ngOnInit(): void {
    console.log('partner');
    this.mainService.changeTitle('파트너');
  }
}
