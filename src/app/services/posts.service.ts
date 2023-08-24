import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { IPost } from '../models/posts';


@Injectable({
    providedIn: 'root'
})
export class PostsService {
    constructor( private http: HttpClient) {

    }

    getPosts(): Observable<IPost[]> {
        return this.http.get<IPost[]>(`https://jsonplaceholder.typicode.com/posts`)
    }

    getPost(queryParam: number = 0): Observable<IPost> {
        return this.http.get<IPost>(`https://jsonplaceholder.typicode.com/posts/${queryParam || ""}`)
    }
}