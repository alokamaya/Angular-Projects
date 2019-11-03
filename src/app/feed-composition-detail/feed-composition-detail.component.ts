import { Component, OnInit, ViewChild } from '@angular/core';
import { FeedCompositionService } from '../service/feed-composition.service';
import { FeedComposition } from '../shared/feedComposition';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { Router, NavigationExtras } from '@angular/router';
import { DeletePopupComponent } from './delete-popup/delete-popup.component';
import { PopupService } from '../service/popup.service';

@Component({
  selector: 'app-feed-composition-detail',
  templateUrl: './feed-composition-detail.component.html',
  styleUrls: ['./feed-composition-detail.component.css']
})
export class FeedCompositionDetailComponent implements OnInit {
  constructor(
    private feedCompositionService: FeedCompositionService,
    private router: Router,
    private popupService: PopupService
  ) {}
  feedData: FeedComposition[];
  searchText: string;

  feedListDataSource: MatTableDataSource<any>;

  feedListDisplayColumns: string[] = [
    'Feed-Stuff',
    'Dry Matter (%)',
    'ME (Kcal/kg)',
    'Protein (%)',
    'Crude Fiber (%)',
    'Ether Extract (%)',
    'NFE (%)',
    'Calcium (%)',
    'Phosphorus (%)',
    'Copper (mg/kg)',
    'Iron (mg/kg)',
    'Manganese',
    'Sodium (%)',
    'Zinc (mg/kg)',
    'Action'
  ];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.feedCompositionService.getAllFeedComposition().subscribe(
      allFeed => {
        this.feedData = allFeed;
        this.feedListDataSource = new MatTableDataSource(this.feedData);
        this.feedListDataSource.paginator = this.paginator;
      },
      err => console.log('Error in retriving Feed' + err)
    );
  }

  applyFilter() {
    this.feedListDataSource.filter = this.searchText.trim().toLowerCase();
  }

  onSearchClear() {
    this.searchText = '';
    this.applyFilter();
  }

  onNewFeedComposition() {
    this.router.navigate(['/createFeedComposition']);
  }

  onEditFeedComposition(feedComposition) {
    console.log(feedComposition);
    this.router.navigate(['/createFeedComposition'], {
      queryParams: { feedStuffName: feedComposition.feedStuffName }
    });
  }

  onDelete(feedComposition) {
    console.log(feedComposition);
    this.popupService
      .openConfirmDialog(
        'Are you sure  want to Delete Feed : ' + feedComposition.feedStuffName
      )
      .afterClosed()
      .subscribe(res => {
        console.log(res);
        if (res) {
          this.feedCompositionService
            .deleteFeedCompositionByFeedName(feedComposition.feedStuffName)
            .subscribe(
              response => {
                console.log('Successfully deleted');
                this.feedCompositionService.getAllFeedComposition().subscribe(
                  allFeed => {
                    this.feedData = allFeed;
                    this.feedListDataSource = new MatTableDataSource(
                      this.feedData
                    );
                    this.feedListDataSource.paginator = this.paginator;
                  },
                  err => console.log('Error in retriving Feed' + err)
                );
              },
              err => console.log('Error in deleting Feed')
            );
        }
      });
  }

  onFeedFormulation() {
    this.router.navigate(['/feedFormulation']);
  }
}
