import { Component, OnInit } from '@angular/core';
import { Building } from "../building";
import { BuildingService } from "../building.service"
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-buildings',
  templateUrl: './buildings.component.html',
  styleUrls: ['./buildings.component.css']
})
export class BuildingsComponent implements OnInit {

  public buildings: Building[] = [];
  public filteredBuildings: Building[];
  public selectedB_name: string;
  public selectedBuilding: Building;

  constructor(
    private buildingService: BuildingService,
    public authService: AuthService
  ) { 
    
    //buildingService.getBuildings().then((data) => this.buildings = data);
  }

  public async ngOnInit(): Promise<void> {
    this.selectedB_name = '';
    this.buildings = await this.buildingService.getBuildings();
    this.filterb();
  }
  
  public onFilterChangeb(b_name: string): void {
    this.selectedB_name = b_name;
    this.filterb();
  }
  

  public onSelectBuildingb(building: Building): void {
    this.selectedBuilding = building;
  }

  public async onFormSubmitb(building: Building): Promise<void> {
    if (building.id > 0) {
      await this.buildingService.updateBuilding(building);
      this.buildings = await this.buildingService.getBuildings();
    } else {
      await this.buildingService.createBuilding(building);
      this.buildings = await this.buildingService.getBuildings();
    }
    this.selectedBuilding = null;
    this.filterb();
  }

  public onNewClickb(): void {
    this.selectedBuilding = new Building();
  }

  public async onDeleteClickb(id: number): Promise<void> {
    await this.buildingService.deleteBuilding(id);
    this.buildings = await this.buildingService.getBuildings();
    this.filterb();
  }
  
  private filterb(): void {
    this.filteredBuildings = this.selectedB_name === ''
      ? this.buildings
      : this.buildings.filter(building => building.b_name === this.selectedB_name);
  }
  
}


