import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(private authservice: AuthService) { }
  // hier Service verknüpfen

  ngOnInit(): void { }

  async login() {
    try{
      let resp = await this.authservice.loginWithUserAndPassword(this.username, this.password);
      console.log(resp)
      
    } catch(e) {
      console.error(e);
    }
  }
}
