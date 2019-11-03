import { Destination } from './../shared/Destination';
import { Component, OnInit } from '@angular/core';
import { DestinationService } from '../service/destination.service';
import { NgForm } from '@angular/forms';
import { HttpResponse } from '@angular/common/http';
import { DestinationError } from '../shared/destinationError';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-destination-list',
  templateUrl: './destination-list.component.html',
  styleUrls: ['./destination-list.component.css']
})
export class DestinationListComponent implements OnInit {
  destinations: Destination[];

  random: number;

  constructor(
    private destinationService: DestinationService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.random = Math.floor(Math.random() * 2);
    const resolvedDestinationList: Destination[] | DestinationError = this.route
      .snapshot.data['resolveDestinations'];

    if (resolvedDestinationList instanceof DestinationError) {
      console.log(
        `Error in Destination All service: ${
          resolvedDestinationList.errorFirendlyMessage
        }`
      );
    } else {
      this.destinations = resolvedDestinationList;
    }
  }
}
