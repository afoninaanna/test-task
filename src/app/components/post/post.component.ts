import { PostsService } from './../../services/posts.service';
import { IPost } from './../../models/posts';
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.css']
})

export class PostComponent implements OnInit {
    post: IPost

    id: number

    constructor(private route: ActivatedRoute, private postsService: PostsService, private router: Router) {

    }

    ngOnInit(): void {
        this.route.queryParams.subscribe(param => this.id = param.id);
        this.postsService.getPost(this.id).subscribe(post => this.post = post);
    }

    clickHandler(): void {
        this.router.navigate(['/posts'])
    }
}