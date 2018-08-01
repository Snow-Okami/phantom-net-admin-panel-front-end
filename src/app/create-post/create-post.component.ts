import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../http.service'
import { Post } from '../post';

//Angular Form Modules
import { FormGroup, FormControl, Validators } from '@angular/forms';

class addNewPostFormObj {
  postTitle : string;
  image : any;
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
  addPostForm: FormGroup;
  postTitle: FormControl;
  image: FormControl;
  postDescription: FormControl;
  postTags: FormControl;
  postPublishing: FormControl;
  disabledSaveBtn: boolean = true;
  file: any;

  constructor(private http: HttpService) {
    
  }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  createFormControls() {
    this.postTitle = new FormControl('', [ Validators.required ]);
    this.image = new FormControl('', [ Validators.required ]);
    this.postDescription = new FormControl('', [ Validators.required ]);
    this.postTags = new FormControl('', [ Validators.required ]);
    this.postPublishing = new FormControl('', [ Validators.required ]);
  }

  createForm() {
    this.addPostForm = new FormGroup({
      postTitle : this.postTitle,
      image : this.image,
      postDescription : this.postDescription,
      postTags : this.postTags,
      postPublishing : this.postPublishing,
    });
  }

  save() {
    console.log('save clicked!!')
  }
  publish() {
    let form = new FormData();
    form.append('image', this.file);
    form.append('title', this.addPostForm.value.title);
    this.http.createPost(form)
    .subscribe(post => {
      console.log(post);
    });
  }

  previewFile() {
    let preview = document.querySelector('#upload-image');
    this.file    = document.querySelector('input[type=file]')['files'][0];
    let reader  = new FileReader();

    reader.addEventListener("load", function () {
      preview['src'] = reader.result;
    }, false);

    if (this.file) {
      reader.readAsDataURL(this.file);
    }
  }

}
