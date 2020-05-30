import { Injectable } from '@angular/core';
import { Users } from './users';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

export const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': '',
  })
};


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authUrl = 'http://localhost:8080/users';


  public isLoggedIn = false;
  public user: Users;
  public redirectUrl: string;
  authenticated = false;
  loggedUser: Users = new Users();
  
  constructor(
    private http: HttpClient, private router: Router
  ) { }

  public async login(username: string, password: string): Promise<Users> {
    try {
      const token = btoa(`${username}:${password}`);
      httpOptions.headers = httpOptions.headers.set('Authorization', `Basic ${token}`);
      const user = await this.http.post<Users>(`${this.authUrl}/login`, {}, httpOptions).toPromise();
      this.isLoggedIn = true;
      this.user = user;
      return Promise.resolve(this.user);
    } catch (e) {
      console.log(e);
      return Promise.reject();
    }
  }

  public logout(): void {
    httpOptions.headers = httpOptions.headers.set('Authorization', ``);
    this.isLoggedIn = false;
    this.user = null;
    this.router.navigate(['/login']);
  }

  isWhatRole(): string {
    return this.user.role;
  }


  isUserInRole(role: string): boolean {
    return true;
  }

}
