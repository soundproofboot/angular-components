import { Component, signal } from '@angular/core';
import { PizzaToppings } from './pizza-toppings/pizza-toppings';
import { CbaresDiceRoll } from './cbares-dice-roll/cbares-dice-roll';

@Component({
  selector: 'app-root',
  imports: [
    PizzaToppings,
    CbaresDiceRoll
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-components');
}
