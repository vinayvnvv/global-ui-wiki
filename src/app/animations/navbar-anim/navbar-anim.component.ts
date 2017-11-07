import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-navbar-anim',
  templateUrl: './navbar-anim.component.html',
  styleUrls: ['./navbar-anim.component.sass']
})
export class NavbarAnimComponent implements OnInit {
  private classRef: DOMTokenList;
  public view: String = 'desktop';
  constructor(
  		private eRef: ElementRef
  	) { }

  ngOnInit() {
  	this.classRef = this.eRef.nativeElement.children["0"].children["1"].classList;
  	setInterval(() => { 
  		this.animateThis();

  	}, 4000); 
  }

  animateThis() {
  	if(this.classRef.contains('desktop')) {
  		this.classRef.remove('desktop');
  		this.classRef.remove('active');
  		this.classRef.add('mobile')
  		this.view = 'mobile';
  		setTimeout(() => {
  		this.classRef.add('active');
  		this.view = 'active';
  		}, 2000)
  	} else {
  		this.classRef.remove('mobile');
  		this.classRef.add('desktop');
  		this.view = 'desktop';
  	}
  }
}
