import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute, Data } from '@angular/router';
import { map, Observable } from 'rxjs';

export interface Details {
  title: string;
  img?: string;
  subtitles: string[];
  link: string;
  chips: DetailsChip[];
}

export interface DetailsChip {
  value: number;
  name: string;
}

@Component({
  selector: 'lib-details',
  standalone: true,
  imports: [CommonModule, MatChipsModule, MatButtonModule, MatIconModule],
  template: `
    @let details = details$ | async; @if (details) {
    <div class="main">
      @if (details.img) {
      <img
        class="main-img"
        [src]="details.img"
        [alt]="details.title + 'photo'"
      />
      }
      <div class="main-info">
        <span class="main-info-title">{{ details.title }}</span>
        @for (subtitle of details.subtitles; track $index) {
        <span class="main-info-subtitle">{{ subtitle }}</span>
        }
        <div class="chips">
          @for (chip of (details.chips); track $index) {
          <mat-chip>
            <div class="chips-item">
              <span class="chips-item-title">{{ chip.value }}</span>
              <span class="chips-item-subtitle">{{ chip.name }}</span>
            </div>
          </mat-chip>
          }
        </div>
      </div>
    </div>
    <a class="main-link" mat-flat-button [href]="details.link"
      ><mat-icon>link</mat-icon>Look on GitHub</a
    >
    }
  `,
  styleUrl: './details.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailsComponent {
  private activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  public details$: Observable<Details> = this.activatedRoute.data.pipe(
    map((data: Data): Details => data['details'] ?? [])
  );
}
