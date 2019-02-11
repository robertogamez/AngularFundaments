import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.services';
import { ToastrService } from '../common/toastr.services';

@Component({
  templateUrl: './events-list.component.html'
})
export class EventsListComponent implements OnInit {

  events: any[];

  constructor(
    private eventService: EventService,
    private toastr: ToastrService
  ) {
    
  }

  ngOnInit(){
    this.events = this.eventService.getEvents();
  }

  handleThumbnailClick(eventName){
    this.toastr.success(eventName);
  }
}