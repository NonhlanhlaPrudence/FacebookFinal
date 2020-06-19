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

  id=  0;
post:string='';
posts : Post[] = [];
comment: string;
public oneAtTime: boolean=true;

constructor(private service: FacebookService) { }

  add_post(){
    console.log(this.post );

    let myLocalPost = {
      id: ++this.id,
      content: this.post,
      comments: []
    }
    
    this.posts.push( myLocalPost );
   
  }
 
delete_post(i){


}
add_comment(i,comment){
  this.posts[ i ].comments.push( comment.value );
  this.comment= '';
  console.log(this.posts[i]);
}

delete_comment(i,comment){
  this.posts[ i ].comments.pop();
  this.comment= '';
  console.log( i );
}

  ngOnInit() {

    this.validatingForm = new FormGroup({
      contactFormModalName: new FormControl('', Validators.required),
      contactFormModalEmail: new FormControl('', Validators.email),
      contactFormModalSubject: new FormControl('', Validators.required),
      contactFormModalMessage: new FormControl('', Validators.required)
    });
  }
  numberOfLikes: number = 0;
  likeButtonClick()
  {
    this.numberOfLikes++;
  }
  dislikeButtonClick()
  {
    this.numberOfLikes--;
  }




  get contactFormModalName() {
    return this.validatingForm.get('contactFormModalName');
  }

  get contactFormModalEmail() {
    return this.validatingForm.get('contactFormModalEmail');
  }

  get contactFormModalSubject() {
    return this.validatingForm.get('contactFormModalSubject');
  }

  get contactFormModalMessage() {
    return this.validatingForm.get('contactFormModalMessage');
  }

}








