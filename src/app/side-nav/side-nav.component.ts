import { Component, OnInit } from '@angular/core';
import { environment } from './../../environments/environment';


class NavList {
	name: String;
	link: Array<any> = [];
	icon: String;
	constructor(name, link, icon) {
		this.name = name;
		this.link = link;
		this.icon = icon;
	}
}

@Component({
  selector: '[app-side-nav]',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.sass']
})
export class SideNavComponent implements OnInit {

  public app_name: any = environment.app_name;
  public navElementsList: Array<NavList> = [];
  public navComponetsList: Array<NavList> = [];

  constructor(
  	) { 
  		
  }

  ngOnInit() {
  	this.initElementList();
    this.initComponentsList();
  }

  initElementList() {
  	this.navElementsList.push(new NavList("Typography", ['/docs/typography'], "fa fa-header"));
  	this.navElementsList.push(new NavList("Button", ['/docs/buttons'], "fa fa-backward"));
  	this.navElementsList.push(new NavList("Input", ['/docs/input'], "fa fa-text-height"));
  	this.navElementsList.push(new NavList("List", ['/docs/list'], "fa fa-list"));
  	this.navElementsList.push(new NavList("Label", ['/docs/label'], "fa fa-tag"));
  	this.navElementsList.push(new NavList("Table", ['/docs/table'], "fa fa-table"));
  	this.navElementsList.push(new NavList("Image", ['/docs/image'], "fa fa-picture-o"));
  	this.navElementsList.push(new NavList("Divider", ['/docs/divider'], "fa fa-minus"));
  	this.navElementsList.push(new NavList("WhiteFrame", ['/docs/whiteframe'], "fa fa-square"));
  }

  initComponentsList() {
    this.navComponetsList.push(new NavList("Breadcrumb", ['/docs/breadcrumb'], "fa fa-angle-right"));
    this.navComponetsList.push(new NavList("Message", ['/docs/message'], "fa fa-envelope"));
    this.navComponetsList.push(new NavList("Panel", ['/docs/panel'], "fa fa-window-maximize"));
    this.navComponetsList.push(new NavList("Pagination", ['/docs/pagination'], "fa fa-arrows-h"));
    this.navComponetsList.push(new NavList("Progress Bar", ['/docs/progress-bar'], "fa fa-tasks"));
    this.navComponetsList.push(new NavList("Indicators", ['/docs/indicators'], "fa fa-spinner"));
    this.navComponetsList.push(new NavList("Tabs", ['/docs/tabs'], "fa fa-credit-card-alt"));
    this.navComponetsList.push(new NavList("Toc", ['/docs/toc'], "fa fa-th-list"));
    this.navComponetsList.push(new NavList("Modal", ['/docs/modal'], "fa fa-window-restore"));
  }

}
