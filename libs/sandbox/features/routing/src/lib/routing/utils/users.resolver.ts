import { RedirectCommand, ResolveFn, Router } from '@angular/router';
import { GitUser } from '../data-access/models/user.models';
import { inject } from '@angular/core';
import { GithubApiService } from '../data-access/github.api.service';
import { catchError, map, Observable, of } from 'rxjs';
import { ListItem } from '../components/items-list/items-list.component';

export const usersResolver: ResolveFn<ListItem[]> = (): Observable<
  ListItem[] | RedirectCommand
> => {
  const router: Router = inject(Router);
  const githubApiService: GithubApiService = inject(GithubApiService);
  return githubApiService.getUsers().pipe(
    map((users: GitUser[]): ListItem[] =>
      users.map(
        (user: GitUser): ListItem => ({
          id: user.id,
          title: user.login,
          subtitle: '',
          img: user.avatar_url,
          urlParams: ['user', user.login],
        })
      )
    ),
    catchError(
      (): Observable<RedirectCommand> =>
        of(new RedirectCommand(router.parseUrl('/404')))
    )
  );
};
