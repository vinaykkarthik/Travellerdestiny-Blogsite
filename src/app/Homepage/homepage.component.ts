import { Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../signup/signup.component';

@Component({
  selector: 'app-homepage',
  template: `
  <div >
  <span class="font-weight-light"> 
  <h1 class="jumbotron text-center text-secondary pt-5"> Traveller Destiny </h1>
   </span>
      </div>
      <div class="container">
      <div class="jumbotron col-12">
      <div class="  rounded  col-12 d-flex justify-content-center  row mt-3 text-center">
         <div class="col-sm-md-lg-xl-12">
           <span  (click)="OpenSignUpComponent()" class='mt-3 btn btn-light btn btn btn-outline-info' ><span >REGISTER</span></span>
         </div>
         <div class="col-sm-md-lg-xl-12">
           <span  (click)="OpenLoginComponent()" class='mt-5  mb-5 btn btn-light btn btn btn-outline-info' >LOGIN</span>
         </div>
         <span class="text-align-center">forgot password ? <a href="https://www.google.co.in/" class="link-primary">Click Here to reset the password</a></span>

      </div>
      </div>
      </div>
  
  
  
  
  
  
  
  `,
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private dialogrefcall:MatDialog) { }

  ngOnInit(): void {
  }
  
  
  OpenLoginComponent(){
    this.dialogrefcall.open(LoginComponent);
   
  }
  OpenSignUpComponent(){
    this.dialogrefcall.open(SignupComponent);
    
  }

 

}
