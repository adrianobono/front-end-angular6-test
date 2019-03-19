import { Component, OnInit  } from '@angular/core';
import { Observable } from  "rxjs/Observable";
import { HttpClient } from '@angular/common/http';


class  Pearson {

  id : number;
  
  name: string;

  disclosableInfo: string;
  
  }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'front-end-angular6';
  hideme=[];
  public show:boolean = false;
  customersObservable : Observable<Pearson[]>;

  constructor (private http: HttpClient) {

  }

  ngOnInit() {

    this.customersObservable = this.http
    .get<Pearson[]>("http://localhost:8090/rest/people")
    
  }

  toggle() {
    this.show = !this.show;
  }
}
