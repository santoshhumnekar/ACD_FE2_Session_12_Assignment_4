import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
   friends:any = [
     
     {name: 'Avnesh', hobby: 'Coding'},
     {name: 'Archana', hobby: 'Cooking'},
     {name: 'Piyush', hobby: 'Singing'},
     {name: 'Archit', hobby: 'Sports'},
     {name: 'Hema', hobby: 'gossiping'}
     
     ];

}
