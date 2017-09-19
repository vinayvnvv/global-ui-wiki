import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RouterModule } from '@angular/router'
import { AppRoutingModule, routerComponents } from "./app.router";
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { DocsComponent } from './docs/docs.component';
import { StartComponent } from './docs/start/start.component';
import { ButtonsComponent } from './docs/buttons/buttons.component';
import { TocComponent } from './toc/toc.component';
import { InputComponent } from './docs/input/input.component';

@NgModule({
  declarations: [
    AppComponent,
    routerComponents,
    SideNavComponent,
    NavBarComponent,
    TocComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
