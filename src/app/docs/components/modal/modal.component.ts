import { Component, OnInit } from '@angular/core';
import { TOC } from './../../../toc/toc.component';

declare const Prism: any;
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  public tab:any = "example";
  public toc_list: Array<TOC> = [];
  public modal1; modal2; modal3; modal4; modal5; modal6; modal7; modal8; modal9; modal10; modal11; modal12; modal13; modal14; modal33;
  constructor() { }

  ngOnInit() {
    this.addListToToc();
  }


  addListToToc() {
    let toc_sub_list: Array<TOC> = [];
    this.toc_list.push(new TOC("Basic", "toc_basic", null));

    this.toc_list.push(new TOC("Structured Modal", "toc_structured", null));
    
    this.toc_list.push(new TOC("Structured Modal With Color", "toc_stru_color", null));

    this.toc_list.push(new TOC("Alert Modal", "toc_alert", null));

    this.toc_list.push(new TOC("Alert with Action", "toc_alert_action", null));

    this.toc_list.push(new TOC("With WhiteFrame", "toc_whiteframe", null));

    this.toc_list.push(new TOC("Fullscreen in Mobile", "toc_full_mobile", null));

    this.toc_list.push(new TOC("Full Screen in DeskTop", "toc_full_desktop", null));

    this.toc_list.push(new TOC("Light Modal", "toc_light", null));

    this.toc_list.push(new TOC("Animated Modal", "toc_animated", null));

    this.toc_list.push(new TOC("Square Shaped", "toc_square", null));

    this.toc_list.push(new TOC("Flash Modal", "toc_flash_modal", null));

    this.toc_list.push(new TOC("Flash with Light Bg", "toc_flash_light", null));



  }
}
