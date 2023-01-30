import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UsedCombinationsDirective } from './directives/used-combinations.directive';

@NgModule({
  declarations: [AppComponent, UsedCombinationsDirective],
  imports: [BrowserModule, FontAwesomeModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
