import { Component, OnInit } from '@angular/core';
import { environment } from './../../environments/environment';
import { SideNavService } from './../services/sidenav.service';



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
  styleUrls: ['./side-nav.component.sass'],
  providers: [SideNavService]
})
export class SideNavComponent implements OnInit {

  public app_name: any = environment.app_name;
  public layoutList: Array<NavList> = [];
  public navElementsList: Array<NavList> = [];
  public navComponetsList: Array<NavList> = [];

  constructor(
      public navBar: SideNavService
  	) { 
  		
  }

  ngOnInit() {
    this.initLayoutList();
  	this.initElementList();
    this.initComponentsList();
  }

  initLayoutList() {
    this.layoutList.push(new NavList("Grids", ['/docs/grids'], "fa fa-th"));
    this.layoutList.push(new NavList("Section", ['/docs/section'], "fa fa-square-o"));
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
    this.navComponetsList.push(new NavList("Toast", ['/docs/toast'], "fa fa-hand-o-left"));

  }

}
