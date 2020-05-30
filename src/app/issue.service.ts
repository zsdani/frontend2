import { Injectable } from '@angular/core';
import { Issue } from './issue';
import { HttpClient } from '@angular/common/http';
import { httpOptions } from './auth.service';




@Injectable({
  providedIn: 'root'
})
export class IssueService {

private issueUrl = 'http://localhost:8080/subjects';

 constructor(
  private http: HttpClient
 ) { }
 

 public getIssues(): Promise<Issue[]> {
  return this.http.get<Issue[]>(`${this.issueUrl}`, httpOptions).toPromise();
}

getIssue(id: number): Promise<Issue> {
return this.http.get<Issue>(`${this.issueUrl}/${id}`, httpOptions).toPromise();
}

createIssue(issue: Issue): Promise<Issue> {
return this.http.post<Issue>(`${this.issueUrl}`, issue, httpOptions).toPromise();
}

updateIssue(issue: Issue): Promise<Issue> {
return this.http.put<Issue>(`${this.issueUrl}/${issue.id}`, issue, httpOptions).toPromise();
}

deleteIssue(id): Promise<Issue> {
return this.http.delete<Issue>(`${this.issueUrl}/${id}`, httpOptions).toPromise();
}




 
 /*
  public getIssues(): Array<Issue> {
    return this.issues;
  }

  public getIssue(id: number): Issue {
    return this.issues.find((issue: Issue) => issue.id === id);
  }

  public createIssue(createdIssue: Issue): void {
    const issue: Issue = new Issue();

    issue.id = Math.floor(Math.random() * 1000);
    issue.code = Math.floor(Math.random() * 3124);
    issue.description = createdIssue.description;
    issue.building_id  = createdIssue.building_id;
    issue.name = createdIssue.name;
    issue.status  = createdIssue.status;
    issue.credit = createdIssue.credit;
    this.issues.push(issue);
  }

  public deleteIssue(id: number): void {
    const issue: Issue = this.getIssue(id);
    const index: number = this.issues.indexOf(issue, 0);

    if (index > -1) {
      this.issues.splice(index, 1);
    }
  }

  public updateIssue(updatedIssue: Issue): void {
    const issue: Issue = this.getIssue(updatedIssue.id);

    issue.description = updatedIssue.description;
    issue.building_id  = updatedIssue.building_id;
    issue.name = updatedIssue.name;
  }
  */
  
}
