import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ICustomer } from '../shared/interfaces';

@Component({ 
  moduleId: module.id,
  selector: 'my-customers', 
  templateUrl: 'customers.component.html'
})

export class CustomersComponent implements OnInit {
     
     title: string;
     customers: ICustomer[] = [];
     
     ngOnInit(){
         
     }

}