import {Injectable} from '@angular/core';
import {HEROES} from './mock-heroes';

@Injectable()
export class HeroService{
	getHeroes() {
		/*for simulate slow connection:
		return new Promise<Hero[]>(resolve =>
			setTimeout(() => resolve(HEROES), 2000)
		);*/
		return Promise.resolve(HEROES);
	}
}