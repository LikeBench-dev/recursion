import { Component, OnInit } from '@angular/core';
import {Event, EventStyle, EventTypes} from '../../services/event.models';
import {Data} from '@angular/router';
import {EventService} from '../../services/event.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {
  public data: Data | null = null;
  public loading = false;

  constructor(private eventService: EventService) {}

  public ngOnInit(): void {
    this.loadData();
  }

  public getEventStyle(event: Event): EventStyle {
    if (!this.data) { return; }

    const totalDuration =
        new Date(this.data.intervalDates.dateEnd).getTime() -
        new Date(this.data.intervalDates.dateStart).getTime();

    const eventStart =
        new Date(event.dateStart).getTime() -
        new Date(this.data.intervalDates.dateStart).getTime();

    const eventDuration =
        new Date(event.dateEnd).getTime() - new Date(event.dateStart).getTime();

    return {
      left: `${(eventStart / totalDuration) * 100}%`,
      width: `${(eventDuration / totalDuration) * 100}%`,
      backgroundColor: this.getEventColor(event.type),
    };
  }

  private getEventColor(type: EventTypes): string {
    switch (type) {
      case EventTypes.NORMAL:
        return 'green';
      case EventTypes.DANGEROUS:
        return 'orange';
      case EventTypes.CRITICAL:
        return 'red';
      default:
        return 'gray';
    }
  }

  private loadData(): void {
    this.loading = true;
    this.eventService.getData().subscribe(res => {
      this.data = res;
      this.loading = false;
    });
  }
}
