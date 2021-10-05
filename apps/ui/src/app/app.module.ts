import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestStatusPipe } from './pipes/test-pipe.pipe';

@NgModule({
  declarations: [AppComponent, TestStatusPipe],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
