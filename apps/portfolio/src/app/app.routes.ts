import { Route } from '@angular/router';
import { DashboardComponent } from '@portfolio/feature';

export const appRoutes: Route[] = [
  { path: '', component: DashboardComponent },
  { path: 'dashboard', component: DashboardComponent },
  // { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];
