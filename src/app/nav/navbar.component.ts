import { Component } from '@angular/core';
import { AuthService } from '../user/auth.services';
import { ISession, EventService } from '../events';

@Component({
    selector: 'nav-bar',
    templateUrl: './nav-bar.component.html',
    styles: [`
        li > a.active { color: #F97924; }
    `]
})
export class NavBarComponent {

    searchTerm: string;
    foundSessions: ISession[];

    constructor(
        public auth: AuthService,
        private eventService: EventService
    ){
        
    }

    searchSessions(searchTerm){
        this.eventService.searchSessions(searchTerm).subscribe(
            sessions => {
                this.foundSessions = sessions;
                console.log(this.foundSessions);
            }
        )
    }
}