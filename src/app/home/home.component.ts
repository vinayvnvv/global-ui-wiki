import { Component, OnInit } from '@angular/core';
import { StringsService } from './../services/strings.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
  providers: [ StringsService ]
})
export class HomeComponent implements OnInit {

  constructor(
        private Strings: StringsService
    ) { }

  ngOnInit() {
  	document.getElementById("side-nav").classList.remove("active");
  	this.changeNavColor();
    //this.startColorChangeAnimForLabel();
  }

  changeNavColor() {
    let elClass:DOMTokenList = document.querySelectorAll('[app-nav-bar]')[0].classList;
    let colors = this.Strings.colors;
    for(let i=0;i<colors.length;i++) {
      if(elClass.contains(colors[i].value))
        elClass.remove(colors[i].value);
    }
    elClass.add('no-shadow');
    elClass.add('home-navbar');
    elClass.remove('docs-navbar');
    elClass.add('primary');
  }

  startColorChangeAnimForLabel() {
     let elClass:DOMTokenList = document.getElementById("label_color_change").classList;
     let last_color = "black";
     let colors = this.Strings.colors;
     let index = 0;
     setInterval(() => {
       elClass.remove(last_color);
       elClass.add(colors[index].value);
       last_color = colors[index].value;
       index++;
       if(index == colors.length) index = 0;
     }, 970)
  }

}
