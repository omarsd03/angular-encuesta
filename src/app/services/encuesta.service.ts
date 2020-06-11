import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Encuesta } from '../models/encuesta';

@Injectable({
  providedIn: 'root'
})
export class EncuestaService {

  encuesta: Encuesta[];
  selectedEncuesta: Encuesta;

  readonly URL_API = 'http://localhost:3000';

  constructor(private http: HttpClient) {
    this.selectedEncuesta = new Encuesta();
  }

  postEncuesta(encuesta: Encuesta) {
    return this.http.post(this.URL_API, encuesta);
  }

  getEncuesta(id: string) {
    return this.http.get(this.URL_API + `/${id}`);
  }

}
