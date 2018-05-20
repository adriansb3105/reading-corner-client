import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';

import { Generic } from './generic.model';

//import "rxjs/add/operator/map";

@Injectable()
export class LibroService {
  private url = 'http://localhost:8080/api/buscar';

    constructor(private http: Http){
    }
    
    findLibrosByTituloYPublicador(libro:string, publicador:string): Observable<Generic[]> {
        return this.http.get(this.url + '/' + libro + '/' + publicador).pipe(map(response => response.json()))
    }
}
