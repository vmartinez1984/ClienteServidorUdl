import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListMoviesComponent } from './components/list-movies/list-movies.component';
import { FormMovieComponent } from './components/form-movie/form-movie.component';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './templates/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,    
    ListMoviesComponent,
    FormMovieComponent,
    MenuComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
