import { Component, OnInit } from '@angular/core';
import { TOC } from './../../../toc/toc.component';

declare const Prism: any;
@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {

  public tab:any = "example";
  public toc_list: Array<TOC> = [];
  constructor() { }

  ngOnInit() {
    this.addListToToc();
  }


  addListToToc() {
    console.log(this.toc_list)
    let toc_sub_list: Array<TOC> = [];
    toc_sub_list.push(new TOC("Default", "toc_default", null));
    toc_sub_list.push(new TOC("Shaded", "toc_shaded", null));
    toc_sub_list.push(new TOC("Outlined", "toc_outlined", null));
    this.toc_list.push(new TOC("Basic", "toc_basic", toc_sub_list));

    this.toc_list.push(new TOC("Labelled", "toc_labelled", null));

    this.toc_list.push(new TOC("Label Alignment", "toc_label_alignment", null));
 
    this.toc_list.push(new TOC("Progress Info", "toc_deatiled", null));
    
    this.toc_list.push(new TOC("Colored", "toc_colored", null));

    this.toc_list.push(new TOC("Indicating", "toc_indicating", null));

    this.toc_list.push(new TOC("Shapes", "toc_shape", null));



  }
}
