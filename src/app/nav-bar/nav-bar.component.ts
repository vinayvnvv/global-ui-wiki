import { Component, OnInit } from '@angular/core';
import { environment } from './../../environments/environment';
import { SideNavService } from './../services/sidenav.service';
@Component({
  selector: '[app-nav-bar]',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.sass'],
  providers: [SideNavService]
})
export class NavBarComponent implements OnInit {

  public app_name: any = environment.app_name;

  constructor(
  		public sideNav: SideNavService
  	) { }

  ngOnInit() {
  }

}
