import { Component } from '@angular/core';
import {PostsService } from '../services/posts.service';

@Component({
  moduleId: module.id,
  selector: 'user',
  templateUrl: '../view/user.component.html',
  providers: [PostsService]
})

export class UserComponent {
  name: string;
  email: string;
  address: address;
  hobbies: string[];
  showHobbies: boolean;
  posts: Post[];

  constructor(private postsService: PostsService) {
    this.name = 'testName';
    this.email = 'test@gmail.com';
    this.address = {
      street: '一丁目',
      city: '新宿',
      state: '百人町',
    };
    this.hobbies = ['Music', 'Movies', 'Sports'];
    this.showHobbies = false;
    this.postsService.getPosts().subscribe(posts => {
        this.posts = posts;
    });
  }

  toggleHobbies() {
    this.showHobbies = (this.showHobbies) ? false : true;
  }

  addHobby(hobby: any) {
    this.hobbies.push(hobby);
  }

  deleteHobby(index: number) {
    this.hobbies.splice(index, 1);
  }
  bootboxTest() {
    console.log('bootboxTest');
  }
}

interface address {
  street: string;
  city: string;
  state: string;
}

interface Post {
  id: number;
  title: string;
  body: string;
}
