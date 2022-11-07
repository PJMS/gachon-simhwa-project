import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './mat.module';
import { OverviewComponent } from './overview/overview.component';
import { RecommendationsComponent } from './recommendations/recommendations.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [AppComponent, RecommendationsComponent, OverviewComponent, HomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
