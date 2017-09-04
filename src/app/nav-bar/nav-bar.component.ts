import { Component, OnInit } from '@angular/core';
import { environment } from './../../environments/environment';

@Component({
  selector: '[app-nav-bar]',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.sass']
})
export class NavBarComponent implements OnInit {

  public app_name: any = environment.app_name;

  constructor() { }

  ngOnInit() {
  }

}
