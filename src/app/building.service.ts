import { Injectable } from '@angular/core';
import { Building } from "./building";
import { HttpClient} from '@angular/common/http';
import { httpOptions } from './auth.service';



@Injectable({
  providedIn: 'root'
})
export class BuildingService {
  private issueUr2 = 'http://localhost:8080/buildings';


  constructor(
    private http: HttpClient
  ) { }

  public getBuildings(): Promise<Building[]> {
    return this.http.get<Building[]>(`${this.issueUr2}`, httpOptions).toPromise();
  }
  /*
  getBuildings() {
    return this.http.get<Building[]>(this.issueUr2, {withCredentials: true});
  }
  */
  public getBuilding(id: number): Promise<Building> {
    return this.http.get<Building>(`${this.issueUr2}/${id}`, httpOptions).toPromise();
  }
  
  public createBuilding(building: Building): Promise<Building> {
    return this.http.post<Building>(`${this.issueUr2}`, building, httpOptions).toPromise();
  }

  public updateBuilding(building: Building): Promise<Building> {
    return this.http.put<Building>(`${this.issueUr2}/${building.id}`, building, httpOptions).toPromise();
  }

  public deleteBuilding(id: number): Promise<Building> {
    return this.http.delete<Building>(`${this.issueUr2}/${id}`, httpOptions).toPromise();
  }
  
  
}
