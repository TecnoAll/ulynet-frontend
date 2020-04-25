import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { matchingPasswords, emailValidator } from 'src/app/Shared/utils/app-validators';
import { AuthService } from 'src/app/Auth/auth.service';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'undely-Register',
  templateUrl: './Register.component.html',
  styleUrls: ['./Register.component.scss']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  types: any[] = [
    {value: 'student', viewValue: 'Student'},
    {value: 'teacher', viewValue: 'Teacher'}
  ];
  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private matSnackBar: MatSnackBar,
              private router: Router) {
    this.form = this.fb.group({
      'name': [null, Validators.compose([Validators.required, Validators.minLength(3)])],
      'surname': [null, Validators.compose([Validators.required, Validators.minLength(3)])],
      'username': [null, Validators.compose([Validators.required, Validators.minLength(3)])],
      'userType': '',
      'studentId': '',
      'email': [null, Validators.compose([Validators.required, emailValidator])],
      'password': ['', Validators.required],
      'confirmPassword': ['', Validators.required]
    }, {validator: matchingPasswords('password', 'confirmPassword')});
   }
  ngOnInit() {
  }

  debug(data) {
    console.log(data);
  }

  onSubmit(): void {
    if (this.form.valid) {
      this.authService.postUser(this.form.value).subscribe(next => {
        this.matSnackBar.open('Usuario creado exitosamente', 'Log In', {
          duration: 1500
        });
        this.router.navigate(['/session/signin']);
      },
      err => {
        this.matSnackBar.open('Ocurrió un error!', 'Try Later', {
          duration: 1500
        });
        console.log(err)
      }
      );
    }
  }

}
