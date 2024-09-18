/* eslint-disable @typescript-eslint/no-explicit-any */
import { Type } from '@angular/core';
import { Route } from '@angular/router';
import { FeatureMainComponent } from '@sandbox/feature-main';

export const appRoutes: Route[] = [
  {
    path: '',
    component: FeatureMainComponent,
  },
  {
    path: 'rxjs',
    data: { preload: false },
    loadComponent: (): Promise<Type<unknown>> =>
      import('@sandbox/feature-rxjs').then(
        (m: any): Type<unknown> => m.FeatureRxjsComponent
      ),
  },
  {
    path: 'directives',
    data: { preload: false },
    loadComponent: (): Promise<Type<unknown>> =>
      import('@sandbox/feature-directives').then(
        (m: any): Type<unknown> => m.FeatureDirectivesComponent
      ),
  },
  {
    path: 'routing',
    data: { preload: true, delay: 1000 },
    loadChildren: (): Promise<Route[]> =>
      import('@sandbox/routing').then((m: any): Route[] => m.routingRoutes),
  },
];
