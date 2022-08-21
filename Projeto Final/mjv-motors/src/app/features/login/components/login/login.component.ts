import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string = '';
  senha: string = '';
  error: boolean = false;


  constructor(private userService: UsersService,
    private router: Router) { }

  ngOnInit(): void {
  }

  authenticate(){
    const user = this.userService.getUSerByEmailAndPassword(this.email, this.senha);
    
    if(user){
      sessionStorage.setItem('user', JSON.stringify(user));
      this.router.navigateByUrl('/home');
    }else{
      this.error = true;
    }
  
  }
  
}
