import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule }  from "@angular/common/http";
import { FormsModule, FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

import { AppComponent } from './app.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PostsComponent } from './posts/posts.component';
import { MessagesComponent } from './messages/messages.component';
import { CommentsComponent } from './comments/comments.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { LayoutLoginComponent } from './layout-login/layout-login.component';
import { LayoutHomeComponent } from './layout-home/layout-home.component';

@NgModule({
  declarations: [
    AppComponent,
    CreatePostComponent,
    SidebarComponent,
    PostsComponent,
    MessagesComponent,
    CommentsComponent,
    AboutMeComponent,
    DashboardComponent,
    LoginComponent,
    LayoutLoginComponent,
    LayoutHomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
