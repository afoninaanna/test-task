import { PostsService } from './services/posts.service';
import { IPost } from './models/posts';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angular-test-task';
  posts: IPost[] = [];

  constructor(private postsService: PostsService) {

  }

  ngOnInit(): void {
    this.postsService.getPosts().subscribe(posts => {
      this.posts = posts 
    })
  }
}
