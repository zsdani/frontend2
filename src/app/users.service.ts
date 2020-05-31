import { Injectable } from '@angular/core';
import { Users } from "./users";
import { HttpClient } from '@angular/common/http';
import { httpOptions } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private issueUr3 = 'http://localhost:8080/users';


  constructor(
    private http: HttpClient
  ) { }

  public getUserss(): Promise<Users[]> {
    return this.http.get<Users[]>(`${this.issueUr3}`, httpOptions).toPromise();
  }

  public getUsers(id: number): Promise<Users> {
    return this.http.get<Users>(`${this.issueUr3}/${id}`, httpOptions).toPromise();
  }

  public deleteUsers(id: number): Promise<Users> {
    return this.http.delete<Users>(`${this.issueUr3}/${id}`, httpOptions).toPromise();
  }


}
