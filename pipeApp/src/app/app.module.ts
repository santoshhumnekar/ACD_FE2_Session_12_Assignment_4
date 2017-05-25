import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ToUpperPipe } from './to-upper.pipe';
import { ToLowerPipe } from './to-lower.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ToUpperPipe,
    ToLowerPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
