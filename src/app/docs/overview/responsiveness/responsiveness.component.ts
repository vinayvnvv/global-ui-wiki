import { Component, OnInit } from '@angular/core';
import { TOC } from './../../../toc/toc.component';
@Component({
  selector: 'app-responsiveness',
  templateUrl: './responsiveness.component.html',
  styleUrls: ['./responsiveness.component.sass']
})
export class ResponsivenessComponent implements OnInit {
public tab:any = "example";
  public toc_list: Array<TOC> = [];
  constructor() { }

  ngOnInit() {
    this.addListToToc();
  }


  addListToToc() {
    let toc_sub_list: Array<TOC> = [];
    
    this.toc_list.push(new TOC("Vertical Behavior", "toc_v_behave", null));

    this.toc_list.push(new TOC("Break Points", "toc_break_points", null));

    toc_sub_list = [];
    toc_sub_list.push(new TOC("NavBar Behavior", "toc_nav_bar", null));
    toc_sub_list.push(new TOC("SideBar Behavior", "toc_sidebar", null));
    this.toc_list.push(new TOC("Layout Behavior", "toc_lay_beh", toc_sub_list));

  }

}
