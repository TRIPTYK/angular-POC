import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lists-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  @Input() todos;

  constructor() { }

  ngOnInit(): void {
  }

}
