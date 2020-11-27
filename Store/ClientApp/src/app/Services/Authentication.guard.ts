import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthenticationGuard {
  constructor(private router: Router ) { }

  //canActivateChild(): boolean {
  //} 
}
