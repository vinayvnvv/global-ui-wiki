import { Component, OnInit } from '@angular/core';
import { environment } from './../../environments/environment';

@Component({
  selector: '[app-side-nav]',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.sass']
})
export class SideNavComponent implements OnInit {

  public app_name: any = environment.app_name;

  constructor(
  	) { }

  ngOnInit() {
  }

}
