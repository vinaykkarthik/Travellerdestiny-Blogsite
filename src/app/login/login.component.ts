import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  template: `<div class="center mt-5 col-sm-4">
  <ng-template>
  <button class="tab-button" 
          >signin</button>
  <button class="tab-button" 
         >signup</button>
</ng-template>
  <div class="jumbotron">
  <div class="">
 
  <div class="">
  <div class="">
  <div class="">
  <form>
  <div class="col-form-group ">
    <label for="exampleInputEmail1" class=" containerstyle">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
    <small id="emailHelp" class="form-text text-muted">kindly enter a  valid email address!</small>
  </div>
  <div class="form-group mt-3">
    <label for="exampleInputPassword1"  class=" containerstyle">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
  </div>
  <!--div class="form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div-->

  <div class="col-4 center">
  <button  type="submit" class="btn btn-outline-info">Login</button></div>
</form>
  </div>
  </div>
  </div>
  </div>`,
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  homepageimage:string ="assets/images/IMG_5137.jpg";
}
