import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FacebookService {


  register_url = "http://10.1.0.96:4000/user_reg";
  url = "http://10.1.0.96:4000/all";
  login_url = "http://10.1.0.96:4000/user_login";
  post_url = "http://10.1.0.96:4000/user_posts";
  get_url = "http://10.1.0.96:4000/posts";

  constructor(private http: HttpClient) { }

  public PostRegister(email, username, password) {

    return this.http.post(this.register_url, { email, username, password });

  }

  public AdminLogIn(username, password) {
    return this.http.post<any>(this.login_url, { username, password });
  }

  public addPost(title,content) {
    return this.http.post<any>(this.post_url,{title,content});
  }


  public getPost(details) {
    console.log(details);
    return this.http.post<any>(this.get_url,details);
   
  }

  public Admin(username) {
    return this.http.get<any>(this.url + username);
  }

}
