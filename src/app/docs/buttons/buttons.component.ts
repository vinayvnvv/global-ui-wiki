import { Component, OnInit, AfterViewInit, HostListener } from '@angular/core';
import { TOC } from './../../toc/toc.component';

declare const Prism: any;

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit, AfterViewInit {
  public tab:any = "example";
  public toc_list: Array<TOC> = [];
  constructor() { }

  ngOnInit() {
    this.addListToToc();
  }
  ngAfterViewInit() {
  	this.highlightSyntax();
    this.placeTOC();
  }


  highlightSyntax() {
  	 if(window["Prism"])
  		Prism.highlightAll();
  }


  addListToToc() {
    console.log(this.toc_list)
    let toc_sub_list: Array<TOC> = [];
    this.toc_list.push(new TOC("Basic", "toc_basic", null));
    this.toc_list.push(new TOC("Sizes", "toc_sizes", null));
    this.toc_list.push(new TOC("Shape", "toc_shape", null));

    toc_sub_list.push(new TOC("Loading", "toc_loading", null))
    toc_sub_list.push(new TOC("Disabled", "toc_disabled", null))
    toc_sub_list.push(new TOC("Active", "toc_active", null))
    this.toc_list.push(new TOC("States", "toc_states", toc_sub_list ));

    toc_sub_list = [];
    toc_sub_list.push(new TOC("Text with Icons", "toc_Text_with_Icons", null))
    toc_sub_list.push(new TOC("Only Icons", "toc_Only_Icons", null))
    this.toc_list.push(new TOC("Buttons with Icons", "toc_Buttons_with_Icons", toc_sub_list));

    this.toc_list.push(new TOC("Round Buttons", "toc_Round_Buttons", null));
    this.toc_list.push(new TOC("Block Buttons", "toc_Block_Buttons", null));

    toc_sub_list = [];
    toc_sub_list.push(new TOC("Raised Buttons", "toc_Raised_Buttons", null))
    toc_sub_list.push(new TOC("Ripple Ink Buttons", "toc_Ripple_Ink_Buttons", null))
    toc_sub_list.push(new TOC("Gradient Buttons", "toc_Gradient_Buttons", null))
    toc_sub_list.push(new TOC("VIP Buttons", "toc_VIP_Buttons", null))
    toc_sub_list.push(new TOC("Standard Buttons", "toc_Standard_Buttons", null))
    this.toc_list.push(new TOC("Advanced Styles", "toc_Advanced_Styles", toc_sub_list));

    this.toc_list.push(new TOC("Colors", "toc_Colors", null));

    toc_sub_list = [];
    toc_sub_list.push(new TOC("Basic", "toc_Basic", null))
    toc_sub_list.push(new TOC("Group with Divider", "toc_Group_with_Divider", null))
    toc_sub_list.push(new TOC("Icons and Colors", "toc_Icons_and_Colors", null))
    toc_sub_list.push(new TOC("Blocked Group", "toc_Blocked_Group", null))
    toc_sub_list.push(new TOC("Active State", "toc_Active_State", null))
    this.toc_list.push(new TOC("Button Groups", "toc_Button_Groups", toc_sub_list));

    toc_sub_list = [];
    toc_sub_list.push(new TOC("Basic", "toc_Basic_labeled", null))
    toc_sub_list.push(new TOC("Loading State", "toc_Loading_State", null))
    this.toc_list.push(new TOC("Labelled Button", "toc_Labelled_Button", toc_sub_list));

    toc_sub_list = [];
    toc_sub_list.push(new TOC("Resize width and height", "toc_Resize_width_and_height", null))
    toc_sub_list.push(new TOC("Resize Border Width", "toc_Resize_Border_Width", null))
    this.toc_list.push(new TOC("Resize", "toc_Resize", toc_sub_list));
  }

       

  placeTOC() {
     let e = document.getElementById("toc-container");
     let h = window.innerHeight -  e.offsetTop;
     e.style.height = (h-70) + "px";
     let scroller = document.getElementById("nav-content");
     scroller.addEventListener('scroll', (ev)=> {
        if(ev.target["id"] != "nav-content") return;
        let scrolled = ev.target["scrollTop"];
        if(scrolled < 184 ) {
          e.style.marginTop = "-" + (scrolled+95) + "px";
        }
    }, true);
    }
     

  

}
