import { Component, OnInit } from '@angular/core';
import { TOC } from './../../toc/toc.component';
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


  addListToToc() {
    let toc_sub_list: Array<TOC> = [];
    this.toc_list.push(new TOC("Basic", "toc_basic", null));

    this.toc_list.push(new TOC("Sizes", "toc_size", null));

    this.toc_list.push(new TOC("Colors", "toc_colors", null));

    this.toc_list.push(new TOC("Icons", "toc_icons", null));

    this.toc_list.push(new TOC("Shapes", "toc_shapes", null));

    this.toc_list.push(new TOC("Pointed", "toc_pointed", null));

    toc_sub_list = [];
    toc_sub_list.push(new TOC("Basic", "toc_d_basic", null));
    toc_sub_list.push(new TOC("Filled (Badge)", "toc_d_badge", null));
    this.toc_list.push(new TOC("Detailed", "toc_detailed", toc_sub_list));

    this.toc_list.push(new TOC("Taged Label", "toc_tag", null));

    this.toc_list.push(new TOC("Raised", "toc_raised", null));

    this.toc_list.push(new TOC("Dimensions", "toc_sub_dimentions", null));

  }
}
