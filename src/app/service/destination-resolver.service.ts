import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { Destination } from '../shared/Destination';
import { DestinationError } from '../shared/destinationError';
import { DestinationService } from './destination.service';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DestinationResolverService
  implements Resolve<Destination[] | DestinationError> {
  constructor(private destinationService: DestinationService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Destination[] | DestinationError> {
    return this.destinationService
      .getAllDestinations()
      .pipe(catchError(err => of(err)));
  }
}
