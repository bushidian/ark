import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

import { ModalService, IModalContent } from '../core/modal/modal.service';
import { DataService } from '../core/services/data.service';
import { ICustomer, IState } from '../shared/interfaces';
import { GrowlerService, GrowlerMessageType } from '../core/growler/growler.service';

@Component({
  moduleId: module.id,
  selector: 'customer-edit',
  templateUrl: 'customer-edit.component.html'
})
export class CustomerEditComponent implements OnInit {

  customer: ICustomer = {
    _id: '',
    firstName: '',
    lastName: '',
    gender: '',
    address: '',
    email: '',
    city: '',
    state: {
        stateId: 0,
        abbreviation: '',
        name: ''
    },
    stateId: 0,
    zip: 0
  };
  states: IState[];
  errorMessage: string;
  deleteMessageEnabled: boolean;
  operationText: string = 'Insert';
  @ViewChild('customerForm') customerForm: NgForm;
  
  constructor(private router: Router, 
              private route: ActivatedRoute, 
              private dataService: DataService,
              private growler: GrowlerService,
              private modalService: ModalService) { }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    if (id !== '0') {
      this.operationText = 'Update';
      this.getCustomer(id);
    }

    this.getStates();
  }

  getCustomer(id: string) {
      this.dataService.getCustomer(id)
        .subscribe((customer: ICustomer) => {
          //Quick and dirty clone used in case user cancels out of form
          const cust = JSON.stringify(customer);
          this.customer = JSON.parse(cust);
        },
        (err: any) => console.log(err));
  }

  getStates() {
    this.dataService.getStates().subscribe((states: IState[]) => this.states = states);
  }
  
  submit() {

      if (this.customer._id) {

        this.dataService.updateCustomer(this.customer)
          .subscribe((customer: ICustomer) => {
            if (customer) {
              //Mark form as pristine so that CanDeactivateGuard won't prompt before navigation
              this.customerForm.form.markAsPristine();
              this.growler.growl('Operation performed successfully.', GrowlerMessageType.Success);
              this.router.navigate(['/customers']);
            } else {
              this.errorMessage = 'Unable to save customer';
            }
          },
          (err: any) => console.log(err));

      } else {

        this.dataService.insertCustomer(this.customer)
          .subscribe((customer: ICustomer) => {
            if (customer) {
              //Mark form as pristine so that CanDeactivateGuard won't prompt before navigation
              this.customerForm.form.markAsPristine();
              this.growler.growl('Operation performed successfully.', GrowlerMessageType.Success);
              this.router.navigate(['/customers']);
            }
            else {
              this.errorMessage = 'Unable to add customer';
            }
          },
          (err: any) => console.log(err));
          
      }
  }
  
  cancel(event: Event) {
    event.preventDefault();
    this.router.navigate(['/customers']);
  }

  delete(event: Event) {
    event.preventDefault();
    this.dataService.deleteCustomer(this.customer._id)
        .subscribe((status: boolean) => {
          if (status) {
            this.router.navigate(['/customers']);
          }
          else {
            this.errorMessage = 'Unable to delete customer';
          }
        },
        (err) => console.log(err));
  }

  canDeactivate(): Promise<boolean> | boolean {
    if (!this.customerForm.dirty) {
      return true;
    }

    //Dirty show display modal dialog to user to confirm leaving
    const modalContent: IModalContent = {
      header: 'Lose Unsaved Changes?',
      body: 'You have unsaved changes! Would you like to leave the page and lose them?',
      cancelButtonText: 'Cancel',
      OKButtonText: 'Leave'
    }
    return this.modalService.show(modalContent);
  }

}