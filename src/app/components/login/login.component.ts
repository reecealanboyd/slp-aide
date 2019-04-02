import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email = "reece.boyd@gatech.edu";
  password = 'coo';
  isLoggingIn = true;
  // user: User;

  constructor(private router: Router, private active: ActivatedRoute) {
      // this.user = new User();
      this.email = "reee";
      this.password = "reee"
  }

  submit() {
      if (this.isLoggingIn) {
          this.login();
      } else {
          this.signUp();
      }
  }

  login() {
      // this.userService.login(this.user)
      //     .subscribe(
      //         () => this.router.navigate(["/list"]),
      //         (error) => alert("Unfortunately we could not find your account.")
      //     );
      this.router.navigate(['../home'], {relativeTo: this.active});
  }

  signUp() {
      // this.userService.register(this.user)
      //     .subscribe(
      //         () => {
      //             alert("Your account was successfully created.");
      //             this.toggleDisplay();
      //         },
      //         () => alert("Unfortunately we were unable to create your account.")
      //     );
      this.router.navigate(["../home"], {relativeTo: this.active});
  }

  toggleDisplay() {
      this.isLoggingIn = !this.isLoggingIn;
  }

}
