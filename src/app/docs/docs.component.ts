import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, Event } from '@angular/router';

@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.css']
})
export class DocsComponent implements OnInit {

  constructor(
  			private router:Router
  	) { }

  ngOnInit() {
  	this.scrollOnRouteChanges(); 
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
