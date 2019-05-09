import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  uri = 'http://localhost:4000';

  constructor(private http: HttpClient) { }

  addUser(emotiv_id, emotiv_pw) {
    const obj = {
      emotiv_id: emotiv_id,
      emotiv_pw: emotiv_pw
    };
    console.log(obj);
    this.http.post(`${this.uri}/login`, obj)
        .subscribe(res => console.log('Done'));
  }
}
