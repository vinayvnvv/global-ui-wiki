import { Component, OnInit } from '@angular/core';
import { TOC } from './../../../toc/toc.component';
import { StringsService } from '../../../services/strings.service';
import { SassStructure } from './../../../common/sass-structure/sass-structure.component';
@Component({
  selector: 'app-build-tools',
  templateUrl: './build-tools.component.html',
  styleUrls: ['./build-tools.component.css']
})
export class BuildToolsComponent implements OnInit {
  public tab:any = "example";
  public toc_list: Array<TOC> = [];
  public sass_structure_data:Array<SassStructure> = this.strings.sassFolderStructure;
  constructor(
      public strings: StringsService
    ) { }

  ngOnInit() {
    this.addListToToc();
  }


  addListToToc() {
    let toc_sub_list: Array<TOC> = [];
    
    this.toc_list.push(new TOC("Overview", "toc_v_overview", null));

    this.toc_list.push(new TOC("Tool Installation", "toc_install", null));

    this.toc_list.push(new TOC("How to Customize", "toc_how_to", null));

    this.toc_list.push(new TOC("Building", "toc_cli_build", null));

  }
}
