import { Injectable } from '@angular/core';
import {Data, EventTypes} from './event.models';
import {Observable, of} from 'rxjs';
import {delay} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  private data: Data = {
    events: [
      {
        dateStart: '2022-01-01T01:00:00',
        dateEnd: '2022-01-01T02:00:00',
        type: EventTypes.CRITICAL,
      },
      {
        dateStart: '2022-01-01T08:21:00',
        dateEnd: '2022-01-01T14:44:11',
        type: EventTypes.DANGEROUS,
      },
      {
        dateStart: '2022-01-01T22:11:00',
        dateEnd: '2022-01-01T23:50:00',
        type: EventTypes.NORMAL,
      },
    ],
    intervalDates: {
      dateStart: '2022-01-01T00:00:00',
      dateEnd: '2022-01-02T00:00:00',
    },
  };

  public getData(): Observable<Data> {
    return of(this.data).pipe(delay(600 + Math.random() * 400));
  }
}
