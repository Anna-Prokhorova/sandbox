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
];
