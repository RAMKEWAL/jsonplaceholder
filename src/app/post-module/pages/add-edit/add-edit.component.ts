import { Component, OnInit, ɵConsole } from '@angular/core';
import { PostService } from '../../../service/post.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Post } from '../../../shared/models/post';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.scss']
})
export class AddEditComponent implements OnInit {
  // Form
  public addEdit: FormGroup;
  public userTitle;

  // Submit form variable
  public submitForm: any;

  // Update the form
  public updateForm: any;

  // Loading
  public loading: boolean;

  // EventId
  public eventId = null;

  constructor(
    public service: PostService,
    public fb: FormBuilder,
    private router: Router,
    public params: ActivatedRoute,
    private matSnack: MatSnackBar
  ) {
    this.params.queryParams.subscribe((res: any) => {
      if (res.id) {
        this.userTitle = 'Update Post'
        this.eventId = res.id;
        this.patchData(res.id);
      } else {
        this.userTitle = 'Add Post';
      }
    });
  }

  async ngOnInit() {
    this.addEdit = this.fb.group({
      userId: [1, Validators],
      title: ['', Validators.required],
      body: ['', Validators.required]
    });

  }

  /**
   * Patch data of form
   * @param id
   */
  patchData(id) {
    this.service.postById(id).subscribe((res: any) => {
      this.addEdit.patchValue({
        userId: 1,
        title: res.title,
        body: res.body
      });
    });
  }


  /**
   * Function to submit the form
   * @param e
   */
  async submit(params: { valid: boolean, value: Post }) {
    if (params.valid) {
      this.loading = true;
      this.submitForm = await this.service.postDataService(params.value);
      this.loading = false;
      // If response true redirect to listing page
      if (this.submitForm.res === true) {
        this.matSnack.open('Add Listing Succesfully', 'Close', { duration: 1000 });
        this.router.navigate(['/listing']);
      }
      // console.log(this.submitForm);
    }
  }

  /**
   * Function to update the form
   * @param event
   */
  update(params: { valid: boolean, value: Post }, id) {
    if (params.valid) {
      this.service.updatePostService(id, params.value).subscribe((res: any) => {
        if (res) {
          this.matSnack.open('Update Listing Succesfully', 'Close', { duration: 1000 });
          this.router.navigate(['/listing']);
        }
      });
    }

  }

  /**
   * Function to show toastr
   */

}
