import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Digimon } from '../models/Digimon. model';

@Injectable({
  providedIn: 'root'
})
export class DigimonService {
  apiBaseUrl = 'https://digimon-api.herokuapp.com/api/';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  constructor(private htttpClient: HttpClient) {

  }


  public findAllDigimon() : Observable<Digimon[]> {
    return this.htttpClient.get<Digimon[]>(this.apiBaseUrl + "digimon");
  }

  public findByNameDigimon(name : String) : Observable<Digimon[]> {
    return this.htttpClient.get<Digimon[]>(this.apiBaseUrl + "digimon/name/" + name);
  }
}
