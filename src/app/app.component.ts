import { Component } from '@angular/core';
import { Spartan } from './spartan';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TDF';
  spartanModel = new Spartan('Rob','rob@bank.com','777770000',true);
}
