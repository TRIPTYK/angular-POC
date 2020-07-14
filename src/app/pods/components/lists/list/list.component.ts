import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { List } from 'src/app/model/list.model';
import { Datastore } from 'src/app/service/datastore.service';

@Component({
  selector: 'lists-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() lists;
  @Output() selected = new EventEmitter();
  @Output() deleted  = new EventEmitter();

  constructor(public datastore: Datastore) { }

  ngOnInit(): void {
  }

  onDeleteList(list : List) {
    this.datastore.deleteRecord(List,list.id)
      .subscribe(() =>  this.deleted.emit());
  }

}
