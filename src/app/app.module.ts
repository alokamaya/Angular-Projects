import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ShowcaseSliderComponent } from './showcase-slider/showcase-slider.component';
import { BlogsComponent } from './blogs/blogs.component';
import { DestinationsComponent } from './destinations/destinations.component';
import { GalleryComponent } from './gallery/gallery.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent, ShowcaseSliderComponent, BlogsComponent, DestinationsComponent, GalleryComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
