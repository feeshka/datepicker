import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbDate, NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';
import { Moment } from 'moment';

@Component({
  selector: 'app-date-time-picker',
  templateUrl: './date-time-picker.component.html',
  styleUrls: ['./date-time-picker.component.scss'],
})
export class DateTimePickerComponent implements OnInit {
  @Input() date: Moment = moment();
  @Output() dateChange: EventEmitter<Moment> = new EventEmitter<Moment>();

  pickerDate = new NgbDate(
    this.date.year(),
    this.date.month(),
    this.date.day()
  );
  pickerTime: NgbTimeStruct = {
    hour: this.date.hour(),
    minute: this.date.minute(),
    second: 0,
  };

  isPopupVisible = false;

  constructor() {}

  ngOnInit(): void {}

  toggleCalendarPopup() {
    this.isPopupVisible = !this.isPopupVisible;
    this.setDate();
  }

  private setDate() {
    const date = this.pickerDate;
    const time = this.pickerTime;
    this.date = moment(
      `${date.year}-${date.month}-${date.day} ${time.hour}:${time.minute}`,
      'yyyy-M-D H:m'
    );

    this.dateChange.emit(this.date);
  }
}
