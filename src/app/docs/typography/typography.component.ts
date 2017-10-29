import { Component, OnInit } from '@angular/core';
import { TOC } from './../../toc/toc.component';
@Component({
  selector: 'app-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.css']
})
export class TypographyComponent implements OnInit {
  public tab:any = "example";
  public toc_list: Array<TOC> = [];
  constructor() { }

  ngOnInit() {
    this.addListToToc();
  }


  addListToToc() {
    let toc_sub_list: Array<TOC> = [];
    toc_sub_list.push(new TOC("Basic", "toc_basic", null));
    toc_sub_list.push(new TOC("Headers with classes", "toc_headers_with_classes", null));
    toc_sub_list.push(new TOC("Lightness", "toc_lightness", null));
    this.toc_list.push(new TOC("Headers", "toc_headers", toc_sub_list));

    this.toc_list.push(new TOC("Lightness Levels", "toc_light_level", null));

    toc_sub_list = [];
    toc_sub_list.push(new TOC("Basic", "toc_sub_basic", null));
    toc_sub_list.push(new TOC("Lightness", "toc_sub_light", null));
    this.toc_list.push(new TOC("Sub Headers", "toc_sub_headers", toc_sub_list));

    this.toc_list.push(new TOC("Headers with Sub-Headers", "toc_h_w_S", null));

    this.toc_list.push(new TOC("Caption", "toc_caption", null));

  }


}
