import { Component, OnInit } from '@angular/core';
import { TOC } from './../../toc/toc.component';
@Component({
  selector: 'app-divider',
  templateUrl: './divider.component.html',
  styleUrls: ['./divider.component.css']
})
export class DividerComponent implements OnInit {

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
    toc_sub_list.push(new TOC("Strong", "toc_strong", null));
    toc_sub_list.push(new TOC("Extra Strong", "toc_extra_strong", null));
    this.toc_list.push(new TOC("Basic", "toc_basic", toc_sub_list));

    toc_sub_list = [];
    toc_sub_list.push(new TOC("Margin", "toc_margin", null));
    toc_sub_list.push(new TOC("Extra - Margin", "toc_extra_margin", null));
    this.toc_list.push(new TOC("Spacing", "toc_spacing", toc_sub_list));

    this.toc_list.push(new TOC("Cleared", "toc_cleared", null));

    toc_sub_list = [];
    toc_sub_list.push(new TOC("Normal", "toc_d_normal", null));
    toc_sub_list.push(new TOC("Detailed Left", "toc_d_left", null));
    toc_sub_list.push(new TOC("Detailed Right", "toc_d_right", null));
    this.toc_list.push(new TOC("Detailed", "toc_detailed", toc_sub_list));

    this.toc_list.push(new TOC("Colored", "toc_colored", null));


    toc_sub_list = [];
    toc_sub_list.push(new TOC("Google Bars Vertical", "toc_b_vertical", null));
    toc_sub_list.push(new TOC("Google Bars Horizontal", "toc_b_HORI", null));
    this.toc_list.push(new TOC("Styles", "toc_styles", toc_sub_list));


  }
}
