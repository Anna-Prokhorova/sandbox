import { Route } from '@angular/router';
import { RoutingComponent } from './routing/routing.component';
import { ItemsListComponent } from './routing/components/items-list/items-list.component';
import { UserSearchComponent } from './routing/components/user-search/user-search.component';
import { DetailsComponent } from './routing/components/details/details.component';
import { reposResolver } from './routing/utils/repos.resolver';
import { usersResolver } from './routing/utils/users.resolver';
import { GithubApiService } from './routing/data-access/github.api.service';
import { usersDetailsResolver } from './routing/utils/users-details.resolver';
import { reposDetailsResolver } from './routing/utils/repos-details.resolver';
import { NotFoundComponent } from './routing/components/not-found/not-found.component';

export const routingRoutes: Route[] = [
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  {
    path: '',
    component: RoutingComponent,
    providers: [GithubApiService],
    children: [
      {
        path: 'users',
        component: ItemsListComponent,
        resolve: { items: usersResolver },
      },
      {
        path: 'repos',
        component: ItemsListComponent,
        resolve: { items: reposResolver },
      },
      {
        path: 'search',
        component: UserSearchComponent,
      },
      {
        path: 'user/:login',
        component: DetailsComponent,
        outlet: 'details',
        resolve: { details: usersDetailsResolver },
      },
      {
        path: 'repo/:owner/:name',
        component: DetailsComponent,
        outlet: 'details',
        resolve: { details: reposDetailsResolver },
      },
      {
        path: '404',
        component: NotFoundComponent,
        outlet: 'details',
      },
    ],
  },
];
