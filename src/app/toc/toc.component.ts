import { Component, OnInit, Input, AfterViewInit } from '@angular/core';


export class TOC {
	name: String;
	id: String;
	child: Array<TOC>
	constructor(name, id, child) {
		this.name = name;
		this.id = id;
		this.child = child;
	}
}

@Component({
  selector: '[toc]',
  templateUrl: './toc.component.html',
  styleUrls: ['./toc.component.css']
})


export class TocComponent implements OnInit, AfterViewInit {

  @Input() list: Array<TOC>;

  constructor() { }

  ngOnInit() {
  }


  ngAfterViewInit() {
  	setTimeout(( () => { this.initScrollsPsy(); }), 1500)
  	
  }

  initScrollsPsy() {
  	let section1 = (document.querySelectorAll(".d-sub-header"));
  	let section2 = (document.querySelectorAll(".d-header"));
  	let sections1 = {};
  	let sections2 = {};
  	var i = 0;
  	Array.prototype.forEach.call(section1, function(e) {
	    sections1[e.id] = (e.offsetParent.offsetTop + e.offsetTop);
	});
	Array.prototype.forEach.call(section2, function(e) {
	    sections2[e.id] = e.offsetParent.offsetTop;
	});

	document.getElementById("nav-content").onscroll = function() {
    var scrollPosition = document.getElementById("nav-content").scrollTop;
    
    for (let i in sections2) {
      if (sections2[i] <= scrollPosition) {
        //document.querySelector('.item.toc-item.active').setAttribute('class', 'item toc-item');
        var last_active = document.querySelector('[toc-active="true"]');
        last_active.setAttribute('class', 'item');
        last_active.setAttribute('toc-active', 'false');

        //document.querySelector('a[href*=' + i + ']').setAttribute('class', 'item toc-item active');
        var current_active = document.querySelector('a[href*=' + i + ']');
        current_active.setAttribute('class', 'item active');
        current_active.setAttribute('toc-active', 'true');
      }
    }

    for (let i in sections1) {
      if (sections1[i] <= scrollPosition) {
        //document.querySelector('.item.toc-item.active').setAttribute('class', 'item toc-item');
        var last_active = document.querySelector('[toc-sub-active="true"]');
        last_active.setAttribute('class', 'item');
        last_active.setAttribute('toc-sub-active', 'false');

        //document.querySelector('a[href*=' + i + ']').setAttribute('class', 'item toc-item active');
        var current_active = document.querySelector('a[href*=' + i + ']');
        current_active.setAttribute('class', 'item active');
        current_active.setAttribute('toc-sub-active', 'true');
      }
    }
  };

  }

}
