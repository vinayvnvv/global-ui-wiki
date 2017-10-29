import { Component, OnInit } from '@angular/core';
import { TOC } from './../../toc/toc.component';
@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
public tab:any = "example";
  public toc_list: Array<TOC> = [];
  constructor() { }

  ngOnInit() {
    this.addListToToc();
  }


  addListToToc() {
    let toc_sub_list: Array<TOC> = [];
    toc_sub_list.push(new TOC("Simple", "toc_simple", null));
    toc_sub_list.push(new TOC("Md Style", "toc_md_style", null));
    this.toc_list.push(new TOC("Basic", "toc_basic", toc_sub_list));

    toc_sub_list = [];
    toc_sub_list.push(new TOC("Icons at left", "toc_icon_left", null));
    toc_sub_list.push(new TOC("Icons at Right", "toc_icons_right", null));
    toc_sub_list.push(new TOC("Icons at Both Side", "toc_icons_both_side", null));
    toc_sub_list.push(new TOC("Icons with Md Style", "toc_icons_with_md", null));
    this.toc_list.push(new TOC("With Icons", "toc_with_icons", toc_sub_list));

    this.toc_list.push(new TOC("Sizes", "toc_sizes", null));

    toc_sub_list = [];
    toc_sub_list.push(new TOC("Loading", "toc_loading", null));
    toc_sub_list.push(new TOC("Disabled", "toc_disabled", null));
    toc_sub_list.push(new TOC("Highleted ", "toc_Highleted", null));
    this.toc_list.push(new TOC("States", "toc_states", toc_sub_list));


    toc_sub_list = [];
    toc_sub_list.push(new TOC("Square", "toc_square", null));
    toc_sub_list.push(new TOC("Rounded", "toc_circle", null));
    this.toc_list.push(new TOC("Shapes", "toc_shapes", toc_sub_list));


    this.toc_list.push(new TOC("Colors", "toc_colors", null));

  }

}
