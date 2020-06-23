import { Component, OnInit } from '@angular/core';
import { FacebookService } from '../services/facebook.service';
import { FormBuilder, FormGroup, Validators, FormControl } from "@angular/forms";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title:string;
  content:string;

  
 public data:Array<{ title:string;
content:string}>= [];
 

  constructor(private service: FacebookService) { }
getPosts()
{
for(let r of this.data)
{
    this.service.getPost(r).subscribe(_=>{},error=>console.log(error));
    

  }
 
  }

  
  ngOnInit() {
    this.getPosts();
  }

}
