import { Injectable } from '@angular/core';
import { Animal } from '../Animal';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService {
private apiUrl = 'http://localhost:3000/animais';
  constructor(private http: HttpClient) { }

  getAll():Observable<Animal[]> {
      return this.http.get<Animal[]>(this.apiUrl);
    }

  getItem(id:Number):Observable<Animal> {
    return this.http.get<Animal>(`${this.apiUrl}/${id}`);
  }
  remove(id: Number) {
    return this.http.delete<Animal>(`${this.apiUrl}/${id}`);
  }
  setItem(animal: Animal):Observable<Animal> {
    return this.http.post<Animal>(this.apiUrl,animal);
  }
}