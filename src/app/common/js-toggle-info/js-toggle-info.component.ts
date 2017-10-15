import { Component, OnInit } from '@angular/core';
import { environment } from './../../../environments/environment';

@Component({
  selector: 'app-js-toggle-info',
  templateUrl: './js-toggle-info.component.html',
  styleUrls: ['./js-toggle-info.component.css']
})
export class JsToggleInfoComponent implements OnInit {
  
  public app_structured_name = environment.app_structured_name;
  constructor() { }

  ngOnInit() {
  }

}
