import { Component, OnInit } from '@angular/core';
import { TOC } from './../../toc/toc.component';
@Component({
  selector: 'app-whiteframe',
  templateUrl: './whiteframe.component.html',
  styleUrls: ['./whiteframe.component.css']
})
export class WhiteframeComponent implements OnInit {

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


  }
}
