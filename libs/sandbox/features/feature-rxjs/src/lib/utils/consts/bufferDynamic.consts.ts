import { Observable, interval, map, concat, of, delay } from 'rxjs';

export const ms: number = 500;

export const sourceBufferDynamic$: Observable<string> = interval(ms).pipe(
  map((value: number): string => `Value ${value + 1} (${ms * value} ms)`)
);

export const sizeControl$: Observable<number> = concat(
  of(2),
  of(3).pipe(delay(1500)),
  of(1).pipe(delay(3000)),
  of(4).pipe(delay(4000))
);
