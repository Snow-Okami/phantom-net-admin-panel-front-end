import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

//Angular Http module
import { HttpClientModule }  from "@angular/common/http";
//Angular Form Modules
import { FormsModule, FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

//App Router
import { RoutesModule } from './modules/routes/routes.module';
//All Components
import { CreatePostComponent } from './components/create-post/create-post.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { PostsComponent } from './components/posts/posts.component';
import { MessagesComponent } from './components/messages/messages.component';
import { CommentsComponent } from './components/comments/comments.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    CreatePostComponent,
    SidebarComponent,
    PostsComponent,
    MessagesComponent,
    CommentsComponent,
    AboutMeComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
    ReactiveFormsModule,
    HttpClientModule,
    RoutesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
