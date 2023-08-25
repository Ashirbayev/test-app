import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../post-list/post-list.component';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {
  post: any = null;
  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const postIdParam = params.get('id');
      if (postIdParam) {
        const postId = +postIdParam;
        this.http.get(`https://jsonplaceholder.typicode.com/posts/${postId}`).subscribe((data: any) => {
          this.post = data;
        });
      }
    });
  }

}
