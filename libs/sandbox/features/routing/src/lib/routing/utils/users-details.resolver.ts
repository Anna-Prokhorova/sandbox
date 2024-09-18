import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RedirectCommand,
  ResolveFn,
  Router,
} from '@angular/router';
import { catchError, map, Observable, of } from 'rxjs';
import { GithubApiService } from '../data-access/github.api.service';
import { GitUserDetailed } from '../data-access/models/user.models';
import { Details } from '../components/details/details.component';

export const usersDetailsResolver: ResolveFn<Details> = (
  route: ActivatedRouteSnapshot
): Observable<Details | RedirectCommand> => {
  const router: Router = inject(Router);
  const githubApiService: GithubApiService = inject(GithubApiService);
  return githubApiService.getUser(route.paramMap.get('login')!).pipe(
    map(
      (user: GitUserDetailed): Details => ({
        title: user.login,
        img: user.avatar_url,
        subtitles: [user.name, user.company, user.location],
        link: user.html_url,
        chips: [
          {
            value: user.followers,
            name: 'followers',
          },
          {
            value: user.public_repos,
            name: 'public repos',
          },
        ],
      })
    ),
    catchError(
      (): Observable<RedirectCommand> =>
        of(
          new RedirectCommand(router.parseUrl('/routing/(search//details:404)'))
        )
    )
  );
};
