import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'lib-not-found',
  standalone: true,
  imports: [CommonModule, MatIcon],
  template: `<mat-icon>search_off</mat-icon> <span>NOT FOUND</span>`,
  styles: `
  :host {
    display: flex;
    align-items: center;
    gap: 4px;
  }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotFoundComponent {}
