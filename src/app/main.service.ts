import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MainService {
  public onChangeTitle: EventEmitter<string> = new EventEmitter();

  public changeTitle(title: string) {
    this.onChangeTitle.emit(title);
  }
}
