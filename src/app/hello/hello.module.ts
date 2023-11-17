import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HelloRoutingModule } from './hello-routing.module';
import { WorldComponent } from './components/world/world.component';
import { FormsModule } from '@angular/forms';
import { TaskListComponent } from './components/task-list/task-list.component';
import { RickComponent } from './components/rick/rick.component';
import { RickService } from './services/rick.service';
import { ObservableService } from './services/observable.service';
import { ObservableComponent } from './components/observable/observable.component';


@NgModule({
  declarations: [
    WorldComponent,
    TaskListComponent,
    RickComponent,
    ObservableComponent
  ],
  imports: [
    CommonModule,
    HelloRoutingModule,
    FormsModule
  ],
  providers: [RickService, ObservableService]
})
export class HelloModule { }
