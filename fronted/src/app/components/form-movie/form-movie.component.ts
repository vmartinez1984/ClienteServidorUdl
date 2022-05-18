import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from '../movie';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-form-movie',
  templateUrl: './form-movie.component.html',
  styleUrls: ['./form-movie.component.css']
})
export class FormMovieComponent implements OnInit {
  movie : Movie = new Movie('','','','',2020,'');
  id: any;

  constructor(
    private service: MoviesService,
    private activateRoute: ActivatedRoute,   
    private router : Router 
  ) { }

  ngOnInit(): void {    
    this.id = this.activateRoute.snapshot.paramMap.get('id');
    console.log(this.id);
    if(this.id != null){
      this.service.getById(this.id).subscribe(response=>{
        //console.log(response);
        this.movie = response;
      });
    }
  }

  save(){
    console.log(this.id)  ;
    if(this.isValid()){
      if(this.id == null){
        this.service.add(this.movie).subscribe(response =>{
          console.log("Datos registrados");
          this.router.navigate(["list-movies"])
        });
      }else{
        this.service.update(this.movie).subscribe(response=>{
          console.log("Datos actualizados")
          this.router.navigate(["list-movies"])
        })
      }
    }  
  }

  isValid():boolean{
    return true;
  }
}
