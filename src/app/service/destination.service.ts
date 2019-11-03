import { Injectable } from '@angular/core';
import { Destination } from '../shared/Destination';
import {
  HttpClient,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { DestinationError } from '../shared/destinationError';

@Injectable()
export class DestinationService {
  constructor(private httpClient: HttpClient) {}

  getAllDestinations(): Observable<Destination[] | DestinationError> {
    console.log('Get all destinations from Destination service');
    return this.httpClient
      .get<Destination[]>(
        'https://erumi6mr72.execute-api.us-east-1.amazonaws.com/dev/travelogue/all'
      )
      .pipe(catchError(err => this.handleError(err)));
  }

  private handleError(error: HttpErrorResponse): Observable<DestinationError> {
    const destinationError = new DestinationError(
      100,
      'An error occurred during processing',
      error.message
    );
    return throwError(destinationError);
  }

  getEachDestination(destinationName: string): Observable<Destination[]> {
    console.log(
      'Get each destination using destination name: ' + destinationName
    );
    return this.httpClient.get<Destination[]>(
      `https://erumi6mr72.execute-api.us-east-1.amazonaws.com/dev/travelogue/${destinationName}`
    );
  }
}
