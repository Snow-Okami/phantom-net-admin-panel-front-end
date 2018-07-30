import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { PostsComponent } from './posts/posts.component';
import { MessagesComponent } from './messages/messages.component';
import { CommentsComponent } from './comments/comments.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes : Routes = [
	{ path: '', component: DashboardComponent, pathMatch: 'full' },
	{ path: 'login', component: LoginComponent },
	{ path: 'dashboard', component: DashboardComponent },
	{ path: 'posts', component: PostsComponent },
	{ path: 'comments', component: MessagesComponent },
	{ path: 'messages', component: CommentsComponent },
	{ path: 'aboute-me', component: AboutMeComponent },
	{ path: 'create-post', component: CreatePostComponent },
	{ path: '**', component: DashboardComponent, pathMatch: 'full' },
]

@NgModule({
  imports: [
		RouterModule.forRoot(routes)
  ],
  exports : [ RouterModule ]
})
export class AppRoutingModule {

}
