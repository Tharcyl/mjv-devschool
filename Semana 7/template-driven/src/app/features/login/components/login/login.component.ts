import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminsService } from 'src/app/shared/services/admins.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string = '';
  senha: string = '';
  error = false;


  constructor(
    private adminsService: AdminsService,
    private router: Router) { }

  ngOnInit(): void {
  }

  authenticate() {
    const admin = this.adminsService.getAdminByEmailAndSenha(this.email, this.senha);
    if (admin) {
      sessionStorage.setItem('admin', JSON.stringify(admin))
      this.router.navigateByUrl('/home');
    }else{
      this.error = true;
    }
  }
}
