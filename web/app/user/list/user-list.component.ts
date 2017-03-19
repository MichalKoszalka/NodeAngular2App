import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {IUser} from '../../../../backend/model/user';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../service/user.service';

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  providers: [UserService]

})
export class UserListComponent implements OnInit {
  users: Observable<IUser>;

  constructor(public userService: UserService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
        this.users = this.userService.getUsers();
    });
  }

}