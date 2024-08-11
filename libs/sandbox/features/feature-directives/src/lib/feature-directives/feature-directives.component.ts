import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { HostSwitcherExampleComponent } from '../components/host-switcher-example/host-switcher-example.component';
import { DragByScrollExampleComponent } from '../components/drag-by-scroll-example/drag-by-scroll-example.component';
import { RepeatExampleComponent } from '../components/repeat-example/repeat-example.component';

@Component({
  selector: 'lib-feature-directives',
  standalone: true,
  imports: [
    CommonModule,
    MatTabsModule,
    HostSwitcherExampleComponent,
    DragByScrollExampleComponent,
    RepeatExampleComponent,
  ],
  templateUrl: './feature-directives.component.html',
  styleUrl: './feature-directives.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureDirectivesComponent {
  private cdr: ChangeDetectorRef = inject(ChangeDetectorRef);
}
