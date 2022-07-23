import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from '../../models/admin.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  admin?: Admin;
  
  constructor(private router: Router) { }

  ngOnInit(): void {
    const adminSessionStorage = sessionStorage.getItem('admin');
    if(adminSessionStorage){
      this.admin = JSON.parse(adminSessionStorage);
    }
  }
  navigateByUrl(route: string){
    this.router.navigateByUrl(route);
  }

  exit(){
    sessionStorage.clear();
    this.router.navigateByUrl('login');
  }
}
