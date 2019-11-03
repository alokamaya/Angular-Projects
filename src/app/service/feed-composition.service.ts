import { Injectable } from '@angular/core';
import { FeedComposition } from '../shared/feedComposition';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class FeedCompositionService {
  feedCompositionChanged = new Subject<FeedComposition[]>();

  constructor(private http: HttpClient) {}

  public createNewFeedComposition(
    newFeed: FeedComposition
  ): Observable<string> {
    return this.http.post<string>(
      'https://erumi6mr72.execute-api.us-east-1.amazonaws.com/qa/travelogue/feed-composition',
      newFeed,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      }
    );
  }

  public getAllFeedComposition(): Observable<FeedComposition[]> {
    return this.http.get<FeedComposition[]>(
      'https://erumi6mr72.execute-api.us-east-1.amazonaws.com/qa/travelogue/feed-composition'
    );
  }

  public getFeedCompositionFromFeedName(
    feedStuffName: string
  ): Observable<FeedComposition> {
    return this.http.get<FeedComposition>(
      `https://erumi6mr72.execute-api.us-east-1.amazonaws.com/qa/travelogue/feed-composition/${feedStuffName}`
    );
  }

  public deleteFeedCompositionByFeedName(
    feedStuffName: string
  ): Observable<string> {
    return this.http.delete<string>(
      `https://erumi6mr72.execute-api.us-east-1.amazonaws.com/qa/travelogue/feed-composition/${feedStuffName}`
    );
  }
}
