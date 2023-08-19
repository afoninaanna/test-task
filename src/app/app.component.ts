import { IPost } from './models/posts';
import { Component } from '@angular/core';
import { posts as data } from './data/posts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-test-task';
  posts: IPost[] = data;
}
