import { Component,  OnInit } from '@angular/core';
import { Directive } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../signup/signup.component';
import { EventEmitter } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-homepage',
  template: `<div class="container1">
  <div class="jumbotron mt-5 d-flex">
<span class="col-sm-xl-lg-6  pb-5"><h1>Welcome to Traveller destiny ..!</h1> 
  <pre class="mt-5 pr-5">        Here You may check the details of the Tourist places near by your location
      exact things need to cover with during your journey this website
      will provide you all the necessary things that you want regarding the details
      of the tourist spot.best place to visit all those things
      will be displayed and plan accordingly have a great journey ahead</pre>
          </span>

          <span class="col-sm-xl-lg-6  pb-5">
           <h1>Explore the Unexplored places ...! </h1> 
           
           <pre class="mt-5 pr-5">
            check your location and grab the details of the nearby tourist spot...!
              </pre>
          </span>
</div> 
</div>   




<div class="text-center">
 <h4 class="center mt-5">CHECK YOUR LOCATION </h4>

 <div>
 <div class="mt-3">
  <form class="example" style="margin:auto;max-width:300px">
      <input type="text" placeholder="ENTER THE LOCATION" name="search2"> 
      
      
      
    </form>
    <button class="mt-4" mat-button>
     
      SEARCH  
  </button>
  </div>
  <div>
  
</div>
</div>` ,
  

})
export class HomepageComponent implements OnInit {

  constructor(private dialogrefcall:MatDialog) { }
  OpenLoginComponent1 = new EventEmitter<any>().emit;
  OpenLoginComponent(){
  
   this.dialogrefcall.open(LoginComponent);
  
  }
 OpenSignUpComponent(){
   this.dialogrefcall.open(SignupComponent);
   
 }
  ngOnInit() : void {
    
  }
  
  
 
 

}
