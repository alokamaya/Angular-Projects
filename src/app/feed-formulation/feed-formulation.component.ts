import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { CurrencyPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { formControlBinding } from '@angular/forms/src/directives/reactive_directives/form_control_directive';
import { FeedComposition } from '../shared/feedComposition';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-feed-formulation',
  templateUrl: './feed-formulation.component.html',
  styleUrls: ['./feed-formulation.component.css']
})
export class FeedFormulationComponent implements OnInit {
  name = 'Angular 7 reactive form with dynamic fields and validations example';
  feedFormulaForm: FormGroup;
  totalParts: number;

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

  constructor(private fb: FormBuilder) {}

  /**
   * Form initialization
   */
  ngOnInit() {
    this.feedFormulaForm = this.fb.group({
      feedNameWithParts: this.fb.array([this.buildFeedNameWithParts()])
    });
    // this.feedFormulaForm
    //   .get('feedNameWithParts')
    //   .get('feedParts0')
    //   .valueChanges.subscribe(value => console.log(value));
    // (<FormArray>this.feedNameWithParts()).at(0);
    // this.totalParts = 0;
  }

  buildFeedNameWithParts(): FormGroup {
    return this.fb.group({
      feedName: '',
      feedParts: 0
    });
  }

  get feedNameWithParts(): FormArray {
    return;
  }

  addFeedParts() {
    this.feedNameWithParts.push(this.buildFeedNameWithParts());
  }

  removeFeedParts(index: number) {
    console.log('Index to remove ' + index);
    this.feedNameWithParts.removeAt(index);
  }

  calculateFormula() {
    console.log(this.feedFormulaForm);
  }
}
