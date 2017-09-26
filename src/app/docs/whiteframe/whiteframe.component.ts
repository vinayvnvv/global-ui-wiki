import { Component, OnInit } from '@angular/core';
import { TOC } from './../../toc/toc.component';

declare const Prism: any;
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
  ngAfterViewInit() {
  	this.highlightSyntax();
  }


  highlightSyntax() {
  	 if(window["Prism"])
  		Prism.highlightAll();
  }


  addListToToc() {
    console.log(this.toc_list)
    let toc_sub_list: Array<TOC> = [];
    this.toc_list.push(new TOC("Basic", "toc_basic", null));


  }
}
