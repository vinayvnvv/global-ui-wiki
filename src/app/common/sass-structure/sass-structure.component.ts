import { Component, OnInit, Input } from '@angular/core';


export class SassStructure {
	name: string;
	desc: string;
	child: Array<SassStructure>;
}


@Component({
  selector: 'app-sass-structure',
  templateUrl: './sass-structure.component.html',
  styleUrls: ['./sass-structure.component.css']
})
export class SassStructureComponent implements OnInit {
  @Input('data') data:Array<SassStructure>;
  constructor() { }	

  ngOnInit() {
  }

}

