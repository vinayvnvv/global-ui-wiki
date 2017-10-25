import { Component, OnInit } from '@angular/core';
import { TOC } from './../../../toc/toc.component';

declare const Prism: any;
@Component({
  selector: 'app-indicators',
  templateUrl: './indicators.component.html',
  styleUrls: ['./indicators.component.css']
})
export class IndicatorsComponent implements OnInit {

  public tab:any = "example";
  public toc_list: Array<TOC> = [];
  constructor() { }

  ngOnInit() {
    this.addListToToc();
  }


  addListToToc() {
    console.log(this.toc_list)
    let toc_sub_list: Array<TOC> = [];
    this.toc_list.push(new TOC("Basic", "toc_basic", null));

    this.toc_list.push(new TOC("Sizes", "toc_sizes", null));

    this.toc_list.push(new TOC("Usage with Elements", "toc_usage", null));

    this.toc_list.push(new TOC("Colors", "toc_colors", null));

    this.toc_list.push(new TOC("Loader Container", "toc_loade_container", null));

    this.toc_list.push(new TOC("Speed", "toc_speed", null));

    this.toc_list.push(new TOC("Styles", "toc_styles", null));

    this.toc_list.push(new TOC("Bars indicators", "toc_bar_indi", null));

    this.toc_list.push(new TOC("Bars indicators Colors", "toc_bar_indi_colors", null));

    toc_sub_list = [];
    toc_sub_list.push(new TOC("Top", "toc_top", null));
    toc_sub_list.push(new TOC("Middle", "toc_middle", null));
    toc_sub_list.push(new TOC("Bottom", "toc_bottom", null));
    this.toc_list.push(new TOC("Bars Position in Container", "toc_position", toc_sub_list));

    
    
    this.toc_list.push(new TOC("Boldness", "toc_boldness", null));



  }
}
