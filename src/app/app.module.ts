import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgxsModule } from '@ngxs/store';

import { AppComponent } from './app.component';
import { TodosState } from './todos.state';
import { ApiService } from './api.service';

@NgModule({
  imports: [BrowserModule, FormsModule, NgxsModule.forRoot([TodosState])],
  providers: [ApiService],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
