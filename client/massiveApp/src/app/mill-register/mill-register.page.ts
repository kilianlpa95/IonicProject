import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { ErrorStateMatcher } from '@angular/material/core';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
  
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-mill-register',
  templateUrl: './mill-register.page.html',
  styleUrls: ['./mill-register.page.scss'],
})

export class MillRegisterPage implements OnInit {

  constructor(private router: Router,
    private api: ApiService,
    private formBuilder: FormBuilder) { }

  mUserForm: FormGroup;
  name = "";
  age: number = null;
  isLoadingResults = false;
  matcher = new MyErrorStateMatcher();
  
  ngOnInit() {

    this.mUserForm = this.formBuilder.group({
      'name' : [null, Validators.required],
      'age' : [null, Validators.required]
    });

  }

  onFormSubmit() {
    this.isLoadingResults = true;
    this.api.addMillUser(this.mUserForm.value)
      .subscribe((res: any) => {
          const id = res.id;
          this.isLoadingResults = false;
          this.router.navigate(['/mill-details', id]);
        }, (err: any) => {
          console.log(err);
          this.isLoadingResults = false;
        });
  }

}
