import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import {Hero} from './hero';
import {HeroService} from './hero.service';


@Component({
  moduleId:module.id,
  selector : 'my-heroes',
  templateUrl:'/app/heroes.component.html',
  styleUrls : ['app/heroes.component.css']
})
export class HeroesComponent implements OnInit {
	heroes : Hero[];
	selectedHero : Hero;
    constructor(
    	private heroService: HeroService,
    	private router: Router){}

    ngOnInit() {
    	this.getHeroes();
    }

    getHeroes() {
    	this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

    onSelect(hero : Hero) {
    	this.selectedHero = hero;
    }
    gotoDetail() {
    	let link = ['/detail', this.selectedHero.id];
    	this.router.navigate(link);
    }
}

