import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { Destination } from '../shared/Destination';
import { Observable } from 'rxjs';
import { DestinationService } from './destination.service';

@Injectable({
  providedIn: 'root'
})
export class DestinationEachResolverService implements Resolve<Destination[]> {
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Destination[]> {
    const id = route.params['destinationName'];
    console.log('DestinationEachResolverService: Destination Name : ' + id);
    return this.destinationService.getEachDestination(id);
  }
  constructor(private destinationService: DestinationService) {}
}
