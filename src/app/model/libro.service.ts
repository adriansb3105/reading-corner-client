import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';

import { Generic } from './generic.model';

//import "rxjs/add/operator/map";

@Injectable()
export class LibroService {
  private url = 'http://localhost:8080/api/buscar';

    constructor(private http: Http){
        const headers = new Headers();
        headers.append('Access-Control-Allow-Headers', 'Content-Type');
        headers.append('Access-Control-Allow-Methods', 'GET');
        headers.append('Access-Control-Allow-Origin', '*');
    }
    
    findLibrosByTituloYPublicador(libro:string, publicador:string): Observable<Generic[]> {
        return this.http.get(this.url + '/' + libro + '/' + publicador).pipe(map(response => response.json()))
    }

    //findLibrosByTituloYPublicador(libro:string, publicador:string): void {
    //    this.http.get(this.url + '/' + publicador + '/' + libro).subscribe(res => console.log(res));
    //}
}
