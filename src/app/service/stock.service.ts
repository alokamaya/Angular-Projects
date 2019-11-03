import { Injectable } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { Stock } from '../shared/stock.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StockService {
  stockInfoObservable: Observable<Stock>;

  constructor(private http: HttpClient) {}

  public getStockPrice(symbol: string): Observable<Stock> {
    return this.http.get<Stock>(
      `https://erumi6mr72.execute-api.us-east-1.amazonaws.com/qa/travelogue/stock?stockName=${symbol}`
    );
  }
}
