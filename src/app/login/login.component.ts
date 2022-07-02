import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
userName="admin";
password="admin";
name:string=''
key:string=""
nameError:string=''
passwordError:string=""

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
dataSubmit(){
  if(this.name==this.userName&&this.key==this.password){
    this.router.navigate(['']);
  }else{
    this.nameError="enter valid Data"
    this.passwordError="enter valid password"
  }
}
}
