import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginRouteComponent } from './pods/login/login.component';
import { TodosRouteComponent } from './pods/todos/todos.component';
import { AuthGuardService } from './service/auth-guard.service';


const routes: Routes = [
  {
    component: LoginRouteComponent,
    path: 'login'
  },
  {
    component: TodosRouteComponent,
    path: 'todos',
    canActivate: [AuthGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
