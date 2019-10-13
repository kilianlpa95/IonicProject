import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-mill-modifier',
  templateUrl: './mill-modifier.page.html',
  styleUrls: ['./mill-modifier.page.scss'],
})

export class MillModifierPage implements OnInit {

  constructor(private router: Router,
    private route: ActivatedRoute,
    private api: ApiService,
    private formBuilder: FormBuilder) { }

  mUserForm: FormGroup;
  id = '';
  name = '';
  age: number = null;
  isLoadingResults = false;
  matcher = new MyErrorStateMatcher();

  ngOnInit() {
    this.getMillUser(this.route.snapshot.params['id']);
    this.mUserForm = this.formBuilder.group({
      'name' : [null, Validators.required],
      'age' : [null, Validators.required]
    });
  }

  getMillUser(id: any) {
    this.api.getMillUser(id).subscribe((data: any) => {
      this.id = data.id;
      this.mUserForm.setValue({
        name: data.name,
        age: data.age
      });
    });
  }

  onFormSubmit() {
    this.isLoadingResults = true;
    console.log(this.mUserForm.value)
    this.api.updateMillUser(this.id, this.mUserForm.value)
      .subscribe((res: any) => {
          const id = res.id;
          this.isLoadingResults = false;
          this.router.navigate(['/mill-details', id]);
        }, (err: any) => {
          console.log(err);
          this.isLoadingResults = false;
        }
      );
  }

  millDetails() {
    this.router.navigate(['/mill-details', this.id]);
  }

}
