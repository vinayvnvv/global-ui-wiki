import { Component, OnInit } from '@angular/core';
import { TOC } from './../../../toc/toc.component';

declare const Prism: any;
@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  public tab:any = "example";
  public toc_list: Array<TOC> = [];
  constructor() { }

  ngOnInit() {
    this.addListToToc();
  }


  addListToToc() {
    console.log(this.toc_list)
    let toc_sub_list: Array<TOC> = [];
    toc_sub_list.push(new TOC("Default", "toc_default", null));
    toc_sub_list.push(new TOC("Closed Items", "toc_closed", null));
    this.toc_list.push(new TOC("Basic", "toc_basic", toc_sub_list));

    toc_sub_list = [];
    toc_sub_list.push(new TOC("Left Link items", "toc_l_aligned", null));
    toc_sub_list.push(new TOC("Right Link items", "toc_r_aligned", null));
    this.toc_list.push(new TOC("Alignment", "toc_alignment", toc_sub_list)); 

    this.toc_list.push(new TOC("Outlined", "toc_outline", null));

    

    this.toc_list.push(new TOC("Colors", "toc_colors", null));
    
    this.toc_list.push(new TOC("Dimensions", "toc_dimension", null));

    this.toc_list.push(new TOC("Sizes", "toc_sizes", null));

    toc_sub_list = [];
    toc_sub_list.push(new TOC("Square", "toc_square", null));
    toc_sub_list.push(new TOC("Round", "toc_round", null));
    this.toc_list.push(new TOC("Shapes", "toc_shapes", toc_sub_list));

    this.toc_list.push(new TOC("Ripple Example", "toc_ripple", null));



  }
}
