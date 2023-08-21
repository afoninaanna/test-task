import { IPost } from './../../models/posts';
import { Component, Input } from "@angular/core";

@Component({
    selector: 'posts',
    templateUrl: './posts.component.html',
    styleUrls: ['./posts.component.css']
})

export class PostsComponent {
    @Input() posts: IPost[];
    displayedColumns: string[] = ['userId', 'id', 'title', 'body'];
}