import { Component, OnInit } from '@angular/core';
import { Generic } from '../model/generic.model';
import { LibroService } from '../model/libro.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	private libros: Generic[] = new Array<Generic>();
	libro:string;
	publicador:string
	totalResultados:number
	entradasVacias:boolean

	constructor(private libroService: LibroService) {
		this.totalResultados = -1;
		this.entradasVacias = false;
		this.libro = "";
		this.publicador = "";
	}

  ngOnInit() {
  }

	getLibrosByTituloYPublicador():void{
			if(this.isEmpty(this.libro) && this.isEmpty(this.publicador)){
				this.entradasVacias = true;
				this.totalResultados = -1;
			}else{
				this.entradasVacias = false;
				this.libroService.findLibrosByTituloYPublicador(this.libro, this.publicador).subscribe(data => {
					this.libros = data;
					console.log(data);
					this.totalResultados = data.length;
				});
			}
	}

	isEmpty(prop): boolean{
		return (
			prop === null ||
			prop === undefined ||
			(prop.hasOwnProperty('length') && prop.length === 0) ||
			(prop.constructor === Object && Object.keys(prop).length === 0)
		);
	}

	getLibros(): Generic[] {
		return this.libros;
	}

}
