import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import * as moment from 'moment';
import { Moment } from 'moment';

@Component({
  selector: 'app-date-time-picker',
  templateUrl: './date-time-picker.component.html',
  styleUrls: ['./date-time-picker.component.scss']
})
export class DateTimePickerComponent implements OnInit {

  @Input() date: Moment = moment();
  @Output() dateChange: EventEmitter<Moment> = new EventEmitter<Moment>();

  form = new FormGroup<any>({
    date: new FormControl(''),
    time: new FormControl(''),
  })

  constructor() { }

  ngOnInit(): void {
  }

  setDate() {
    console.log('date', this.form.value.date);
    console.log('time', this.form.value.time);
    const date = this.form.value.date;
    const time = this.form.value.time;
    this.date = moment(`${date.month}`, "MM-DD-YYYY");;
  }

}
