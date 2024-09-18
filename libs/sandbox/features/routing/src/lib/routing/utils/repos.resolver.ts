/* eslint-disable @typescript-eslint/no-explicit-any */
import { inject } from '@angular/core';
import { RedirectCommand, ResolveFn, Router } from '@angular/router';
import { catchError, map, Observable, of } from 'rxjs';
import { GithubApiService } from '../data-access/github.api.service';
import { GitRepo } from '../data-access/models/repo.models';
import { ListItem } from '../components/items-list/items-list.component';

export const reposResolver: ResolveFn<
  ListItem[] | RedirectCommand
> = (): Observable<ListItem[] | RedirectCommand> => {
  const router: Router = inject(Router);
  const githubApiService: GithubApiService = inject(GithubApiService);
  return githubApiService.getRepos().pipe(
    map((repos: GitRepo[]): ListItem[] =>
      repos.map(
        (repo: GitRepo): ListItem => ({
          id: repo.id,
          title: repo.name,
          subtitle: repo.description,
          icon: 'folder',
          urlParams: ['repo', repo.owner.login, repo.name],
        })
      )
    ),
    catchError(
      (): Observable<RedirectCommand> =>
        of(new RedirectCommand(router.parseUrl('/404')))
    )
  );
};
