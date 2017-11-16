import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({ 
	selector: "[syntaxHighlet]"
	})

export class SyntaxHighlet implements OnInit {
    private isCollapsed: Boolean = false;
    private mode: string = "html";
    constructor(private el: ElementRef) {
    }

  

    ngOnInit() {
    	this.highlightSyntax();
    }

    highlightSyntax() {
     if(this.el.nativeElement.attributes.getNamedItem("mode"))
         this.mode = this.el.nativeElement.attributes["mode"].nodeValue;
     let syntax = new window["GUISyntax"]();
     syntax.settings.tabsize = 0;
     syntax.settings.structured = true;
     syntax.highletSyntax(this.el.nativeElement, this.mode);
  }


}