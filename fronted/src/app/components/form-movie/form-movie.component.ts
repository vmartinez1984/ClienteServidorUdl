import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  ) { }

  ngOnInit(): void {    
    this.id = this.activateRoute.snapshot.paramMap.get('id');
    console.log(this.id);
    if(this.id){
      this.service.getById(this.id).subscribe(response=>{
        //console.log(response);
        this.movie = response;
      });
    }
  }

  save(){  
    if(this.isValid()){
      if(this.id){
        this.service.update(this.movie).subscribe(response=>{
          console.log("Datos actualizados")
        })
      }else{
        this.service.add(this.movie).subscribe(response =>{
          console.log("Datos registrados");
        });
      }
    }  
  }

  isValid():boolean{
    return true;
  }
}
