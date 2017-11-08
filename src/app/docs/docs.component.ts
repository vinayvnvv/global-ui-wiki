import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, Event } from '@angular/router';
import { StringsService } from './../services/strings.service';
import { ColorsModel } from './../models/colors.model';
@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.sass'],
  providers: [ StringsService ]
})
export class DocsComponent implements OnInit {

  constructor(
  			private router:Router,
        private colors: StringsService
  	) { }

  ngOnInit() {
  	this.scrollOnRouteChanges();
    setTimeout(() => { document.getElementById("side-nav").classList.add("active"); }, 550);
    setTimeout(() => { this.changeNavColor(); }, 1300);
    this.changeColorOfNavOnScroll();
  }

  changeNavColor() {
    let elClass:DOMTokenList = document.querySelectorAll('[app-nav-bar]')[0].classList;
    elClass.remove("primary");
    elClass.remove("no-shadow");
    elClass.remove('home-navbar');
    elClass.add('docs-navbar');
  }


  scrollOnRouteChanges() {
  	let content = document.getElementById("nav-content");
    this.router.events.forEach((event) => {
	    if(event instanceof NavigationStart) {
	    	let url = event.url.split('/');
	    	if(url[url.length-1].indexOf('#') == -1)
	    		content.scrollTo(0, 0);
	    }
	    // NavigationEnd
	    // NavigationCancel
	    // NavigationError
	    // RoutesRecognized
	  });
  }

  changeColorOfNavOnScroll() {
    let elRef = document.getElementById("nav-content");
    let elClass:DOMTokenList = document.querySelectorAll('[app-nav-bar]')[0].classList;
    let isAdd: boolean = true;
    let colors_length: number = this.colors.colors.length;
    let index: number = 0;
    let last_color: ColorsModel = null;
    elRef.addEventListener("scroll", (ev) => {
      if(isAdd) {
        isAdd = false;
        if(elClass.contains('home-navbar')) return;
        if(last_color) elClass.remove(last_color.value);
        elClass.add(this.colors.colors[index].value);
        last_color = this.colors.colors[index];
        if(index >= colors_length) index = -1;
        index = (Math.floor(Math.random() * colors_length) + 1) - 1;
        setTimeout(() => {
          isAdd = true;
        }, 1200)
      }
    }, true);
  }

}
