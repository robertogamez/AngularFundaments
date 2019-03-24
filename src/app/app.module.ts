import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import {
  EventsListComponent,
  EventThumbnailComponent,
  EventService,
  EventDetailsComponent,
  CreateEventComponent,
  EventRouteActivator,
  EventListResolver,
  CreateSessionComponent,
  SessionListComponent,
  UpvoteComponent,
  DurationPipe,
  VoterService
} from "./events/index";

import { EventsAppComponent } from "./events-app.component";
import { NavBarComponent } from "./nav/navbar.component";

import { 
  TOASTR_TOKEN, 
  Toastr, 
  JQ_TOKEN ,
  CollapsibleWellComponent,
  SimpleModalComponent,
  ModalTriggerDirective
} from "./common";
import { RouterModule } from "@angular/router";
import { appRoutes } from "./routes";
import { Error404Component } from "./errors/404.component";
import { AuthService } from "./user/auth.services";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { UserModule } from "./user/user.module";

let toastr: Toastr = window['toastr'];
let jQuery = window['$'];

@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventDetailsComponent,
    CreateEventComponent,
    EventThumbnailComponent,
    NavBarComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    SimpleModalComponent,
    UpvoteComponent,
    DurationPipe,
    ModalTriggerDirective
  ],
  providers: [
    EventService,
    { provide: TOASTR_TOKEN, useValue: toastr },
    { provide: JQ_TOKEN, useValue: jQuery },
    EventRouteActivator,
    EventListResolver,
    AuthService,
    VoterService,
    { provide: "canDeactiveCreateEvent", useValue: checkDirtyState }
  ],
  imports: [
    BrowserModule, 
    FormsModule, 
    ReactiveFormsModule, 
    UserModule,
    RouterModule.forRoot(appRoutes)],
  bootstrap: [EventsAppComponent]
})
export class AppModule {}

export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty) {
    return window.confirm(
      "You have not saved this event, do you really want to cancel?"
    );
  }

  return true;
}
