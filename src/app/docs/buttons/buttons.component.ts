import { Component, OnInit, AfterViewInit, HostListener } from '@angular/core';

declare const Prism: any;

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit, AfterViewInit {
  public tab:any = "example";
  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit() {
  	this.highlightSyntax();
    this.placeTOC();
  }


  highlightSyntax() {
  	 if(window["Prism"])
  		Prism.highlightAll();
  }

       

  placeTOC() {
     let e = document.getElementById("toc-container");
     let h = window.innerHeight -  e.offsetTop;
     e.style.height = (h-70) + "px";
     let scroller = document.getElementById("nav-content");
     scroller.addEventListener('scroll', (ev)=> {
        if(ev.target["id"] != "nav-content") return;
        let scrolled = ev.target["scrollTop"];
        console.log(ev.target["scrollTop"], ev)
        if(scrolled < 184 ) {
          e.style.marginTop = "-" + (scrolled+95) + "px";
        }
    }, true);
    }
     

  

}
