import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForeseeComponent } from './foresee/foresee.component';
import { HomeComponent } from './home/home.component';
import { OverviewComponent } from './overview/overview.component';
import { RecommendationsComponent } from './recommendations/recommendations.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'foresee',
    component: ForeseeComponent,
  },
  {
    path: 'recom',
    component: RecommendationsComponent,
  },
  {
    path: 'overview',
    component: OverviewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
