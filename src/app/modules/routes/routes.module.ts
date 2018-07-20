import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

//Components
import { CreatePostComponent } from '../../components/create-post/create-post.component';
import { PostsComponent } from '../../components/posts/posts.component';
import { MessagesComponent } from '../../components/messages/messages.component';
import { CommentsComponent } from '../../components/comments/comments.component';
import { AboutMeComponent } from '../../components/about-me/about-me.component';
import { DashboardComponent } from '../../components/dashboard/dashboard.component';

const routes : Routes = [
	{ path : '', component : DashboardComponent },
	{ path : 'dashboard', component : DashboardComponent },
	{ path : 'posts', component : PostsComponent },
	{ path : 'comments', component : MessagesComponent },
	{ path : 'messages', component : CommentsComponent },
	{ path : 'aboute-me', component : AboutMeComponent },
	{ path : 'create-post', component : CreatePostComponent }
]

@NgModule({
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
  exports : [ RouterModule ],
  declarations: []
})
export class RoutesModule { }
