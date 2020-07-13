import { JsonApiDatastoreConfig, JsonApiDatastore, DatastoreConfig } from 'angular2-jsonapi';
import { User } from '../model/user.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Todo } from '../model/todo.model';
import { List } from '../model/list.model';
 
const config: DatastoreConfig = {
  baseUrl: 'http://todolist.triptyk.eu/api/v1',
  models: {
    users: User,
    todos : Todo,
    lists : List,
  }
}
 
@Injectable()
@JsonApiDatastoreConfig(config)
export class Datastore extends JsonApiDatastore {
    constructor(http: HttpClient) {
        super(http);
    }
}