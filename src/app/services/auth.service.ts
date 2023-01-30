import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_BASE_URL, API_REGISTER_URL } from '../utils/constants';



export interface RegisterModel {
  full_name: string
  email: string
  password: string
  password_confirmation: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private httpClient: HttpClient) { }

  registerUser(user: RegisterModel, cb: () => void) {
    this.httpClient.post(`${API_BASE_URL}${API_REGISTER_URL}`, user).subscribe(x => {
      cb();
      console.log(x);
    })
  }
}
