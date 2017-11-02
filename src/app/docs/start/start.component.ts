import { Component, OnInit } from '@angular/core';
import { TOC } from './../../toc/toc.component';
@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
public tab:any = "example";
  public toc_list: Array<TOC> = [];
  constructor() { }

  ngOnInit() {
    this.addListToToc();
  }


  addListToToc() {
    let toc_sub_list: Array<TOC> = [];
    
    toc_sub_list.push(new TOC("Using NPM", "toc_using_npm", null));
    toc_sub_list.push(new TOC("Using GitHub repository", "toc_git_install", null));
    this.toc_list.push(new TOC("Installation", "toc_install", toc_sub_list));

    toc_sub_list = [];
    toc_sub_list.push(new TOC("Adding Css Theme", "toc_add_css", null));
    toc_sub_list.push(new TOC("Adding Icons", "toc_icons", null));
    this.toc_list.push(new TOC("Importing Packages", "toc_import", toc_sub_list));

    this.toc_list.push(new TOC("Sample Template", "toc_sample", null));

  }

}
