import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { FeedComposition } from '../shared/feedComposition';
import { FeedCompositionService } from '../service/feed-composition.service';

@Component({
  selector: 'app-feed-composition-create',
  templateUrl: './feed-composition-create.component.html',
  styleUrls: ['./feed-composition-create.component.css']
})
export class FeedCompositionCreateComponent implements OnInit {
  @ViewChild('f') feedCompositionForm: NgForm;
  isEdit = false;

  constructor(
    private router: Router,
    private feedCompositionService: FeedCompositionService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const feedName = this.route.snapshot.queryParams['feedStuffName'];
    console.log('Selected feed stuff name:' + feedName);
    if (feedName != null) {
      this.feedCompositionService
        .getFeedCompositionFromFeedName(feedName)
        .subscribe(
          feedComposition => {
            console.log('Feed Composition to be edited : ' + feedComposition);
            this.isEdit = true;
            this.feedCompositionForm.form.patchValue({
              feedStuffName: feedComposition.feedStuffName,
              dryMatter: feedComposition.dryMatter,
              me: feedComposition.me,
              protein: feedComposition.protein,
              crudFiber: feedComposition.crudFiber,
              etherExtract: feedComposition.etherExtract,
              NFE: feedComposition.nfe,
              calcium: feedComposition.calcium,
              phosphorus: feedComposition.phosphorus,
              copper: feedComposition.copper,
              iron: feedComposition.iron,
              manganese: feedComposition.manganese,
              sodium: feedComposition.sodium,
              zinc: feedComposition.zinc
            });
          },
          err => console.log(err)
        );
    }
  }

  onCreateFeedComposition() {
    console.log(this.feedCompositionForm.value.feedStuffName);
    const newFeed: FeedComposition = new FeedComposition(
      this.feedCompositionForm.value.feedStuffName,
      this.feedCompositionForm.value.dryMatter,
      this.feedCompositionForm.value.me,
      this.feedCompositionForm.value.protein,
      this.feedCompositionForm.value.crudFiber,
      this.feedCompositionForm.value.etherExtract,
      this.feedCompositionForm.value.NFE,
      this.feedCompositionForm.value.calcium,
      this.feedCompositionForm.value.phosphorus,
      this.feedCompositionForm.value.copper,
      this.feedCompositionForm.value.iron,
      this.feedCompositionForm.value.manganese,
      this.feedCompositionForm.value.sodium,
      this.feedCompositionForm.value.zinc
    );
    console.log('New Feed => ' + JSON.stringify(newFeed));
    this.feedCompositionService.createNewFeedComposition(newFeed).subscribe(
      result => {
        console.log('Result after feed creating : ' + result);
        this.router.navigate(['/feedCompositionDetail']);
      },
      err => console.log('Error => ' + err)
    );
  }

  onCancel() {
    console.log('in onCancel');
    this.router.navigate(['/feedCompositionDetail']);
  }
}
