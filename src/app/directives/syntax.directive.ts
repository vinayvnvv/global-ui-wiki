import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({ 
	selector: "[syntaxHighlet]"
	})

export class SyntaxHighlet implements OnInit {
    private isCollapsed: Boolean = false;
    constructor(private el: ElementRef) {
    }

  

    ngOnInit() {
    	this.highlightSyntax();
    }

    highlightSyntax() {
     let syntax = new window["GUISyntax"]();
     syntax.settings.tabsize = 0;
     syntax.settings.structured = true;
     syntax.highletSyntax(this.el.nativeElement, 'html');
  }


}