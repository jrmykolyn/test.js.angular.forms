import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginContainerComponent } from './ui/containers/login-container/login-container.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginContainerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
