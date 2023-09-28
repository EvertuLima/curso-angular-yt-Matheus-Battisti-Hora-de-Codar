import { Injectable } from '@angular/core';
import { Animal } from '../Animal';
import { Pessoa } from '../Pessoa';

import {HttpClient, HttpHeaders} from '@angular/common/http';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ListService {

  private apiUrl = 'http://localhost:3000/animals'
  private apiUrl2 = 'http://localhost:3000/pessoas'

  constructor(private http: HttpClient) { }

  remove(id: number){
    return this.http.delete<Animal>(`${this.apiUrl}/${id}`)
  }
  getAll(): Observable<Animal[]>{
    return this.http.get<Animal[]>(this.apiUrl);
  }

  getAllPessoas(): Observable<Pessoa[]>{
    return this.http.get<Pessoa[]>(this.apiUrl2);
  }

  getItem(id: number): Observable<Animal>{

    return this.http.get<Animal>(`${this.apiUrl}/${id}`)
  }
}
