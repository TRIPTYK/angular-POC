import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { JsonApiModule } from 'angular2-jsonapi';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginRouteComponent } from './pods/login/login.component';
import { LoginComponent } from './pods/components/forms/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TodoComponent } from './pods/components/lists/todo/todo.component';
import { TodosRouteComponent } from './pods/todos/todos.component';
import { Datastore } from './service/datastore.service';
import { AuthService } from './service/auth.service';
import { ListComponent } from './pods/components/lists/list/list.component';
import { ListFormComponent } from './pods/components/forms/list/list.component';
import { FormatErrorPipe } from './pipes/format-error.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginRouteComponent,
    LoginComponent,
    TodosRouteComponent,
    TodoComponent,
    ListFormComponent,
    ListComponent,
    FormatErrorPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    JsonApiModule,
    HttpClientModule
  ],
  providers: [Datastore,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
