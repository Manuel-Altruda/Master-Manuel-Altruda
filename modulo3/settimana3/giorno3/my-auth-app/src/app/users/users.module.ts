import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { NewUserFormComponent } from './new-user-form/new-user-form.component';


@NgModule({
  declarations: [
    UsersComponent,
    NewUserFormComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
