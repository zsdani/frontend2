import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Building } from '../building';

@Component({
  selector: 'app-building-form',
  templateUrl: './building-form.component.html',
  styleUrls: ['./building-form.component.css']
})
export class BuildingFormComponent{
  @Input() building: Building;
  public model: Building;
  @Output() submit: EventEmitter<Building> = new EventEmitter<Building>();

  constructor() { }

  ngOnChanges(): void {
    this.model = Object.assign({}, this.building);
  }

  onSubmit(form): void {
    console.log(form);
    if (!form.valid) {
      return;
    }
    this.submit.emit(this.model);
  }

}
