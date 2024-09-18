import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, timer, of, mergeMap } from 'rxjs';

export class SandboxPreloadingStrategy implements PreloadingStrategy {
  preload(route: Route, load: () => Observable<unknown>): Observable<unknown> {
    const loadRoute: (delay: number) => Observable<unknown> = (
      delay: number
    ): Observable<unknown> =>
      delay > 0
        ? timer(delay).pipe(mergeMap((): Observable<unknown> => load()))
        : load();

    return route.data && route.data['preload']
      ? loadRoute(route.data['delay'])
      : of(null);
  }
}
