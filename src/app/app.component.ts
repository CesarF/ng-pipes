import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name:string = "César";
  array:number[] = [1,2,3,4,5,6,7,8,9,10];
  num:number = Math.PI;
  decimal:number = 0.187;
  money:number = 3489.56;
}
