import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slider } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [slider],
})
export class AppComponent implements OnInit {
  title = 'Employee List-o-matic';

  ngOnInit() {
    console.log(this.title, 'initialized!');
  }

  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData['animation']
    );
  }
}
