import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';
import { NgForm, FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidateNumbers, DateValidators, stringValidators } from './validators/number.validator';
import * as moment from 'moment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: []
})
export class AppComponent implements OnInit {
  constructor(private empService: EmployeeService, private router: Router) { }
  empData: any;
  empname2: string;
  salary2: string;
  profpic2: any;
  imagePreview: any;
  msg: string;
  updateMode = false;
  id: string;
  emp = {
    empname: '',
    dob: '',
    salary: ''
  }
  myDate = moment(new Date()).format('YYYY-MM-DD');
  formsRaect = new FormGroup({
    empname: new FormControl('basant', { validators: [Validators.required, stringValidators] }),
    salary: new FormControl('100000', { validators: [Validators.required, ValidateNumbers] }),
    dob: new FormControl('2019-12-12', { validators: [Validators.required, DateValidators] })
  });
  ngOnInit() {
    this.getEmp();
  }
  getEmp() {
    this.empService.getEmployeeData().subscribe((resp) => {
      this.empData = resp;
      this.empData = this.empData/* .slice(0, 10) */;
      console.log(this.empData);
    });
  }
  reactForm(form: FormGroup) {
    console.log('Reactive : ', this.formsRaect.value);
    this.formsRaect.reset();
  }
  getImage(event: Event) {
    const fr = new FileReader();
    fr.onload = () => {
      this.imagePreview = fr.result;
    }
    fr.readAsDataURL((event.target as HTMLInputElement).files[0]);
    // console.log(event);
  }
  addEmp(data: NgForm) {
    console.log(this.imagePreview);
    const emp = { 'name': data.value.empname || 'NA', 'salary': data.value.salary, 'age': '23' };
    console.log('Template Driven : ', data.value);
    if (!this.updateMode) {
      this.empService.addEmp(emp).subscribe((resp) => {
        this.imagePreview = '';
        this.msg = 'Record Addedd Successfully.';
        data.form.reset();
        this.getEmp();
      }, (error) => {
        console.log('Error : ', error);
      });
    } else {
      this.empService.updateEmp(this.id, emp).subscribe((resp) => {
        this.updateMode = false;
        data.form.reset();
        this.msg = 'Record Updated.';
        this.getEmp();
      });
    }
  }
  deleteEmp(id: string) {
    this.empService.deleteEmp(id).subscribe((resp) => {
      console.log(resp);
      this.getEmp();
      this.msg = 'Record deleted';
    }, (error) => {
      console.log(error);
    });
  }
  updateEmp(data: { employee_name: string, employee_salary: string, employee_age: string, profile_image: string, id: string }) {
    console.log(data);
    this.empname2 = data.employee_name;
    this.salary2 = data.employee_salary;
    this.updateMode = true;
    this.id = data.id;
  }
  removeImage() {
    this.imagePreview = '';
  }
  navigateByUrl() {
    this.router.navigateByUrl('/observeableExample');
  }
}
