import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '../../../core/base-form-component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BlogService } from '../../../Services/blog.service';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs';
import { Author } from '../../../Models/Blog/author.model';


@Component({
  selector: 'app-author-form',
  templateUrl: './author-form.component.html',
})
export class AuthorFormComponent extends BaseFormComponent implements OnInit {
  form: FormGroup = this.formbuilder.group({});

constructor (
  private blogService: BlogService,
  private route: ActivatedRoute,
  private formbuilder: FormBuilder) {
  super();

}
createForm(): FormGroup<any> {
  const form = this.formbuilder.group({
    id: [''],
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', Validators.required],
    bio: ['', Validators.required],
    profilePictureUrl: ['', Validators.required],
  });
  return form
}

initForm() {
  if (this.editMode) {
    this.blogService
      .GetAuthor(this.id)
      .pipe(first())
      .subscribe((data) => {    
        this.form.patchValue(data);        
      });
  }   
}

ngOnInit(): void {
  this.form = this.createForm();
  this.route.params.pipe().subscribe((params) => {
    this.id = params['id'] ? params['id'] : '';
    this.editMode = params['id'] != null;
    this.pageTitle = this.editMode ? 'Edit Area' : 'New Area';
    this.breadCrumbItems = [
      { label: 'Master Data' },
      { label: 'Area' },
      { label: this.pageTitle, active: true },
    ];
    this.buttonText = this.editMode ? 'Update' : 'Create';
    this.initForm();
  });
}

onSubmit() {
  this.submitted = true; 
  if (this.validateForm(this.form)) {
    let model: Author = { ...this.form.value };
    if (this.editMode) {
      this.blogService.UpdateAuthor(this.id, model).subscribe({
        next: (_) => {
          window.confirm('Are you sure you want to update person entry?');
          console.log('Person updated successfully:', _);
        },
        error: (errors) => {
          this.errors = errors;
          console.log('Error =>', this.errors);
        },
      });
    } else {
      this.blogService.CreateAuthor(model).subscribe({
        next: (_) => {
          window.confirm('Are you sure you want to save person entry?');
          console.log('Person saved successfully:', _);
        },
        error: (errors) => {
          this.errors = errors;
          console.log('Error =>', this.errors);
        },
      });
    }
  }
}

back() {
 
}

}
