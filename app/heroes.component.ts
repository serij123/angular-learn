import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HeroService} from './hero.service';
import {Hero} from './hero';
import {HeroDetailComponent} from './hero-detail.component';


@Component({
  selector : 'my-heroes',
  directives: [HeroDetailComponent],
  templateUrl:'app/heroes.component.html',
  styleUrls : ['app/heroes.component.css']
})
export class HeroesComponent implements OnInit {
	heroes : Hero[];
	selectedHero : Hero;
    title = 'Tour or heroes';
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

