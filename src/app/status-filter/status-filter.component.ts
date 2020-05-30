import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'status-filter',
  templateUrl: './status-filter.component.html',
  styleUrls: [ './status-filter.component.css' ]
})
export class StatusFilterComponent implements OnInit {

  statuses: string[] = [ 'Első félév', 'Második félév', 'Harmadik félév', 'Negyedik félév', 'Ötödik félév','Hatodik félév' ];
  @Input('status') selectedStatus: string = '';
  @Output() onChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {

  }

  onFilterChange(status: string) {
    this.selectedStatus = status;
    this.onChange.emit(status);
  }

}
