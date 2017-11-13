import { Component, OnInit } from '@angular/core';
import { TOC } from './../../../toc/toc.component';
import { StringsService } from '../../../services/strings.service';
@Component({
  selector: 'app-colors-palette',
  templateUrl: './colors-palette.component.html',
  styleUrls: ['./colors-palette.component.css'],
  providers: [StringsService]
})
export class ColorsPaletteComponent implements OnInit {
  public tab:any = "example";
  public toc_list: Array<TOC> = [];
  constructor(
      public strings: StringsService
    ) { }

  ngOnInit() {
    this.addListToToc();
    console.log(this.strings.primaryColors)
  }


  addListToToc() {
    let toc_sub_list: Array<TOC> = [];
    
    this.toc_list.push(new TOC("Overview", "toc_v_overview", null));

    this.toc_list.push(new TOC("Primary Colors", "toc_primary", null));

    this.toc_list.push(new TOC("Fixed Colors Palette", "toc_fixed", null));

  }
}
