import { authGuard } from './guards/auth.guard';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from './modules/material.module';
import { PostComponent } from './components/post/post.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsComponent } from './components/posts/posts.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthComponent } from './components/auth/auth.component';

const appRoutes: Routes = [
  { path: '', component: AuthComponent },
  { path: 'post', component: PostComponent, canActivate: [authGuard] },
  { path: 'posts', component: PostsComponent, canActivate: [authGuard] }
]
@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    PostComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
