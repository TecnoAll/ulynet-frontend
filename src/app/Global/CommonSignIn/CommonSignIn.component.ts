import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/Auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'undely-SignIn',
  templateUrl: './CommonSignIn.component.html',
  styleUrls: ['./CommonSignIn.component.scss']
})
export class CommonSignInComponent implements OnInit {
  form: FormGroup;
  hide = true;
  serverErrors = {
    wrongUser:  false,
    wrongPassword: false
  };
  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private router: Router) {
    this.form = this.fb.group({
      'email': [null, Validators.compose([Validators.required])],
      'password': [null, Validators.compose([Validators.required, Validators.minLength(6)])],
      'rememberMe': false
    });
  }

  ngOnInit() {
  }

  public onSubmit(): void {
    if (this.form.valid) {
    this.authService.login(this.form.value).subscribe(
      res => {
        this.authService.setToken(res['token']);
        this.router.navigateByUrl('/');
      },
      err => {
        this.serverErrors = err.error;
        console.log(this.serverErrors);
      }
    );
      // this.router.navigate(['/']);
    }
  }

}
