import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TenantStatusPipe } from './pipes/test-pipe.pipe';

@NgModule({
  declarations: [AppComponent, TenantStatusPipe],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
