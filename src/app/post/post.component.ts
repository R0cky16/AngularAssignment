import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material';
import { ModalComponent } from '../modal/modal.component';
import { DataService } from '../services/data.service';
import IPost from '../models/post.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  public posts$: Observable<IPost[]>;
  public displayedColumns: string[] = [ 'title', 'url', 'created_at', 'author' ];

  constructor(private _data: DataService, private _dialog: MatDialog) { }

  ngOnInit() {
    this.posts$ = this._data.fetchData();
  }

  public showModal(post: IPost): void {
    this._dialog.open(ModalComponent, {
      width: '550px',
      data: post
    });
  }
}
