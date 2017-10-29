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
  @Input() url: String;

  constructor() { }

  ngOnInit() {
  }


  ngAfterViewInit() {
  	setTimeout(( () => { 
  		this.initScrollsPsy(); 
  		this.placeTOC();
  	}), 1500)
  	
  }

  placeTOC() {
     let e = document.getElementById("toc-container");
     let h = window.innerHeight -  e.offsetTop;
     var e_h = (h-70);
     e.style.height = e_h + "px";
     let scroller = document.getElementById("nav-content");
     scroller.addEventListener('scroll', (ev)=> {
        if(ev.target["id"] != "nav-content") return;
        let scrolled = ev.target["scrollTop"];
        if(scrolled < 184 ) {
          e.style.marginTop = "-" + (scrolled+95) + "px";
          e.style.height = e_h + "px";
        } else {
          e.style.marginTop = "-" + (184+95) + "px";
          e.style.height = (e_h + 120) + "px"
        }
    }, true);
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
          if(last_active) {
            last_active.setAttribute('class', 'item');
            last_active.setAttribute('toc-active', 'false');
          }

          //document.querySelector('a[href*=' + i + ']').setAttribute('class', 'item toc-item active');
          var current_active = document.querySelector('a[href*=' + i + ']');
          if(current_active) {
            current_active.setAttribute('class', 'item active');
            current_active.setAttribute('toc-active', 'true');
          }
        }
      }

      for (let i in sections1) {
        if (sections1[i] <= scrollPosition) {
          //document.querySelector('.item.toc-item.active').setAttribute('class', 'item toc-item');
          var last_active = document.querySelector('[toc-sub-active="true"]');
          if(last_active) {
            last_active.setAttribute('class', 'item');
            last_active.setAttribute('toc-sub-active', 'false');
          }

          //document.querySelector('a[href*=' + i + ']').setAttribute('class', 'item toc-item active');
          var current_active = document.querySelector('a[href*=' + i + ']');
          if(current_active) {
            current_active.setAttribute('class', 'item active');
            current_active.setAttribute('toc-sub-active', 'true');
          }
        }
      }
    };

  }

}
