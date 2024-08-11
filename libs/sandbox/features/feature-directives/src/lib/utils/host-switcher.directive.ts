/* eslint-disable @angular-eslint/no-input-rename */
import {
  Directive,
  inject,
  Input,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[libHostSwitcher]',
  standalone: true,
})
export class HostSwitcherDirective {
  private vcr: ViewContainerRef = inject(ViewContainerRef);
  private template: TemplateRef<unknown> = inject(TemplateRef);

  @Input() set libHostSwitcher(value: boolean) {
    this.condition = value;
    this.changeView();
  }

  @Input() set libHostSwitcherThen(element: HTMLElement) {
    this.host1 = element;
    this.changeView();
  }

  @Input('libHostSwitcherElse') set libHostSwitcherElse(element: HTMLElement) {
    this.host2 = element;
    this.changeView();
  }

  private condition: boolean = true;
  private host1?: HTMLElement;
  private host2?: HTMLElement;

  private changeView(): void {
    if (this.host1 && this.host2) {
      this.vcr.clear();
      const hostElement: HTMLElement = this.condition ? this.host1 : this.host2;
      hostElement.appendChild(this.vcr.element.nativeElement);
      this.vcr.createEmbeddedView(this.template);
    }
  }
}
