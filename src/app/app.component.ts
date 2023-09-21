import { Component } from '@angular/core';
import * as moment from 'moment';
import { Moment } from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ui-bootstrap';

  testDate: Moment = moment();

  public get datetime(): Moment {
    return this.testDate;
  }

  setDate(date: string) {
    this.testDate = moment(date);
  }
}
