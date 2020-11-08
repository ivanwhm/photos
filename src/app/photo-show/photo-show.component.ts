import { Component, OnInit } from '@angular/core';

import { PhotosService } from '../photos.service';

@Component({
  selector: 'app-photo-show',
  templateUrl: './photo-show.component.html',
  styleUrls: ['./photo-show.component.css'],
})
export class PhotoShowComponent implements OnInit {
  photoSource = '';

  constructor(private service: PhotosService) {}

  ngOnInit(): void {
    this.getPhoto();
  }

  getPhoto(): void {
    this.service.getPhoto().subscribe((value: string) => (this.photoSource = value));
  }
}
