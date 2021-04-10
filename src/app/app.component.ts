import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Doctors';
   id: number=0;
   changeNav(myid:number){
     this.id=myid
     console.log(myid)
   }
   onInit(){
     console.log("id",this.id)
   }
   constructor(){
    console.log("id",this.id)
    
   }
}
