import { Injectable } from '@angular/core';
import { Issue } from './issue';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TargyService {
  private issueUr3 = 'http://localhost:8080/users';


  constructor(private httpClient: HttpClient) {
  }


  getSubjectById(id: number) {
    const url4 = this.issueUr3 + '/' + id+'/subjects';
    return this.httpClient.get<Issue>(url4, {withCredentials: true});
  }


}
