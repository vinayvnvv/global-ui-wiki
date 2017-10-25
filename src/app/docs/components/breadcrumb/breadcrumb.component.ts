import { Component, OnInit } from '@angular/core';
import { TOC } from './../../../toc/toc.component';

declare const Prism: any;
@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {

  public tab:any = "example";
  public toc_list: Array<TOC> = [];
  constructor() { }

  ngOnInit() {
    this.addListToToc();
  }


  addListToToc() {
    console.log(this.toc_list)
    let toc_sub_list: Array<TOC> = [];
     toc_sub_list.push(new TOC("Normal", "toc_normal", null));
    toc_sub_list.push(new TOC("Outline", "toc_outline", null));
    this.toc_list.push(new TOC("Basic", "toc_basic", toc_sub_list));

    toc_sub_list = [];
    toc_sub_list.push(new TOC("Square", "toc_square", null));
    toc_sub_list.push(new TOC("Round", "toc_round", null));
    this.toc_list.push(new TOC("Shapes", "toc_shapes", toc_sub_list));

    this.toc_list.push(new TOC("Seperator Icons", "toc_s_icons", null));


    this.toc_list.push(new TOC("Sizes", "toc_sizes", null));




  }
}
