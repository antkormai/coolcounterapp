import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  counter = 0;
  decreaseDisabledFlag = false

  increase() {
    this.counter++;
  }

  decrease() {
    this.counter--;
  }
}
