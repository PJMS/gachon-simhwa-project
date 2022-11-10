import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ForeseeComponent } from './foresee/foresee.component';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from './mat.module';
import { OverviewComponent } from './overview/overview.component';
import { RecommendationsComponent } from './recommendations/recommendations.component';
import { ForeseeResultComponent } from './foresee-result/foresee-result.component';

@NgModule({
  declarations: [
    AppComponent,
    RecommendationsComponent,
    OverviewComponent,
    HomeComponent,
    ForeseeComponent,
    ForeseeResultComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
