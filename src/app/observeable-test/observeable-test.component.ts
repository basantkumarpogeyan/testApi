import { Component, OnInit } from '@angular/core';
import { Observable, interval, Subject } from 'rxjs';

@Component({
  selector: 'app-observeable-test',
  templateUrl: './observeable-test.component.html',
  styleUrls: ['./observeable-test.component.css']
})
export class ObserveableTestComponent {
  constructor() { }
  time: Observable<any> = new Observable((observer) => {
    setInterval(() => {
      observer.next(new Date().toString());
      this.date.next('Hi' + new Date().toString());
      this.getUpdate().subscribe((res) => {
        //console.log(res);
      });
    }, 1000);
  });
  date = new Subject();
  getUpdate() {
    return this.date.asObservable();
  }


}
