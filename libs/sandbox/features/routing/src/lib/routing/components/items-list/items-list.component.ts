import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { ActivatedRoute, Data, RouterModule } from '@angular/router';
import { map, Observable } from 'rxjs';
import { MatIconModule } from '@angular/material/icon';

export interface ListItem {
  id: number;
  title: string;
  subtitle: string;
  img?: string;
  icon?: string;
  urlParams: string[];
}

@Component({
  selector: 'lib-items-list',
  standalone: true,
  imports: [CommonModule, MatListModule, RouterModule, MatIconModule],
  template: `<mat-list class="list">
    @for (item of (items$ | async); track item.id) {
    <mat-list-item
      class="list-item"
      [routerLink]="['/routing', { outlets: { details: item.urlParams } }]"
      routerLinkActive="selected"
    >
      <div class="list-item-content">
        @if (item.img) {
        <img
          class="list-item-img"
          [src]="item.img"
          [alt]="item.title + ' photo'"
        />
        } @else if (item.icon) {
        <mat-icon matListItemIcon>{{ item.icon }}</mat-icon>
        }

        <div class="list-item-info">
          <span class="list-item-info-title">{{ item.title }}</span>
          @if (item.subtitle) {
          <span class="list-item-info-subtitle">{{ item.subtitle }}</span>
          }
        </div>
      </div>
    </mat-list-item>
    }
  </mat-list>`,
  styleUrl: './items-list.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemsListComponent {
  private activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  public items$: Observable<ListItem[]> = this.activatedRoute.data.pipe(
    map((data: Data): ListItem[] => data['items'] ?? [])
  );
}
