import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-sidebar-anim',
  templateUrl: './sidebar-anim.component.html',
  styleUrls: ['./sidebar-anim.component.sass']
})
export class SidebarAnimComponent implements OnInit {
  private classRef: DOMTokenList;
  public view: String = 'desktop';
  constructor(
  		private eRef: ElementRef
  	) { }

  ngOnInit() {
  	this.classRef = this.eRef.nativeElement.children["0"].children["1"].classList;
  	setInterval(() => { 
  		this.animateThis();
  	}, 8000); 
  }

  animateThis() {
  		//this.classRef.remove('desktop');
  		//this.classRef.remove('active');
  		this.classRef.add('desktop-active')
  		this.view = 'desktop-active';
  		setTimeout(() => {
	  		this.classRef.remove('desktop-active');
	  		this.classRef.add('mobile');
	  		this.view = 'mobile';
	  		setTimeout(() => {;
		  		this.classRef.add('mobile-active');
		  		this.view = 'mobile-active';
		  		setTimeout(() => {;
			  		this.classRef.remove('mobile-active');
			  		this.classRef.remove('mobile');
			  		this.classRef.add('desktop');
			  		this.view = 'desktop';
	  		}, 2000);
	  		}, 2000);
  		}, 2000)
  }
}
