import { Component, OnInit, OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'app-buttons-anim',
  templateUrl: './buttons-anim.component.html',
  styleUrls: ['./buttons-anim.component.sass']
})
export class ButtonsAnimComponent implements OnInit, OnDestroy {
  public classChange:string = "";
  classChangeAnim: boolean;
  interval:any;
  classList: Array<string> = ["", "outline", "mini", "tiny", "large", "big", "huge", "square", "circle", 
  							"loading", "active", "raised", "gradient", "vip", "red", "red outline", "primary", "primary outline",
  							"grow-x-3", "grow-x-6", "grow-x-6 grow-y-3", "grow-y-3", 
  							"outline border-0", "outline border-3", "outline border-6", "outline border-10"
  							];
  constructor() { }

  ngOnInit() {
  	this.startAnimComponent();
  }

  ngOnDestroy() {
  	clearInterval(this.interval);
  }

  startAnimComponent() {
  	let index = 1;
  	this.interval = setInterval(() => {
      this.classChangeAnim = true;
      setTimeout(() => {
        this.classChangeAnim = false;
      }, 1000)
  		this.classChange = this.classList[index];
  		index = ( (index == this.classList.length-1) ? 0 : index+1 );
  	}, 2000);
  }

}
