import { Component, OnInit } from '@angular/core';
import { FacebookService } from '../services/facebook.service';
import { FormControl, Validators, FormGroup } from '@angular/forms';


class Post{
  id: number;
  content: string;
  comments?: string[];
}

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  //validation
  validatingForm: FormGroup;

  // name: string = '';
  // message: string = '';
  // email:string='';

id=  0;
//post:string='';
posts : Post[] = [];
comment: string;
public oneAtTime: boolean=true;


constructor(private service: FacebookService) { }

  
//   add_post(){
//   this.service.addPost(this.validatingForm.value).subscribe(res =>{
// this.posts.push(this.validatingForm.value);
// console.log(this.validatingForm)
//     console.log(res)
//   });
//   }
 //data type
 title: any;
 name: any;
 content: any;
 message = '';


//posts array
post = [];


  //function for creating data
  addModalForm(title, content){
    this.service.addPost(this.title,this.content).subscribe(post=>
      {
        console.log(post)
      })
    console.log([this.title ,this.content]),
    this.post.push({ title: this.title  ,content: this.content})
  }
 
delete_post(i){


}
// Add comments
add_comment(i,comment){
  this.posts[ i ].comments.push( comment.value );
  this.comment= '';
  console.log(this.posts[i]);
}

//Delete comments
delete_comment(i,comment){
  this.posts[ i ].comments.pop();
  this.comment= '';
  console.log( i );
}

  ngOnInit() {
  }

  //Like and dislike button
  numberOfLikes: number = 0;
  likeButtonClick()
  {
    this.numberOfLikes++;
  }
  dislikeButtonClick()
  {
    this.numberOfLikes--;
  }





}








