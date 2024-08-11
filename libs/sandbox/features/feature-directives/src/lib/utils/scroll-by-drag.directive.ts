import {
  computed,
  Directive,
  ElementRef,
  HostBinding,
  inject,
  OnInit,
  Signal,
  signal,
  WritableSignal,
} from '@angular/core';
import {
  Observable,
  Subscription,
  combineLatest,
  concat,
  concatMap,
  fromEvent,
  merge,
  pairwise,
  race,
  startWith,
  switchMap,
  take,
  takeUntil,
  tap,
} from 'rxjs';

@Directive({
  selector: '[libScrollByDrag]',
  standalone: true,
})
export class ScrollByDragDirective implements OnInit {
  private element: ElementRef = inject(ElementRef);

  @HostBinding('style.cursor') get styleCursor(): string {
    return this.cursor();
  }

  public cursor: Signal<string> = computed((): string => this._cursor());
  private _cursor: WritableSignal<'grab' | 'grabbing'> = signal('grab');

  ngOnInit(): void {
    (this.element.nativeElement as HTMLElement).style.userSelect = 'none';
    const click: Observable<MouseEvent> = fromEvent(
      this.element.nativeElement,
      'click'
    );
    const mouseup: Observable<MouseEvent> = fromEvent(
      this.element.nativeElement,
      'mouseup'
    );
    const mouseout: Observable<MouseEvent> = fromEvent(
      this.element.nativeElement,
      'mouseout'
    );

    const mouseleave: Observable<MouseEvent> = fromEvent(
      this.element.nativeElement,
      'mouseleave'
    );

    mouseleave.subscribe(console.log);

    const untilEvents: Observable<MouseEvent> = merge(
      mouseup,
      mouseleave,
      click
    );

    this.onDrag(untilEvents);

    untilEvents
      .pipe(
        tap((): void => {
          this._cursor.set('grab');
          this.onDrag(untilEvents);
        })
      )
      .subscribe();
  }

  private onDrag(untilEvent: Observable<MouseEvent>): void {
    const mousedown: Observable<MouseEvent> = fromEvent(
      this.element.nativeElement,
      'mousedown'
    );

    const mousemove: Observable<MouseEvent> = fromEvent(
      this.element.nativeElement,
      'mousemove'
    );

    mousedown
      .pipe(
        tap((): void => this._cursor.set('grabbing')),
        switchMap(
          (event: MouseEvent): Observable<[MouseEvent, MouseEvent]> =>
            mousemove.pipe(startWith(event), pairwise())
        ),
        tap(([startEvent, endEvent]: [MouseEvent, MouseEvent]): void => {
          const x: number = startEvent.clientX - endEvent.clientX;
          const y: number = startEvent.clientY - endEvent.clientY;

          console.log('scroll');
          (this.element.nativeElement as HTMLElement).scrollBy(x, y);
        }),
        takeUntil(untilEvent)
      )
      .subscribe();
  }
}
