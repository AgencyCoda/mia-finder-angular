import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MiaFinder } from '../../entities/mia-finder';

@Component({
  selector: 'mia-breadcrumb',
  templateUrl: './mia-breadcrumb.component.html',
  styleUrls: ['./mia-breadcrumb.component.css']
})
export class MiaBreadcrumbComponent implements OnInit {

  @Input() finder!: MiaFinder;
  @Input() topId?: number;

  @Output() clickFolder = new EventEmitter<MiaFinder>();

  parents = new Array<MiaFinder>();

  constructor() { }

  ngOnInit(): void {
    this.process();
    this.parents = this.parents.reverse();
  }

  onClick(item: MiaFinder) {
    this.clickFolder.emit(item);
  }

  process() {
    if(this.finder.nested_parents == undefined){
      return;
    }

    this.processParent(this.finder.nested_parents);
  }

  processParent(item: MiaFinder) {
    if(this.topId != undefined && this.topId == item.id){
      return;
    }

    this.parents.push(item);

    if(item.nested_parents == undefined){
      return;
    }

    this.processParent(item.nested_parents);
  }
}
