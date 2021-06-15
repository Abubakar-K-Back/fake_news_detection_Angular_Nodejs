import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  uri='http://localhost:5000/popo'
  authtoken;
  user;

  constructor(private http:HttpClient) { }


  login(body)
  {

  return this.http.post(`${this.uri}`,body)

  }

}


