import { Component, OnInit, Input } from '@angular/core';

//Angular Form Modules
import { FormsModule, FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

class addNewPostFormObj {
  postTitle : string;
  uploadFile : any;
  postDescription : any;
  postTags : any;
  postPublishing : any
}

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  @Input() addNewPostForm = new addNewPostFormObj();
  title :string = 'Add New Post';
  // Form Data
  addPostForm : FormGroup;
  postTitle : FormControl;
  file : FormControl;
  uploadFile : FormControl;
  postDescription : FormControl;
  postTags : FormControl;
  postPublishing : FormControl;


  disabledSaveBtn : boolean = true;

  constructor() {
    this.createFormControls();
    this.createForm();
  }

  ngOnInit() {

  }

  createFormControls() {
    this.postTitle = new FormControl('', [ Validators.required ]);
    this.uploadFile = new FormControl('', [ Validators.required ]);
    this.postDescription = new FormControl('', [ Validators.required ]);
    this.postTags = new FormControl('', [ Validators.required ]);
    this.postPublishing = new FormControl('', [ Validators.required ]);
  }
  createForm() {
    this.addPostForm = new FormGroup({
      postTitle : this.postTitle,
      uploadFile : this.uploadFile,
      postDescription : this.postDescription,
      postTags : this.postTags,
      postPublishing : this.postPublishing,
    });
  }

  save() {
    console.log('save clicked!!')
  }
  publish() {
    console.log('publish clicked!!')
  }

}
