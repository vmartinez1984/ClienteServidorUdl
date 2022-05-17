import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from '../movie';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.css']
})
export class ListMoviesComponent implements OnInit {
  movies : Movie[]= [];

  constructor(
    private service: MoviesService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.service.getAll().subscribe(response =>{
      this.movies = response;
      console.log(this.movies)
    });
  }

  edit(movie:Movie){
    this.router.navigate(["/edit-movie/"+ movie._id]);
  }
}
