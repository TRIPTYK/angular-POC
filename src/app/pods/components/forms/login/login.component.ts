import { Component, OnInit } from '@angular/core';
import { FormBuilder  } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'forms-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm;
  loginErr;

  constructor(private formBuilder: FormBuilder,private authService: AuthService,private router: Router) {
    this.loginForm = this.formBuilder.group({
      email : '',
      password : ''
    });
  }

  async onSubmitLogin(data) {
    this.loginErr = null;
    try {
      await this.authService.authenticate(data.email, data.password);
    }catch(e) {
      this.loginErr = e;
    }
    this.router.navigate(['']);
  }

  ngOnInit(): void {
  }
}
