import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Auth/auth.service';
import { IUser } from 'src/app/Auth/user.interface';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'undely-HeaderUserProfileDropdown',
  templateUrl: './HeaderUserProfileDropdown.component.html',
  styleUrls: ['./HeaderUserProfileDropdown.component.scss']
})
export class HeaderUserProfileDropdownComponent implements OnInit {
  user: IUser;
  isLoggedIn = false;
   constructor(private authService: AuthService,
               private userService: UserService) { }

   ngOnInit() {
    this.authService.isLoggedInOb.subscribe(res => {
      this.isLoggedIn = res;
      if (this.isLoggedIn) {
        this.getUserProfile();
      }
    })
   }

   getUserProfile() {
     this.userService.getUserProfile().subscribe(
       res => {
         this.user = res;
       },
       err => {
         console.log(err);
       });
   }

}
