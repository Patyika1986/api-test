import { Component, OnInit } from '@angular/core';
import { DataTestService } from './data-test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  constructor(private dataTestService: DataTestService){

  }
  title = 'api-test';
datas:any[] = [];
  ngOnInit(): void {
  let list = this.dataTestService.getData().subscribe(data => {
this.datas = data;

  });
  
  }


}
