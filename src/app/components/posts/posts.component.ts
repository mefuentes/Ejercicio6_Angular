import { Component } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { Post } from '../../post';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent {

  posts: Post [] = []

  constructor(private postService: PostsService ){
      this.posts = postService.getPost();
  }
}
