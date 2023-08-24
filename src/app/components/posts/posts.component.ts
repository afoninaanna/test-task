import { PostsService } from './../../services/posts.service';
import { IPost } from './../../models/posts';
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
    selector: 'posts',
    templateUrl: './posts.component.html',
    styleUrls: ['./posts.component.css']
})

export class PostsComponent implements OnInit {
    displayedColumns: string[] = ['userId', 'id', 'title', 'body'];

    posts: IPost[] = [];

    constructor(private postsService: PostsService, private router: Router) {
        
    }

    ngOnInit(): void {
        this.postsService.getPosts().subscribe(posts => {
            this.posts = posts
        })
    }
    
    clickHandle(postId: number) {
        this.router.navigate(['/post'], { queryParams: { id: postId }})
    }
}