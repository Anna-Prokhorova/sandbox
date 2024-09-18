import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RedirectCommand,
  ResolveFn,
  Router,
} from '@angular/router';
import { catchError, map, Observable, of } from 'rxjs';
import { GithubApiService } from '../data-access/github.api.service';
import { GitRepoDetailed } from '../data-access/models/repo.models';
import { Details } from '../components/details/details.component';

export const reposDetailsResolver: ResolveFn<Details> = (
  route: ActivatedRouteSnapshot
): Observable<Details | RedirectCommand> => {
  const router: Router = inject(Router);
  const githubApiService: GithubApiService = inject(GithubApiService);
  return githubApiService
    .getRepo(route.paramMap.get('owner')!, route.paramMap.get('name')!)
    .pipe(
      map(
        (repo: GitRepoDetailed): Details => ({
          title: repo.name,
          subtitles: [repo.description, repo.owner.login, repo.language],
          link: repo.html_url,
          chips: [
            {
              value: repo.watchers,
              name: 'watchers',
            },
            {
              value: repo.open_issues,
              name: 'open issues',
            },
          ],
        })
      ),
      catchError(
        (): Observable<RedirectCommand> =>
          of(new RedirectCommand(router.parseUrl('/404')))
      )
    );
};
