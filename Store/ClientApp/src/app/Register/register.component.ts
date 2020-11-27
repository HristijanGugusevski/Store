import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Repository } from '../Services/Repository';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserModel } from '../Models/user.model';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './register.component.html',
  styleUrls: ["register.component.css"]
})
export class Register implements OnInit {
  registerForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  user: UserModel = new UserModel;
  constructor(private formBuilder: FormBuilder,private route: ActivatedRoute,private repo : Repository) {
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      address: ['', Validators.required]
    });
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;
    this.user.user_address = this.f.address.value;
    this.user.user_password = this.f.password.value;
    this.user.user_name = this.f.username.value;
    this.repo.CreateUser(this.user).subscribe(res => {
      alert("Thank you for registering");
    });
  }
}
