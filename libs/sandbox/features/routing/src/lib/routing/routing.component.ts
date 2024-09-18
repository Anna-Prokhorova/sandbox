import {
  ChangeDetectionStrategy,
  Component,
  signal,
  WritableSignal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'lib-routing',
  standalone: true,
  imports: [
    CommonModule,
    MatTabsModule,
    RouterModule,
    MatCardModule,
    MatIconModule,
  ],
  templateUrl: './routing.component.html',
  styleUrl: './routing.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoutingComponent {
  public sections: { link: string; name: string }[] = [
    { link: 'users', name: 'Users' },
    { link: 'repos', name: 'Repos' },
    { link: 'search', name: 'Search User' },
  ];
  public activeLink: string = this.sections[0].link;

  public isShowDetails: WritableSignal<boolean> = signal(false);
}
