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

  remove(animais: Animal[],animal: Animal) {
    console.log("Ativando serviço")
    return animais.filter((a) => animal.nome !== a.nome);
  }

getAll():Observable<Animal[]> {
    return this.http.get<Animal[]>(this.apiUrl);
  }
}