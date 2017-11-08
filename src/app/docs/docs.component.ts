import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, Event } from '@angular/router';

@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.sass']
})
export class DocsComponent implements OnInit {

  constructor(
  			private router:Router
  	) { }

  ngOnInit() {
  	this.scrollOnRouteChanges();
    setTimeout(() => { document.getElementById("side-nav").classList.add("active"); }, 550);
    this.changeNavColor();
  }

  changeNavColor() {
    let elClass:DOMTokenList = document.querySelectorAll('[app-nav-bar]')[0].classList;
    elClass.remove("primary")
    elClass.remove("no-shadow")
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

}
