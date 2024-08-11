import { Observable, of, delay } from 'rxjs';

export const sourceFJWT1$: Observable<number> = of(1).pipe(delay(2000));
export const sourceFJWT2$: Observable<number> = of(2).pipe(delay(5000));
