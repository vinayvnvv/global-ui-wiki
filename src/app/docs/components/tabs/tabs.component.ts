import { Component, OnInit } from '@angular/core';
import { TOC } from './../../../toc/toc.component';
import { environment }  from './../../../../environments/environment';
@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

  public tab:any = "example";
  public toc_list: Array<TOC> = [];
  public tab_active; tab_active_s; tab_active_sa; tab_active_sb; tab_active_ss; tab_active_ssa; tab_active_ssb; tab_active_v; tab_active_vv; tab_active_vvv; tab_active_vb; tab_activeaa;
  constructor() { }

  ngOnInit() {
    this.addListToToc();
  }


  addListToToc() {
    console.log(this.toc_list)
    let toc_sub_list: Array<TOC> = [];
    this.toc_list.push(new TOC("Basic", "toc_basic", null));

    toc_sub_list = [];
    toc_sub_list.push(new TOC("Left (default)", "toc_lft", null));
    toc_sub_list.push(new TOC("Center", "toc_center", null));
    toc_sub_list.push(new TOC("Right", "toc_right", null));
    this.toc_list.push(new TOC("Alignment", "toc_alignment", toc_sub_list));

    this.toc_list.push(new TOC("Stretched", "toc_Stretched", null));

    this.toc_list.push(new TOC("Inlined", "toc_inlined", null));

    this.toc_list.push(new TOC("With Icons", "toc_icons", null));

    this.toc_list.push(new TOC("Colored Active State", "toc_c_a_s", null));

    toc_sub_list = [];
    toc_sub_list.push(new TOC("Style-1", "toc_style_1", null));
    toc_sub_list.push(new TOC("Style-2", "toc_style_2", null));
    this.toc_list.push(new TOC("Styles", "toc_styles", toc_sub_list));

    toc_sub_list = [];
    toc_sub_list.push(new TOC("Basic", "toc_v_basic", null));
    toc_sub_list.push(new TOC("Style-1", "toc_style_v_1", null));
    toc_sub_list.push(new TOC("Style-2", "toc_style_v_2", null));
    toc_sub_list.push(new TOC("Iconic", "toc_style_v_iconic", null));
    this.toc_list.push(new TOC("Vertical Tabs", "toc_vertical", toc_sub_list));

    this.toc_list.push(new TOC("Colored", "toc_colored", null));

    this.toc_list.push(new TOC("Disabled", "toc_disabled", null));

    this.toc_list.push(new TOC("Shapes", "toc_shapes", null));

    this.toc_list.push(new TOC("Scrolllable", "toc_scrollable", null));



  }
}
