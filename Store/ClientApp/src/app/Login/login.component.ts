import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AuthenticationService } from '../Services/Authentication.service';

@Component({ 
  templateUrl: 'login.component.html',  
  styleUrls: ["login.component.css"], 
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  loaded = false;
  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router) {}


  ngOnInit() {
    setInterval(() => {
      this.loaded = true;
    }, 3000);
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;
    this.router.navigateByUrl('/table');

    //if (this.loginForm.invalid) {
    //  return;
    //}

    //this.loading = true;
    //this.authenticationService.login(this.f.username.value, this.f.password.value)
    //  .pipe(first())
    //  .subscribe(
    //    data => {
    //      this.router.navigate([this.returnUrl]);
    //    },
    //    error => {
    //      this.alertService.error(error);
    //      this.loading = false;
    //    });
  }
}
