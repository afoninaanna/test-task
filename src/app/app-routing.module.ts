import { NotFoundComponent } from './components/not-found/not-found.component';
import { PostsComponent } from './components/posts/posts.component';
import { authGuard } from './guards/auth.guard';
import { PostComponent } from './components/post/post.component';
import { AuthComponent } from './components/auth/auth.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'auth', component: AuthComponent },
  { path: '', redirectTo: '/auth', pathMatch: 'full' },
  { path: 'posts', component: PostsComponent },
  { path: 'post', component: PostComponent, canActivate: [authGuard] },

  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
