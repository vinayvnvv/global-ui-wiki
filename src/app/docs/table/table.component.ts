import { Component, OnInit } from '@angular/core';
import { TOC } from './../../toc/toc.component';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  public tab:any = "example";
  public toc_list: Array<TOC> = [];
  constructor() { }

  ngOnInit() {
    this.addListToToc();
  }


  addListToToc() {
    console.log(this.toc_list)
    let toc_sub_list: Array<TOC> = [];
    toc_sub_list.push(new TOC("Simple", "toc_d_simple", null));
    toc_sub_list.push(new TOC("With Header", "toc_with_header", null));
    this.toc_list.push(new TOC("Basic", "toc_basic", toc_sub_list));

    toc_sub_list = [];
    toc_sub_list.push(new TOC("Without outline", "toc_q_outline", null));
    toc_sub_list.push(new TOC("Horizontal Dividers", "toc__h_divivders", null));
    toc_sub_list.push(new TOC("Horizontal Dividers-No Outline", "toc__h_divivders_no_outline", null));
    toc_sub_list.push(new TOC("Vertical Dividers", "toc__v_divivders", null));
    this.toc_list.push(new TOC("Border Types", "toc_border_types", toc_sub_list));

    toc_sub_list = [];
    toc_sub_list.push(new TOC("Stripped", "toc_stripped", null));
    toc_sub_list.push(new TOC("Structured", "toc__structured", null));
    this.toc_list.push(new TOC("Variations", "toc_variations", toc_sub_list));

    toc_sub_list = [];
    toc_sub_list.push(new TOC("Hovered", "toc_hovree", null));
    toc_sub_list.push(new TOC("Active", "toc__active", null));
    this.toc_list.push(new TOC("States", "toc_states", toc_sub_list));

    this.toc_list.push(new TOC("Colored", "toc_colored", null));

    toc_sub_list = [];
    toc_sub_list.push(new TOC("Horizontal", "toc_a_hori", null));
    toc_sub_list.push(new TOC("Vertical", "toc_A_vrert", null));
    this.toc_list.push(new TOC("Alignments", "toc_align", toc_sub_list));

    this.toc_list.push(new TOC("Dimension", "toc_dimen", null));

    this.toc_list.push(new TOC("Sizes", "toc_sizes", null));


    this.toc_list.push(new TOC("WhiteFrame", "toc_whiteframe", null));


    this.toc_list.push(new TOC("With Footer", "toc_w_footer", null));

    this.toc_list.push(new TOC("Footer with Actions", "toc_w_footer_actioins", null));


	  this.toc_list.push(new TOC("Footer with Defination", "toc_w_footer_actioins_definations", null));

    toc_sub_list = [];
    toc_sub_list.push(new TOC("Normal", "toc_a_normal", null));
    toc_sub_list.push(new TOC("Square", "toc_a_sahpes", null));
    this.toc_list.push(new TOC("Shapes", "toc_shapes", toc_sub_list));
  }
}
