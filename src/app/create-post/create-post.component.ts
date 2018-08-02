import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../http.service'
import { Post } from '../post';

//Angular Form Modules
import { FormGroup, FormControl, Validators } from '@angular/forms';

class addNewPostFormObj {
  title : string;
  description : any;
  tags : any;
  published : any
}

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  @Input() addNewPostForm = new addNewPostFormObj();
  addPostForm: FormGroup;
  title: FormControl;
  description: FormControl;
  tags: FormControl;
  published: FormControl;
  disabledSaveBtn: boolean = true;
  file: any;

  constructor(private http: HttpService) {
    
  }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  createFormControls() {
    this.title = new FormControl('', [ Validators.required ]);
    this.description = new FormControl('', [ Validators.required ]);
    this.tags = new FormControl('', [ Validators.required ]);
    this.published = new FormControl('', [ Validators.required ]);
  }

  createForm() {
    this.addPostForm = new FormGroup({
      title : this.title,
      description : this.description,
      tags : this.tags,
      published : this.published,
    });
  }

  save() {
    console.log('save clicked!!')
  }
  publish() {
    let form = new FormData();
    form.append('image', this.file);
    form.append('title', this.addPostForm.value.title);
    form.append('description', this.addPostForm.value.description);
    form.append('tags', this.addPostForm.value.tags);
    form.append('published', this.addPostForm.value.published);
    this.http.createPost(form)
    .subscribe(post => {
      console.log(post);
    });
  }

  previewFile() {
    let preview = document.querySelector('#upload-image');
    this.file   = document.querySelector('input[type=file]')['files'][0];
    let reader  = new FileReader();

    reader.addEventListener("load", function () {
      preview['src'] = reader.result;
    }, false);

    if (this.file) {
      reader.readAsDataURL(this.file);
    }
  }

}
