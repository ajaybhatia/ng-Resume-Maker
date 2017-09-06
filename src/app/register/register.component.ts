import { Component} from '@angular/core';
import { User } from '../models/user.model';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user: User = new User();

  constructor(private authSrv: AuthService) { }

  registerUser() {
    this.authSrv.registerUser(this.user)
      .then(success => {
        console.log(success);
      })
      .catch(error => {
        console.log(error);
      });
  }

}
