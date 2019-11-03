import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Destination } from '../shared/Destination';
import { DestinationService } from '../service/destination.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  destinationName: string;
  photoUrls: string[] = new Array();

  constructor(
    private route: ActivatedRoute,
    private destinationService: DestinationService
  ) {}

  ngOnInit() {
    this.destinationName = this.route.snapshot.params['destinationName'];
    console.log('Desination name:' + this.destinationName);
    const destinations: Destination[] = this.route.snapshot.data[
      'eachDestination'
    ];
    this.photoUrls = destinations[0].photoUrls;
    console.log('Photot URL list: ' + this.photoUrls);
  }
}
