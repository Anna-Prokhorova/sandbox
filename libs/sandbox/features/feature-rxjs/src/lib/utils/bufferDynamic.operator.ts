import {
  filter,
  map,
  Observable,
  OperatorFunction,
  scan,
  withLatestFrom,
} from 'rxjs';

//буфер с приколами
export function bufferDynamic<T>(
  bufferCountCondition$: Observable<number>
): OperatorFunction<T, T[]> {
  return (source$: Observable<T>): Observable<T[]> =>
    source$.pipe(
      withLatestFrom(bufferCountCondition$),
      scan(
        (
          acc: {
            currentBuffer: T[];
            finalBuffer: null | T[];
          },
          [curr, bufferSize]: [T, number]
        ): {
          currentBuffer: T[];
          finalBuffer: null | T[];
        } => {
          acc.currentBuffer.push(curr);

          if (acc.currentBuffer.length >= bufferSize) {
            acc.finalBuffer = acc.currentBuffer.splice(0, bufferSize);
          } else {
            acc.finalBuffer = null;
          }

          return acc;
        },
        { currentBuffer: [], finalBuffer: null }
      ),
      filter(
        (acc: { currentBuffer: T[]; finalBuffer: null | T[] }): boolean =>
          !!acc.finalBuffer
      ),
      map(
        (acc: { currentBuffer: T[]; finalBuffer: null | T[] }): T[] =>
          acc.finalBuffer!
      )
    );
}
