import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {



  constructor(private formBuilder: FormBuilder, private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
    const res = localStorage.getItem("session")
    if(res ==="on"){
      this.router.navigate(['/urlshortener']);
    }
  }
  public loginForm: FormGroup = this.formBuilder.group({
    password:[],
    username:[]
  });
  public sendLogin(){
    const username = this.loginForm?.controls.username.value
    const password = this.loginForm?.controls.password.value
    console.log(username, password);
    
    this.loginService.signIn(username, password).subscribe( (res) => {
      if(res === "true"){
        localStorage.setItem("session", "on")
        this.router.navigate(['/urlshortener']);
      }else{
        console.log(res);
        
      }
      
    } )
  }

}
