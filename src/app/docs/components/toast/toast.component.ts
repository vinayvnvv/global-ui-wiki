import { Component, OnInit } from '@angular/core';
import { TOC } from './../../../toc/toc.component';
import { environment }  from './../../../../environments/environment';
@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css']
})
export class ToastComponent implements OnInit {

  public tab:any = "example";
  public toc_list: Array<TOC> = [];
  public toast = {
  	ex1: false,
  	ex2: false,
  	ex3: false,
  	ex4: false,
  	ex5: false,
  	ex6: false,
  	ex7: false,
  	ex8: false,
  	ex9: false,
  	ex10: false,
  	ex11: false,
  	ex12: false,
  	ex13: false,
  	ex14: false,
  	ex15: false

  };
  constructor() { }

  ngOnInit() {
    this.addListToToc();
  }

  addListToToc() {
    let toc_sub_list: Array<TOC> = [];
    this.toc_list.push(new TOC("Basic", "toc_basic", null));


    this.toc_list.push(new TOC("Colors", "toc_colors", null));

    this.toc_list.push(new TOC("Close Button", "toc_close_button", null));

    this.toc_list.push(new TOC("Actions", "toc_actions", null));

    this.toc_list.push(new TOC("Wrapped", "toc_wrpapped", null));

	this.toc_list.push(new TOC("Loading State", "toc_loading", null));

	toc_sub_list = [];
    toc_sub_list.push(new TOC("Square", "toc_square", null));
    toc_sub_list.push(new TOC("Rounded", "toc_rounded", null));
    this.toc_list.push(new TOC("Shapes", "toc_shapes", toc_sub_list));


	toc_sub_list = [];
    toc_sub_list.push(new TOC("Top-Left", "toc_t_left", null));
    toc_sub_list.push(new TOC("Top-Right", "toc_t_right", null));
    toc_sub_list.push(new TOC("Bottom-Left", "toc_b_left", null));
    toc_sub_list.push(new TOC("Bottom-Right", "toc_b_right", null));
    this.toc_list.push(new TOC("Positions", "toc_positions", toc_sub_list));



  }

  openToast(instance) {
  	this.toast[instance]  = true;
  	setTimeout(() => {
  		this.toast[instance] = false;
  	}, 1500);
  	console.log(this.toast)
  }
}
