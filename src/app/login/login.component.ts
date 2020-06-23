import { Component, OnInit } from '@angular/core';
import { FacebookService } from '../services/facebook.service';
import { FormBuilder, FormGroup, Validators, FormControl } from "@angular/forms";
import { ActivatedRoute, Router } from '@angular/router';
import { cleanSession } from 'selenium-webdriver/safari';
import { IfStmt } from '@angular/compiler';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';


  constructor(private service: FacebookService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private _activatedRoute: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {

  }

  confirmUser() {

    this.service.AdminLogIn(this.username, this.password).subscribe(Response => {
      console.log(Response);
     // if(Response === '200')
    });

  }


  confirm(data) {

    this.service.Admin(data).subscribe(info => {
      console.log(info);
    }
    )
  }

}

