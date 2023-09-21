import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbDate, NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';

@Component({
  selector: 'app-date-time-picker',
  templateUrl: './date-time-picker.component.html',
  styleUrls: ['./date-time-picker.component.scss'],
})
export class DateTimePickerComponent implements OnInit {
  @Input() date: string = moment().format('DD-MM-yyyy HH:mm');
  @Output() dateChange: EventEmitter<string> = new EventEmitter<string>();

  private currentDate = moment();

  pickerDate = new NgbDate(
    this.currentDate.year(),
    this.currentDate.month(),
    this.currentDate.day()
  );
  pickerTime: NgbTimeStruct = {
    hour: this.currentDate.hour(),
    minute: this.currentDate.minute(),
    second: 0,
  };

  isPopupVisible = false;

  constructor() { }

  ngOnInit(): void { }

  toggleCalendarPopup(canSetNewDate: boolean) {
    this.isPopupVisible = !this.isPopupVisible;

    if (canSetNewDate) {
      this.setDate();
    }
  }

  logDateValue() {
    console.log(this.date);
  }

  private setDate() {
    const date = this.pickerDate;
    const time = this.pickerTime;
    this.date = moment(
      `${date.year}-${date.month}-${date.day} ${time.hour}:${time.minute}`,
      'yyyy-M-D H:m'
    ).format('DD-MM-yyyy HH:mm');

    this.dateChange.emit(this.date);
  }
}
