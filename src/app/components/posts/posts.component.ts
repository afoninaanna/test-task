import { AuthService } from './../../services/auth.service';
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

    constructor(private postsService: PostsService, private router: Router, private authService: AuthService) {
        
    }

    ngOnInit(): void {
        this.postsService.getPosts().subscribe(posts => {
            this.posts = posts
        })
    }
    
    clickHandler(postId: number): void {
        this.router.navigate(['/post'], { queryParams: { id: postId }})
    }

    logOut(): void {
        this.authService.logout()
        this.router.navigate(['/auth'], { queryParams: { allowed: false } })
    }
}