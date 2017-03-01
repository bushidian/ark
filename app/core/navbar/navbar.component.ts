import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'my-navbar',
    templateUrl: 'navbar.component.html'
})

export class NavbarComponent implements OnInit, OnDestroy {

    constructor(private router: Router){


    }
    
    ngOnInit() {

    }

    ngOnDestroy() {

    }

}