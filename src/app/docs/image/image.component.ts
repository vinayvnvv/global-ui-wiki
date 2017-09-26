import { Component, OnInit } from '@angular/core';
import { TOC } from './../../toc/toc.component';

declare const Prism: any;

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
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

    this.toc_list.push(new TOC("Basic", "toc_basic", null));


    let toc_sub_list: Array<TOC> = [];
    toc_sub_list.push(new TOC("Square", "toc_square", null));
    toc_sub_list.push(new TOC("Round", "toc_round", null));
    this.toc_list.push(new TOC("Shapes", "toc_shapes", toc_sub_list));

    toc_sub_list = [];
    toc_sub_list.push(new TOC("Top", "toc_top", null));
    toc_sub_list.push(new TOC("Middle", "toc_middle", null));
    toc_sub_list.push(new TOC("Bottom", "toc_bottom", null));
    this.toc_list.push(new TOC("Vertical Alignment", "toc_alignment", toc_sub_list));



    this.toc_list.push(new TOC("Spaced", "toc_spaced", null));

    this.toc_list.push(new TOC("Sizes", "toc_sizes", null));

    this.toc_list.push(new TOC("With White-frame", "toc_whiteframe", null));

  }
}
