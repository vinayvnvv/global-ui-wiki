import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-columns-anim',
  templateUrl: './columns-anim.component.html',
  styleUrls: ['./columns-anim.component.sass']
})
export class ColumnsAnimComponent implements OnInit {
  private classRef: DOMTokenList;
  public view: String = 'desktop';
  constructor(
  		private eRef: ElementRef
  	) { }

  ngOnInit() {
  	this.classRef = this.eRef.nativeElement.children["0"].children["1"].classList;
  	setInterval(() => { this.animateThis(); }, 2000); 
  }

  animateThis() {
  	if(this.classRef.contains('desktop')) {
  		this.classRef.remove('desktop');
  		this.classRef.add('mobile')
  		this.view = 'mobile';
  	} else {
  		this.classRef.remove('mobile');
  		this.classRef.add('desktop');
  		this.view = 'desktop';
  	}
  }

}
