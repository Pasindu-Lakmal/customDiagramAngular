import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CenterCardComponent } from './center-card/center-card.component';
import { NodesComponent } from './nodes/nodes.component';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainDiagramComponent } from './main-diagram/main-diagram.component';



@NgModule({
  declarations: [
    AppComponent,
    CenterCardComponent,
    NodesComponent,
    MainDiagramComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
