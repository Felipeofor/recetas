import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JsonServiceService {
  
  constructor(private http:HttpClient) {
    console.log('funcionando servicio');
   }

    getJson(url: string){
      return this.http.get(url);
    }

}
