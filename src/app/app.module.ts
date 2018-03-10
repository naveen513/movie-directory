import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { GalleryComponent } from './gallery/gallery.component';
import { MoviesService } from './shared/services/movies.service';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    MoviesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
