import { Component } from '@angular/core';
import {PostsService } from '../services/posts.service';

@Component({
  moduleId: module.id,
  selector: 'board',
  templateUrl: '../view/board.component.html',
  providers: [PostsService]
})

export class BoardComponent {
    boardNo: number;
    title: string;
    userCode: number;
    userName: string;
    createdDate: Date;
    lookUp: number;
}