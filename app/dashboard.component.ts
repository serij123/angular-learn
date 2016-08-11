import { Component } from '@angular/core';
import {Hero} from './hero';
import {HeroService} from './hero.service';

@Component({
  selector: 'my-dashboard',
  templateUrl : '/app/dashboard.component.html'
})
export class DashboardComponent {
	heroes : Hero[];
	selectedHero : Hero;
	title  = 'Top heroes';
	constructor(private heroService: HeroService){}

    ngOnInit() {
    	this.getHeroes();
    }

    getHeroes() {
    	this.heroService.getHeroes().then(heroes => this.heroes = heroes.slice(1, 5));
    }

    gotoDetail(hero : Hero) {
    	this.selectedHero = hero;
    }

}