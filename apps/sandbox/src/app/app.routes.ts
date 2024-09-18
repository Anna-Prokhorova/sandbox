/* eslint-disable @typescript-eslint/no-explicit-any */
import { Route } from '@angular/router';
import { FeatureDirectivesComponent } from '@sandbox/feature-directives';
import { FeatureMainComponent } from '@sandbox/feature-main';
import { FeatureRxjsComponent } from '@sandbox/feature-rxjs';

export const appRoutes: Route[] = [
  {
    path: '',
    component: FeatureMainComponent,
  },
  {
    path: 'rxjs',
    component: FeatureRxjsComponent,
  },
  {
    path: 'directives',
    component: FeatureDirectivesComponent,
  },
  {
    path: 'routing',
    loadChildren: (): Promise<Route[]> =>
      import('@sandbox/routing').then((m: any): Route[] => m.routingRoutes),
  },
];
