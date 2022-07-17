import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { AuthGuardGuard } from 'src/app/guards/auth-guard.guard';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isTrue:boolean = false;
  loginForm = this.fb.group({
    email: [null],
    password: [null]
  });

  constructor(private fb: FormBuilder,private auth:AuthService,private router:Router) {}
ngOnInit(): void {
    
}
  onSubmit() {
    if (this.loginForm.valid) {
      this.auth.login(this.loginForm.value).subscribe(
        (result) => {
          this.router.navigate(['admin']);
         },
        (err: Error) => {
          alert(err.message);
        }
      )
      
    }

  }

  onChangeTheme() {
    this.isTrue = !this.isTrue;
  }
}
