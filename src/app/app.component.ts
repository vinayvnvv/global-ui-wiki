import { Component } from '@angular/core';
import { SideNavService } from './services/sidenav.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  providers: [SideNavService]
})
export class AppComponent {
  title = 'app works!';
  constructor(
  		public sideNav: SideNavService
  	) {

  }
}
