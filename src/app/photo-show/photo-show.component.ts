import { Component, OnInit } from '@angular/core';

import { PhotosService } from '../photos.service';

@Component({
  selector: 'app-photo-show',
  templateUrl: './photo-show.component.html',
  styleUrls: ['./photo-show.component.css'],
})
export class PhotoShowComponent implements OnInit {
  photoUrl = '';
  loading = '';

  constructor(private service: PhotosService) {}

  ngOnInit(): void {
    this.fetchPhoto();
  }

  fetchPhoto(): void {
    this.loading = 'Loading...';
    this.service.getPhoto().subscribe((value: string) => {
      this.photoUrl = value;
      this.loading = '';
    });
  }
}
