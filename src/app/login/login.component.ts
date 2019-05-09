import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  constructor(private fb: FormBuilder,private us: UserService) {
    this.createForm();
  }

  createForm() {
    this.loginForm = this.fb.group({
      emotiv_id: ['', Validators.required ],
      emotiv_pw: ['', Validators.required ]
    });
  }
  addUser(emotiv_id, emotiv_pw) {
    this.us.addUser(emotiv_id, emotiv_pw);
  }
  ngOnInit() {
  }

}