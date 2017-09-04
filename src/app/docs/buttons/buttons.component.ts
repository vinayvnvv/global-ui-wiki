import { Component, OnInit, AfterViewInit } from '@angular/core';

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
  }


  highlightSyntax() {
  	 if(window["Prism"])
  		Prism.highlightAll();

     var h = window.innerHeight -  document.getElementById("toc-container").offsetTop;
     document.getElementById("toc-container").style.height = (h-70) + "px";
  }

}
