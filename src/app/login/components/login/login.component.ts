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
import { Observable } from 'rxjs';
import { ProductService } from 'src/app/product.service';
import { UserService } from 'src/app/user.service';
import { user } from 'src/app/users';

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
    signinPassword: ['' , Validators.pattern("^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$")],
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
              private http: HttpClient,
              private userservice:UserService,
              private productservice:ProductService,
              ) {}

  ngOnInit(): void {
  }

  onSignin(){
    let model = {
      userName : this.signinForm.value.signinEmail,
      password : this.signinForm.value.signinPassword,
    }

    console.log(this.signinForm.value);
    
    // this.userservice.getuser(model).subscribe((res)=>{
    //   console.log(res);
      
    // })    
  }
  onSignup() {
    let model= {
      userName: this.signupForm.value.signupEmail,
      password: this.signupForm.value.signupPassword,
    }

    this.userservice.senduser(model).subscribe(resp => {
      console.log(resp)
    })

    //   console.log(res);
      
    // })
  }
}
