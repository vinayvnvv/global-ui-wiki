import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  	document.getElementById("side-nav").classList.remove("active");
  	this.changeNavColor();
  }

  changeNavColor() {
    let elClass:DOMTokenList = document.querySelectorAll('[app-nav-bar]')[0].classList;
    elClass.remove('white');
    elClass.add('no-shadow');
    elClass.add('primary');
  }

}
