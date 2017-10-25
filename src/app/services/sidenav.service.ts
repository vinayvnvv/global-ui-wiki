import { Injectable } from '@angular/core';
@Injectable()
export class SideNavService {
	isOpen:Boolean = false;
	navBarElement: any;


	constructor() {

	}

	toggle() {
		this.navBarElement = document.getElementById('side-nav');
		if(this.navBarElement.classList.contains('active'))
			this.navBarElement.classList.remove('active');
		else
			this.navBarElement.classList.add('active');
	}
	close() {
		this.navBarElement = document.getElementById('side-nav');
		this.navBarElement.classList.remove('active');
	}
	open() {
		this.navBarElement = document.getElementById('side-nav');
		this.navBarElement.classList.add('active');
	}
}