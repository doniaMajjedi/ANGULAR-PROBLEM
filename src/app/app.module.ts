import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { FormsModule } from '@angular/forms';
import { ChildComponent } from './child/child.component';
import { CvComponent } from './cv/cv.component';
import { ListeComponent } from './liste/liste.component';
import { ItemComponent } from './item/item.component';
import { DetailsComponent } from './details/details.component';
import { AccountcompComponent } from './accountcomp/accountcomp.component';
import { StylecomposeComponent } from './stylecompose/stylecompose.component';
import { FirstAppComponent } from './first-app/first-app.component';
import { DirectiveDirective } from './directive.directive';
import { Pipe1Pipe } from './pipe1.pipe';

@NgModule({
  declarations: [AppComponent, FirstComponent, ChildComponent, CvComponent, ListeComponent, ItemComponent, DetailsComponent, AccountcompComponent, StylecomposeComponent, FirstAppComponent, DirectiveDirective, Pipe1Pipe],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}


