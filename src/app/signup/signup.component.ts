import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  template: `
  <div>
     <div class="row">
     <div class="col-sm-md-xl-lg-6">
     <form>
     <div class="form-group">
    <label for="firstname">First Name</label>
    <input type="text" class="form-control" id="firstname"  placeholder="Enter your first name">
    
  </div>
  <div class="form-group">
    <label for="last name">Last Name</label>
    <input type="text" class="form-control" id="lastname" placeholder="Enter your last name">
    
  </div>
 
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1"  placeholder="Enter email">
    
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="password" class="form-control" id="confirmpassword" placeholder="confirm Password">
    
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="reconfirmpassword" placeholder="Re-Confirm Password">
  </div>
 
  <button  (click)="registerfunction()" type="submit" class="btn btn-secondary">Register</button>
</form>
     
     </div>

     </div>
  </div>
  `,
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
registerfunction(){
  alert('hai')
}
}
