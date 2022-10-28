import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ControlPanelComponent } from './control-panel/control-panel.component';
import { TodoAreaComponent } from './todo-area/todo-area.component';
import { DoneAreaComponent } from './done-area/done-area.component';
import { TaskItemComponent } from './task-item/task-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ControlPanelComponent,
    TodoAreaComponent,
    DoneAreaComponent,
    TaskItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
