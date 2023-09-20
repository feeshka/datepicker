import { Component, EventEmitter, Input, OnInit } from '@angular/core';
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
  @Input() dateChange: EventEmitter<Moment> = new EventEmitter<Moment>();

  form = new FormGroup<any>({
    date: new FormControl(''),
    time: new FormControl(''),
  })

  constructor() { }

  ngOnInit(): void {
  }

}
