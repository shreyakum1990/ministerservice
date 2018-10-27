import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MinisterComponent } from './minister/minister.component';
import { MinisterService } from './minister.service';

@NgModule({
  declarations: [
    AppComponent,
    MinisterComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [MinisterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
