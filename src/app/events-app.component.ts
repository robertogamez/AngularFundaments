import { Component } from '@angular/core';
import { AuthService } from './user/auth.services';

@Component({
  selector: 'events-app',
  template: `
    <nav-bar></nav-bar>
    <router-outlet></router-outlet>
  `,
  styles: [`
    .nav.navbar-nav { font-size: 15px; }
    #searchForm { margin-left: 100px; }
    @media (max-width: 1200px) { #searchForm { display: none } }
  `]
})
export class EventsAppComponent {
  
  constructor(
    private auth: AuthService
  ) {

  }

  ngOnInit(){
    this.auth.checkAuthenticationStatus();
  }

}
