import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../core/services/auth.service';
import { IUserInfo } from '../shared/interfaces';

@Component({
  moduleId: module.id,
  selector: 'my-chat',
  templateUrl: 'chat.component.html',
  styleUrls: ['chat.component.css']
})

export class ChatComponent implements OnInit {

  me: IUserInfo;

  constructor(private authService: AuthService) {

  }

  ngOnInit(): void {

    this.me = this.authService.userInfo;

  }

}

