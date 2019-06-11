import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) {
    console.log(this.http);
  }
  httpOption = new HttpHeaders({ 'Content-Type': 'Application/json', 'Accept': 'Application/json' });
  getEmployeeData() {
    return this.http.get('http://dummy.restapiexample.com/api/v1/employees', { headers: this.httpOption });
  }

  addEmp(emp: any) {
    return this.http.post('http://dummy.restapiexample.com/api/v1/create', JSON.stringify(emp), { headers: this.httpOption });
  }
  deleteEmp(id: string) {
    return this.http.delete('http://dummy.restapiexample.com/api/v1/delete/' + id, { headers: this.httpOption });
  }
  updateEmp(id: string, emp: any) {
    return this.http.put('http://dummy.restapiexample.com/api/v1/update/' + id, JSON.stringify(emp), { headers: this.httpOption });
  }
}
