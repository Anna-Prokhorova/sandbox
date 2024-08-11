import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'lib-feature-main',
  standalone: true,
  imports: [
    CommonModule,
    MatListModule,
    MatDividerModule,
    MatCardModule,
    RouterModule,
  ],
  templateUrl: './feature-main.component.html',
  styleUrl: './feature-main.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureMainComponent {}
