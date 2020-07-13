import { Component, OnInit, Output } from '@angular/core';
import { Datastore } from 'src/app/service/datastore.service';
import { Todo } from 'src/app/model/todo.model';
import { JsonApiQueryData } from 'angular2-jsonapi';
import { AuthService } from 'src/app/service/auth.service';
import { List } from 'src/app/model/list.model';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosRouteComponent implements OnInit {

  constructor(private datastore: Datastore,private authService: AuthService) { }

  lists: List[];

  ngOnInit(): void {
    this.datastore.findAll(List, {
        page: { size: 5, number: 1 },
        include : "todos"
    },this.authService.headers).subscribe(
        (lists: JsonApiQueryData<List>) => this.lists = lists.getModels()
    );
  }
}


