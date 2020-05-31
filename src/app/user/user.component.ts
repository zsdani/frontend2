import { Component, OnInit } from '@angular/core';
import { Users } from '../users';
import { UsersService } from '../users.service';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  public users: Users[] = [];
  public selectedUsers: Users;

  constructor(
    private usersService: UsersService,
    public authService: AuthService
  ) { 
    
    
  }

  public async ngOnInit(): Promise<void> {
    //this.selectedUsers = '';
    this.users = await this.usersService.getUserss();

  }
  public onSelectUsers(users: Users): void {
    this.selectedUsers = users;
  }

  public async onDeleteClick(id: number): Promise<void> {
    await this.usersService.deleteUsers(id);
    this.users = await this.usersService.getUserss();
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
