import {Component, OnInit} from '@angular/core';
import {MoviesService} from '../shared/services/movies.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  movies: any;

  constructor(private movieService: MoviesService) {
  }

  ngOnInit() {
    this.movieService.get().subscribe(data => {
      this.movies = data;
    });
  }

}
