import { Component } from '@angular/core';
import { AuthService } from '../user/auth.services';

@Component({
    selector: 'nav-bar',
    templateUrl: './nav-bar.component.html',
    styles: [`
        li > a.active { color: #F97924; }
    `]
})
export class NavBarComponent {
    constructor(public auth: AuthService){
        
    }
}