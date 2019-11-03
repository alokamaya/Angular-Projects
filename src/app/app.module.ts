import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ShowcaseSliderComponent } from './showcase-slider/showcase-slider.component';
import { BlogsComponent } from './blogs/blogs.component';
import { GalleryComponent } from './gallery/gallery.component';
import { DestinationListComponent } from './destination-list/destination-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatDialogModule,
  MatTableModule,
  MatPaginatorModule,
  MatIcon,
  MatIconModule,
  MatInputModule,
  MatCardModule,
  MatDividerModule
} from '@angular/material';
import { DestinationService } from './service/destination.service';
import { HttpClientModule } from '@angular/common/http';
import { FeedCompositionDetailComponent } from './feed-composition-detail/feed-composition-detail.component';
import { FeedCompositionCreateComponent } from './feed-composition-create/feed-composition-create.component';
import { FeedCompositionService } from './service/feed-composition.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DeletePopupComponent } from './feed-composition-detail/delete-popup/delete-popup.component';
import { PopupService } from './service/popup.service';
import { FeedFormulationComponent } from './feed-formulation/feed-formulation.component';
import { CurrencyPipe } from '@angular/common';
import { StockFeedComponent } from './stock-feed/stock-feed.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ShowcaseSliderComponent,
    BlogsComponent,
    DestinationListComponent,
    GalleryComponent,
    FeedCompositionDetailComponent,
    FeedCompositionCreateComponent,
    DeletePopupComponent,
    FeedFormulationComponent,
    StockFeedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatDialogModule,
    HttpClientModule,
    MatTableModule,
    MatIconModule,
    MatPaginatorModule,
    MatInputModule,
    MatDialogModule,
    MatCardModule,
    MatDividerModule
  ],
  providers: [
    DestinationService,
    FeedCompositionService,
    PopupService,
    CurrencyPipe
  ],
  bootstrap: [AppComponent],
  entryComponents: [DeletePopupComponent]
})
export class AppModule {}
