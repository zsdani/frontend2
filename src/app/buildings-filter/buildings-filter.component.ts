import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-buildings-filter',
  templateUrl: './buildings-filter.component.html',
  styleUrls: ['./buildings-filter.component.css']
})
export class BuildingsFilterComponent implements OnInit {

  b_names: string[] = [ 'Északi épület', 'Déli épület'];
  @Input('b_name') selectedB_name: string = '';
  @Output() onChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {

  }

  onFilterChange(b_name: string) {
    this.selectedB_name = b_name;
    this.onChange.emit(b_name);
  }

}





