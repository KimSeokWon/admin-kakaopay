import { Component } from '@angular/core';
import { MainService } from './main.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  showFiller = false;

  title: string = 'Main';

  constructor(private mainService: MainService) {
    this.mainService.onChangeTitle.subscribe((str) => (this.title = str));
  }
}
