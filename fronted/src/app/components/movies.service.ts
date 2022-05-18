import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Movie } from './movie';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  delete(_id: string): Observable<any> {
    return this.httpClient.delete(environment.ApiUrl + "/peliculas/"+_id);
  }
  update(movie: Movie): Observable<any> {
    return this.httpClient.put(environment.ApiUrl + "/peliculas/"+movie._id,movie)
  }
  getById(id: any):Observable<any> {
    return this.httpClient.get(environment.ApiUrl + "/peliculas/"+id);
  } 

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<any>{
    return this.httpClient.get(environment.ApiUrl+"/peliculas");
  }

  add(movie: Movie){
    return this.httpClient.post(environment.ApiUrl + "/peliculas", movie)
  }
}
