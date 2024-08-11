import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'lib-ui-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './ui-header.component.html',
  styleUrl: './ui-header.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiHeaderComponent {}
