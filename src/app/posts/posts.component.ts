import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service'
import { Router } from "@angular/router";
import { Post } from '../post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Post[];

  constructor(public router: Router, private http: HttpService) { }

  ngOnInit() {
    this.http.getPosts()
      .subscribe(posts => console.log(posts));
  }

  navigateToCreatePost() {
    this.router.navigate(['/create-post'])
  }

}
