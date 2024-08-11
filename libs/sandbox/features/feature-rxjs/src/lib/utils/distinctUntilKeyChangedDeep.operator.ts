/* eslint-disable @typescript-eslint/no-explicit-any */
import { distinctUntilChanged, Observable, OperatorFunction, scan } from 'rxjs';

export function distinctUntilKeyChangedDeep<T extends { [key: string]: any }>(
  keyPath: string
): OperatorFunction<T, T> {
  return (source$: Observable<T>): Observable<T> =>
    source$.pipe(
      distinctUntilChanged((prev: T, curr: T): boolean => {
        const keyParts: string[] = keyPath.split('.');
        return isEqualProperties(curr, prev, keyParts);
      })
    );
}

function isEqualProperties(
  object1: { [key: string]: any },
  object2: { [key: string]: any },
  [key, ...other]: string[]
): boolean {
  if (
    !Object.prototype.hasOwnProperty.call(object1, key) ||
    !Object.prototype.hasOwnProperty.call(object2, key)
  ) {
    return false;
  }

  if (typeof object1[key] === typeof object2[key]) {
    if (typeof object1[key] === 'object') {
      if (object1[key] instanceof Array && object2[key] instanceof Array) {
        return isArraysEqual(object1[key], object2[key]);
      } else if (
        !(object1[key] instanceof Array) &&
        !(object2[key] instanceof Array)
      ) {
        return isEqualProperties(object1[key], object2[key], other);
      } else {
        return false;
      }
    } else {
      return object1[key] === object2[key];
    }
  }
  return false;
}

function isArraysEqual(array1: unknown[], array2: unknown[]): boolean {
  if (array1.length !== array2.length) return false;
  return JSON.stringify(array1) === JSON.stringify(array2);
}
