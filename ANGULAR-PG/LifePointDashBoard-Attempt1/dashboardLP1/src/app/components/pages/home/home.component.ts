import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  datas$: Object;
  constructor(private data: DataService) {
  }


  ngOnInit() {
    let mydata = [];
    this.data.getData().subscribe(
      data1 => this.datas$ = data1
    // data1 => mydata.push(data1)

    );





}



}
