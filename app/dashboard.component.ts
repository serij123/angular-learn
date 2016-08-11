import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {Hero} from './hero';
import {HeroService} from './hero.service';

@Component({
  selector: 'my-dashboard',
  templateUrl : '/app/dashboard.component.html'
})
export class DashboardComponent {
	heroes : Hero[];
	title  = 'Top heroes';
	constructor(
		private heroService: HeroService, 
		private router: Router) {
	}

    ngOnInit() {
    	this.getHeroes();
    }

    getHeroes() {
    	this.heroService.getHeroes().then(heroes => this.heroes = heroes.slice(1, 5));
    }

    gotoDetail(hero : Hero) {
    	let link = ['/detail', hero.id];
    	this.router.navigate(link);
    }

}