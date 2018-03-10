import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {movies} from './movies.service.helper';

@Injectable()
export class MoviesService {

  constructor() {
  }

  get() {
    const observable$ = new Observable(observer => {
      observer.next(movies);
    });
    return observable$;
  }
}
