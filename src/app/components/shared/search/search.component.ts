import { Component, OnInit, Input } from '@angular/core';
import {HeroesService, Heroe} from '../../../services/heroes.service'
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent implements OnInit {

  
  heroes:any[]=[];
  termino: string;

  constructor(private _heroesService:HeroesService,
    private _router:Router,
    private _activateRoute:ActivatedRoute) { }

  ngOnInit() {

    this._activateRoute.params.subscribe(params=>{
    this.termino=params['termino']
      this.heroes=this._heroesService.buscarHeroes(params['termino'])
      console.log(this.heroes)

   
    })
  }

  verHeroe(idx:number){
    this._router.navigate(['/heroe',idx])
  }
 



}
