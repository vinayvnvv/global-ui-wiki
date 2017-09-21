import { Component, OnInit } from '@angular/core';
import { TOC } from './../../toc/toc.component';

declare const Prism: any;


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  public tab:any = "example";
  public toc_list: Array<TOC> = [];
  constructor() { }

  ngOnInit() {
    this.addListToToc();
  }
  ngAfterViewInit() {
  	this.highlightSyntax();
  }


  highlightSyntax() {
  	 if(window["Prism"])
  		Prism.highlightAll();
  }


  addListToToc() {
    console.log(this.toc_list)
    let toc_sub_list: Array<TOC> = [];
    toc_sub_list.push(new TOC("With ul & li", "toc_ul_li", null));
    toc_sub_list.push(new TOC("Without u l& li", "toc_not_ul_li", null));
    this.toc_list.push(new TOC("Basic", "toc_basic", toc_sub_list));

    toc_sub_list = [];
    toc_sub_list.push(new TOC("Ordered", "toc_ordered", null));
    toc_sub_list.push(new TOC("Un Ordered", "toc_unordered", null));
    this.toc_list.push(new TOC("Types", "toc_types", toc_sub_list));

    this.toc_list.push(new TOC("With Icons", "toc_icons", null));

    this.toc_list.push(new TOC("Icons with Description", "toc_icons_desc", null));

    this.toc_list.push(new TOC("Actions", "toc_actions", null));

    this.toc_list.push(new TOC("Wrapped", "toc_wrapped", null));

    this.toc_list.push(new TOC("Nested", "toc_nested", null));


    toc_sub_list = [];
    toc_sub_list.push(new TOC("Hovered", "toc_sub_hovered", null));
    toc_sub_list.push(new TOC("Active", "toc_sub_active", null));
    this.toc_list.push(new TOC("State", "toc_sub_state", toc_sub_list));

    toc_sub_list = [];
    toc_sub_list.push(new TOC("More Padded", "toc_sub_more_padded", null));
    toc_sub_list.push(new TOC("Less Padded", "toc_sub_less_padded", null));
    this.toc_list.push(new TOC("Dimensions", "toc_sub_dimentions", toc_sub_list));


    this.toc_list.push(new TOC("Avtar List", "toc_avtar", null));



    this.toc_list.push(new TOC("Horizantal List", "toc_h_L", null));

    this.toc_list.push(new TOC("With White-Frame", "toc_white-frame", null));

  }

}
