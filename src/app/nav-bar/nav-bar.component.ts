import { Component, OnInit } from '@angular/core';
import { environment } from './../../environments/environment';
import { SideNavService } from './../services/sidenav.service';
import { NavBarService } from './../services/navbar.service';
@Component({
  selector: '[app-nav-bar]',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.sass'],
  providers: [SideNavService, NavBarService]
})
export class NavBarComponent implements OnInit {

  public app_name: any = environment.app_logo_name;

  constructor(
  		public sideNav: SideNavService,
      public navBar: NavBarService
  	) { }

  ngOnInit() {
  }

}
