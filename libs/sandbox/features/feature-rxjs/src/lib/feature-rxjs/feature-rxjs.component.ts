import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription, tap } from 'rxjs';
import { bufferDynamic } from '../utils/bufferDynamic.operator';
import { distinctUntilKeyChangedDeep } from '../utils/distinctUntilKeyChangedDeep.operator';
import { forkJoinWithTimeout } from '../utils/forkJoinWithTimeout.operator';
import { MatCardModule } from '@angular/material/card';
import { MatButton } from '@angular/material/button';
import {
  sizeControl$,
  sourceBufferDynamic$,
} from '../utils/consts/bufferDynamic.consts';
import {
  keyTest1,
  keyTest2,
  sourceDUKC1$,
  sourceDUKC2$,
} from '../utils/consts/distinctUntilKeyChangedDeep.consts';
import {
  sourceFJWT1$,
  sourceFJWT2$,
} from '../utils/consts/forkJoinWithTimeout.consts';

@Component({
  selector: 'lib-feature-rxjs',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButton],
  templateUrl: './feature-rxjs.component.html',
  styleUrl: './feature-rxjs.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureRxjsComponent {
  private bufferDynamicSubscription?: Subscription;

  public startBufferDynamic(): void {
    this.bufferDynamicSubscription = sourceBufferDynamic$
      .pipe(bufferDynamic(sizeControl$.pipe(tap(console.log))))
      .subscribe((buffer: string[]): void => {
        console.log('Buffered values:', buffer);
      });
  }

  public stopBufferDynamic(): void {
    this.bufferDynamicSubscription?.unsubscribe();
    console.log('BufferDynamic stopped');
  }

  public startDistinctUntilKeyChangedDeep(): void {
    console.log(keyTest1);
    sourceDUKC1$
      .pipe(distinctUntilKeyChangedDeep(keyTest1))
      .subscribe((value: object): void => {
        console.log(JSON.stringify(value));
      });

    console.log(keyTest2);
    sourceDUKC2$
      .pipe(distinctUntilKeyChangedDeep(keyTest2))
      .subscribe((value: object): void => {
        console.log(JSON.stringify(value));
      });
  }

  public startForkJoinWithTimeout(): void {
    forkJoinWithTimeout(
      [sourceFJWT1$, sourceFJWT2$],
      [null, 0],
      [3000, 3000]
    ).subscribe(console.log);
  }
}
