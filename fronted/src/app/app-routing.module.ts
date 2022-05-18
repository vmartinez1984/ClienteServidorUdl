import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormMovieComponent } from './components/form-movie/form-movie.component';
import { ListMoviesComponent } from './components/list-movies/list-movies.component';

const routes: Routes = [
  {path: '', component: ListMoviesComponent},
  {path: 'list-movies', component: ListMoviesComponent},
  {path: 'movies', component: ListMoviesComponent},
  {path: 'add-movie', component: FormMovieComponent},
  {path: 'edit-movie/:id', component: FormMovieComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
