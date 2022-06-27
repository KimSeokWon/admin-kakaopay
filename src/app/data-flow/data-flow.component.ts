import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';
@Component({
  selector: 'app-data-flow',
  templateUrl: './data-flow.component.html',
  styleUrls: ['./data-flow.component.scss'],
})
export class DataFlowComponent implements OnInit {
  constructor(private mainService: MainService) {}

  ngOnInit(): void {
    this.mainService.changeTitle('Monitering > Job flow');
  }
}
