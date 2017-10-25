import { Component, OnInit } from '@angular/core';
import { TOC } from './../../../toc/toc.component';

declare const Prism: any;
@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

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

    toc_sub_list = [];
    toc_sub_list.push(new TOC("Square", "toc_square", null));
    toc_sub_list.push(new TOC("Round", "toc_round", null));
    this.toc_list.push(new TOC("Shapes", "toc_shapes", toc_sub_list));

    this.toc_list.push(new TOC("Colors", "toc_colors", null));
    
    this.toc_list.push(new TOC("Dimensions", "toc_dimension", null));

    this.toc_list.push(new TOC("Sizes", "toc_sizes", null));



  }
}
