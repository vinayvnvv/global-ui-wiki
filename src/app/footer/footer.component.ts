import { Component, OnInit } from '@angular/core';
import { Router, RouterStateSnapshot, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  isFooter: boolean = false;
  constructor(
  		private router: Router
  	) { }

  ngOnInit() {
  	this.handleFooterVisibility();
  }

  handleFooterVisibility() {
  	this.router.events.subscribe((shot)=>{
  		if(shot instanceof NavigationStart) {
  			if(shot.url == '/home' || shot.url == '/') this.isFooter = false;
  			else this.isFooter = true;
  		}
  	})
  }

}
