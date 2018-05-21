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

  constructor(private libroService: LibroService) {
		this.totalResultados = 0;
	}

  ngOnInit() {
  }

	getLibrosByTituloYPublicador():void{
			this.libroService.findLibrosByTituloYPublicador(this.libro, this.publicador).subscribe(data => {this.libros = data; this.totalResultados = data.length});
	}

	getLibros(): Generic[] {
		return this.libros;
	}

}
