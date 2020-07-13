import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lists-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() lists;

  constructor() { }

  ngOnInit(): void {
  }

}
