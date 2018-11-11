import { Component, OnInit } from '@angular/core';
import { BookmarksService } from './services/bookmarks.service';
import { Bookmark } from './models/bookmark.model';
import { BookmarksResponse } from './models/bookmarks-response.model';
import {MatTableDataSource} from '@angular/material';


@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.scss']
})
export class BookmarksComponent implements OnInit {
  bookmarks: Array<Bookmark>;
  displayedColumns = ['id', 'title', 'description', 'created'];
  dataSource;

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(public _bookmarksService: BookmarksService) { }

  ngOnInit() {

    this._bookmarksService.getAll().subscribe(
      (data: BookmarksResponse) => {
        this.bookmarks = data.bookmarks;
        this.dataSource = new MatTableDataSource<Bookmark>(this.bookmarks)
      },
      error => {
        console.error(error);
      });
    


  }

}
