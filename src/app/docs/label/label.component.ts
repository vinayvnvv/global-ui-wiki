import { Component, OnInit } from '@angular/core';
import { TOC } from './../../toc/toc.component';

declare const Prism: any;
@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.css']
})
export class LabelComponent implements OnInit {
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
    this.toc_list.push(new TOC("Basic", "toc_basic", null));

    this.toc_list.push(new TOC("Sizes", "toc_size", null));

    this.toc_list.push(new TOC("Colors", "toc_colors", null));

    this.toc_list.push(new TOC("Icons", "toc_icons", null));

    toc_sub_list = [];
    toc_sub_list.push(new TOC("Square", "toc_square", null));
    toc_sub_list.push(new TOC("Rounded", "toc_rounded", null));
    this.toc_list.push(new TOC("Shapes", "toc_shapes", toc_sub_list));

    toc_sub_list = [];
    toc_sub_list.push(new TOC("Basic", "toc_d_basic", null));
    toc_sub_list.push(new TOC("Filled", "toc_d_fillled", null));
    this.toc_list.push(new TOC("Detailed", "toc_detailed", toc_sub_list));

    this.toc_list.push(new TOC("Taged Label", "toc_tag", null));

    this.toc_list.push(new TOC("Raised", "toc_raised", null));

    toc_sub_list.push(new TOC("More Padded", "toc_sub_more_padded", null));
    toc_sub_list.push(new TOC("Less Padded", "toc_sub_less_padded", null));
    this.toc_list.push(new TOC("Dimensions", "toc_sub_dimentions", toc_sub_list));

  }
}
