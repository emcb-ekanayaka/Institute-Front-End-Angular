import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthService } from '../services/api/user/user-auth.service';
import { UserService } from '../services/api/user/user.service';
import { LoginRepresentation } from '../services/api/module/login-representation';

@Component({
  selector: 'app-institute-login',
  templateUrl: './institute-login.component.html',
  styleUrls: ['./institute-login.component.scss'],
})
export class InstituteLoginComponent  {
  loginObj:LoginRepresentation={}
  constructor(
    private userService:UserService,
    private userAuthService: UserAuthService,
    private router:Router
    ){}
  ngOnInit(): void {}

  login():void{
    this.userService.login(this.loginObj).subscribe(
      (response:any) =>{

        this.userAuthService.setRole(response.user.role);
        this.userAuthService.setToken(response.jwtToken);

        const role = response.user.role[0].roleName;
        console.log(role);
        
        if(role==="admin"){
          this.router.navigate(['/dashboard']);
        }else{
          this.router.navigate(['/dashboard']);
        }
      },
      (error=>{
        console.log(error);
      })
    );
  }
}
