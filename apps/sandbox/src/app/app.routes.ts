import { Route } from '@angular/router';
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
];
