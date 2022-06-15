import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainContentComponent } from './main-content/main-content.component';
import { FooterComponent } from './footer/footer.component';
import { TextComponent } from './text/text.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainContentComponent,
    FooterComponent,
    TextComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
