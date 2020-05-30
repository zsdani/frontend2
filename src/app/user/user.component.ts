import { Component, OnInit } from '@angular/core';
import { Users } from '../users';
import { UsersService } from '../users.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  private users: Users[] = [];
  constructor(
    private issueService: UsersService
  ) { 
    
  }
    
  ;
}


/*
export class UserComponent implements OnInit {
  private user: Users[] = [];
*
  constructor(
    private route: ActivatedRoute,
    private issueService: userservice
  ) { }

  ngOnInit(): void {
  }

}*/
