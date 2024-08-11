import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RepeatDirective } from '../../utils/repeat.directive';

@Component({
  selector: 'lib-repeat-example',
  standalone: true,
  imports: [CommonModule, RepeatDirective],
  templateUrl: './repeat-example.component.html',
  styleUrl: './repeat-example.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RepeatExampleComponent {}
