import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
  FormGroup,
  FormBuilder,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  email = new FormControl('');
  hide = true;
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  signinForm = this.fb.group({
    signinEmail: ['',Validators.email],
    signinPassword: '',
    rememberForm: '',
  });

  signupForm = this.fb.group({
    signupName: '',
    signupLastName: '',
    signupEmail: ['',Validators.email],
    signupPassword: '',
    sigupRePassword: '',
  });

  matcher = new MyErrorStateMatcher();
  constructor(private fb: FormBuilder,
    private http: HttpClient) {}

  ngOnInit(): void {
    setInterval(()=>{
      console.log(this.signinForm.valid);
      
    },200)
  }

  onSignin() {
    console.log(this.emailFormControl);
    // this.http.post<any>('https://tavana-node.herokuapp.com/auth/login', { title: 'login' }).subscribe(data => {
    //     this.signinForm.value.signinEmail = ;
    // })
  }
  onSignup() {}
}
