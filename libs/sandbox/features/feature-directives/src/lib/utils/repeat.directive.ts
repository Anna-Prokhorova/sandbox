import {
  Directive,
  inject,
  Input,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[libRepeat]',
  standalone: true,
})
export class RepeatDirective {
  private template: TemplateRef<unknown> = inject(TemplateRef);
  private vcr: ViewContainerRef = inject(ViewContainerRef);

  @Input() set libRepeat(value: number) {
    this.repeatCount = value;
    this.updateView();
  }

  private repeatCount: number = 0;

  private updateView(): void {
    for (let i: number = 0; i < this.repeatCount; i++) {
      this.vcr.createEmbeddedView(this.template);
    }
  }
}
