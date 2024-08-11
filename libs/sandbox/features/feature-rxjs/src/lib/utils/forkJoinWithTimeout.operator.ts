import { catchError, forkJoin, Observable, of, timeout } from 'rxjs';

export function forkJoinWithTimeout<T>(
  sources: Observable<T>[],
  defaultValues: T[],
  timeouts: number[]
): Observable<T[]> {
  if (
    sources.length !== defaultValues.length ||
    sources.length !== timeouts.length
  ) {
    throw new Error('Error');
  }

  const modifiedSources: Observable<T>[] = sources.map(
    (source$: Observable<T>, index: number): Observable<T> =>
      source$.pipe(
        timeout(timeouts[index]),
        catchError((): Observable<T> => of(defaultValues[index]))
      )
  );

  return forkJoin(modifiedSources);
}
