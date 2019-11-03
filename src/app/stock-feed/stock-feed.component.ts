import { Component, OnInit, ViewChild } from '@angular/core';
import { StockService } from '../service/stock.service';
import { Observable } from 'rxjs';
import { Stock } from '../shared/stock.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-stock-feed',
  templateUrl: './stock-feed.component.html',
  styleUrls: ['./stock-feed.component.css']
})
export class StockFeedComponent implements OnInit {
  stockInfo: Stock;
  stocks: Stock[] = new Array();
  @ViewChild('f') addStockForm: NgForm;
  stockInterval: any;

  constructor(private stockService: StockService) {}

  symbols: string[] = ['CTSH', 'FDC'];

  ngOnInit() {
    this.getStockPrice(this.stockService, this.stockInfo);
  }

  getStockPrice(stockService: StockService, stockInfo: Stock) {
    const that = this;
    this.symbols.forEach(symbol => {
      this.stockInterval = setInterval(() => {
        stockService.getStockPrice(symbol).subscribe(stock => {
          console.log(stock);
          that.stockInfo = stock;
          console.log(that.stocks.findIndex(el => el.name === stock.name));
          if (that.stocks.findIndex(el => el.name === stock.name) === -1) {
            that.stocks.push(stock);
          } else {
            that.stocks[
              that.stocks.findIndex(el => el.name === stock.name)
            ] = stock;
          }
        });
      }, 2000);
    });
  }

  onStockAdd() {
    console.log(this.addStockForm.value.tikcerName);
    this.symbols.push(this.addStockForm.value.tikcerName);
    clearInterval(this.stockInterval);
    this.getStockPrice(this.stockService, this.stockInfo);
    this.addStockForm.reset();
  }
}
