import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ObservableService {

  constructor() { }

  time = new Observable<string>(
    (observador) => {
      setInterval( () => {
        observador.next(new Date().toString())
      }, 1000)
    }
  )
}
