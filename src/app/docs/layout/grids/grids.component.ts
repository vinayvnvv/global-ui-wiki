import { Component, OnInit } from '@angular/core';
import { TOC } from './../../../toc/toc.component';

@Component({
  selector: 'app-grids',
  templateUrl: './grids.component.html',
  styleUrls: ['./grids.component.css']
})
export class GridsComponent implements OnInit {

  public tab:any = "example";
  public toc_list: Array<TOC> = [];
  constructor() { }

  ngOnInit() {
    this.addListToToc();
  }


  addListToToc() {
    let toc_sub_list: Array<TOC> = [];

    this.toc_list.push(new TOC("Basic", "toc_basic", null));


    toc_sub_list.push(new TOC("Normal", "toc_normal", null));
    toc_sub_list.push(new TOC("Auto Grow", "toc_auto", null));
    toc_sub_list.push(new TOC("Force Grow in Mobile", "toc_force_grow", null));
    this.toc_list.push(new TOC("Grow Items", "toc_grow", toc_sub_list));

    this.toc_list.push(new TOC("Responsiveness", "toc_responsive", null));

    this.toc_list.push(new TOC("Wrapping Layout", "toc_wrpa_layout", null));


    this.toc_list.push(new TOC("Offset Grids", "toc_offset", null));

    this.toc_list.push(new TOC("Responsive offset", "toc_res_offset", null));


  }
}
