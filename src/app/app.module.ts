import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CheckAgeDirectiveDirective } from './check-age-directive.directive';
import { SallaryCheckDirective } from './sallary-check.directive';

@NgModule({
  declarations: [
    AppComponent,
    CheckAgeDirectiveDirective,
    SallaryCheckDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
