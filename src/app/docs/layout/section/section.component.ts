import { Component, OnInit } from '@angular/core';
import { TOC } from './../../../toc/toc.component';
@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {

  public tab:any = "example";
  public toc_list: Array<TOC> = [];
  constructor() { }

  ngOnInit() {
    this.addListToToc();
  }


  addListToToc() {
    let toc_sub_list: Array<TOC> = [];
    this.toc_list.push(new TOC("Basic", "toc_basic", null));

    this.toc_list.push(new TOC("Colors", "toc_colors", null));

    toc_sub_list.push(new TOC("Padding More", "toc_padding_more", null));
    this.toc_list.push(new TOC("Dimensions", "toc_dimension", toc_sub_list));

    this.toc_list.push(new TOC("Spacing", "toc_spacing", null));

    this.toc_list.push(new TOC("Advertisement", "toc_actioned_advertisement", null));



  }
}
