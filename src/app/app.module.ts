import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginContainerComponent } from './ui/containers/login-container/login-container.component';
import { LoginFormComponent } from './ui/components/login-form/login-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginContainerComponent,
    LoginFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
