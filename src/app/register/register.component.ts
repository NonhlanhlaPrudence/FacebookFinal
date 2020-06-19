import { Component, OnInit } from '@angular/core';
import { FacebookService } from '../services/facebook.service';
import { FormBuilder, FormGroup, Validators, FormControl } from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

 
   email:string= '';
   username:string='';
   password: string='';

   constructor(private service: FacebookService ){ }
 
 
   //Registering an individual
   Register()
   {
    console.log('user added');
     this.service.PostRegister(this.username,this.email,this.password).subscribe(data =>
      {
        console.log(data);
      })
 
     }
 
   
   ngOnInit() {
    
   }
 

}
