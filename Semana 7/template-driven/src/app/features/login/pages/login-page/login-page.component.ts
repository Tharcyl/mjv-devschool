import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminsService } from 'src/app/shared/services/admins.service';

@Component({
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
