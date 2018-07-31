import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './auth-guard.service';
import { KeepLoggedinService } from './keep-loggedin.service';

import { LayoutHomeComponent } from './layout-home/layout-home.component';
import { LayoutLoginComponent } from './layout-login/layout-login.component';
import { LoginComponent } from './login/login.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { PostsComponent } from './posts/posts.component';
import { MessagesComponent } from './messages/messages.component';
import { CommentsComponent } from './comments/comments.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes : Routes = [
	{
    path: '',
    component: LayoutHomeComponent,
    canActivate: [AuthGuardService],
    children: [
			{ path: '', component: DashboardComponent, pathMatch: 'full' },
			{ path: 'posts', component: PostsComponent },
			{ path: 'comments', component: MessagesComponent },
			{ path: 'messages', component: CommentsComponent },
			{ path: 'aboute-me', component: AboutMeComponent },
			{ path: 'create-post', component: CreatePostComponent },
			{ path: 'dashboard', redirectTo: '' },
    ]
	},
	{
    path: '',
    component: LayoutLoginComponent,
    canActivate: [KeepLoggedinService],
    children: [
      { path: 'login', component: LoginComponent },
    ]
  },
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
