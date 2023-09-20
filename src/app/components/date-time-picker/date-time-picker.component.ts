import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbDate, NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';
import { NgbTime } from '@ng-bootstrap/ng-bootstrap/timepicker/ngb-time';
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

  pickerDate = new FormControl<NgbDate>(
    new NgbDate(this.date.year(), this.date.month(), this.date.day())
  );
  pickerTime = new FormControl<NgbTimeStruct>({
    hour: this.date.hour(),
    minute: this.date.minute(),
    second: 0,
  });

  isPopupVisible = false;

  constructor() {}

  ngOnInit(): void {}

  setDate() {
    const date = this.pickerDate.value!;
    const time = this.pickerTime.value!;
    this.date = moment(
      `${date.year}-${date.month}-${date.day} ${time.hour}:${time.minute}`,
      'yyyy-M-D H:m'
    );

    this.dateChange.emit(this.date);
  }

  toggleCalendarPopup() {
    this.isPopupVisible = !this.isPopupVisible;
  }
}
