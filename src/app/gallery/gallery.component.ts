import {Component, OnInit} from '@angular/core';
import {MoviesService} from '../shared/services/movies.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  movies: any;
  filteredMovies: any;
  searchText = '';

  constructor(private movieService: MoviesService) {
  }

  ngOnInit() {
    this.movieService.get().subscribe(data => {
      this.movies = data;
      this.filteredMovies = this.movies;
    });
  }

  filterMovies() {
    if (this.searchText !== '') {
      this.filteredMovies = [];
      this.movies.forEach(movie => {
        if (movie.title.toLowerCase().indexOf(this.searchText.toLowerCase()) !== -1) {
          this.filteredMovies.push(movie);
        }
      });
    } else {
      this.filteredMovies = this.movies;
    }
  }
}
