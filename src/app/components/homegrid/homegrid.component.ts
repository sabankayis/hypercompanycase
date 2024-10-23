import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { addEmployee } from '../../employee.action';
import { EmployeeModel } from '../../models/employee.model';
import { CommonModule } from '@angular/common';
import { ListComponent } from '../list/list.component';

@Component({
  selector: 'app-homegrid',
  standalone: true,
  imports: [RouterModule, FormsModule, CommonModule, ListComponent],
  templateUrl: './homegrid.component.html',
  styleUrl: './homegrid.component.css'
})
export class HomegridComponent {
  employees: EmployeeModel[] = [];
  // employee:EmployeeModel = new EmployeeModel();
  addModel = new EmployeeModel();

  //initial state'tim ile oluşturduğum employees eşitledim.
  constructor(
    private router: Router,
    private store: Store<{ employees: EmployeeModel[] }>
  ) {
    this.store.select('employees').subscribe((res) => {
      this.employees = [...res];
    });
  }

  save(form: NgForm) {
    if (form.valid) {
      this.employees.push(this.addModel);
      this.store.dispatch(addEmployee({ employee: this.addModel }));
      alert("consolda görebilirsiniz. initial State'dede eklendi! ")
      console.log(this.employees);
      this.router.navigate(['/list']);
    }
  }
  
  cancel(form: NgForm) {
    if (!form.valid) {
      form.reset();
    }
  }
  isModelEmpty(): boolean {
    return (
      !this.addModel.name &&
      !this.addModel.email &&
      !this.addModel.profession &&
      !this.addModel.phoneNumber
    );
  }
}
