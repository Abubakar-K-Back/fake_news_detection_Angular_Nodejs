import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule,ReactiveFormsModule,  } from "@angular/forms";
import { HeroService } from "../app/hero.service";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    ChartsModule

  ],
  
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
