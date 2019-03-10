import { Component, OnInit, Inject } from '@angular/core';
import { EventService } from './shared/event.services';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from './shared';
import { TOASTR_TOKEN, Toastr } from '../common/toastr.services';

@Component({
  templateUrl: './events-list.component.html'
})
export class EventsListComponent implements OnInit {

  events: IEvent[];

  constructor(
    private eventService: EventService,
    private route: ActivatedRoute,
    @Inject(TOASTR_TOKEN) private toastr: Toastr
  ) {
    
  }

  ngOnInit(){
    this.events = this.route.snapshot.data["events"];
    this.toastr.success('Profile Saved');
  }
}