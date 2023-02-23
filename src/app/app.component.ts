import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import {User} from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[HttpService]

})
export class AppComponent{
  user: User =new User("","");
  receivedMess:string|undefined;
  done:boolean=false;
  users:User[]=[];

  constructor(private httpService:HttpService){}

  submit(user:User){
    this.httpService.postData(user).subscribe(
      (data:any)=>{this.receivedMess=data;this.done=true;},
      error=>console.error()
    )
  }
}
