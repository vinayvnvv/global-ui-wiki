import { Injectable } from '@angular/core';
@Injectable()
export class NavBarService {
	isOpen:Boolean = false;
	navBarElement: any;
	isActive: Boolean =  false;


	constructor() {

	}

	toggle() {
		this.navBarElement = document.getElementById('nav-bar');
		if(this.navBarElement.classList.contains('active'))
			this.navBarElement.classList.remove('active');
		else
			this.navBarElement.classList.add('active');

		this.isActive = !this.isActive;
	}
	close() {
		this.navBarElement = document.getElementById('nav-bar');
		this.navBarElement.classList.remove('active');
		this.isActive = false;
	}
	open() {
		this.navBarElement = document.getElementById('nav-bar');
		this.navBarElement.classList.add('active');
		this.isActive = true;
	}
}