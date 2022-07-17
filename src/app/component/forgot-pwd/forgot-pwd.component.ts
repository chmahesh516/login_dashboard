import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { faLock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-forgot-pwd',
  templateUrl: './forgot-pwd.component.html',
  styleUrls: ['./forgot-pwd.component.scss']
})
export class ForgotPwdComponent implements OnInit {
  faLock = faLock;
  constructor(private fb: FormBuilder) { }
  loginForm = this.fb.group({
    username: [null],
    password: [null]
  });
  ngOnInit(): void {
  }

}
