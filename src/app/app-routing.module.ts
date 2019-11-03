import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DestinationListComponent } from './destination-list/destination-list.component';
import { GalleryComponent } from './gallery/gallery.component';
import { DestinationResolverService } from './service/destination-resolver.service';
import { DestinationEachResolverService } from './service/destination-each-resolver.service';
import { FeedCompositionDetailComponent } from './feed-composition-detail/feed-composition-detail.component';
import { FeedCompositionCreateComponent } from './feed-composition-create/feed-composition-create.component';
import { FeedFormulationComponent } from './feed-formulation/feed-formulation.component';
import { StockFeedComponent } from './stock-feed/stock-feed.component';

const routes: Routes = [
  { path: '', redirectTo: '/stock-info', pathMatch: 'full' },
  {
    path: 'home',
    component: DestinationListComponent,
    resolve: { resolveDestinations: DestinationResolverService }
  },
  {
    path: 'feedCompositionDetail',
    component: FeedCompositionDetailComponent
  },
  {
    path: 'createFeedComposition',
    component: FeedCompositionCreateComponent
  },
  {
    path: 'feedFormulation',
    component: FeedFormulationComponent
  },
  {
    path: 'gallery/:destinationName',
    component: GalleryComponent,
    resolve: { eachDestination: DestinationEachResolverService }
  },
  {
    path: 'stock-info',
    component: StockFeedComponent
  },
  { path: '**', component: DestinationListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
