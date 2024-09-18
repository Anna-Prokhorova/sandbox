import {
  ChangeDetectionStrategy,
  Component,
  signal,
  WritableSignal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'lib-user-search',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    RouterModule,
  ],
  template: `
    <div class="form">
      <mat-form-field class="form-login" subscriptSizing="dynamic">
        <mat-label>User's Login</mat-label>
        <input
          matInput
          [ngModel]="login()"
          (ngModelChange)="login.set($event)"
        />
      </mat-form-field>
      <button
        mat-flat-button
        class="form-button"
        [routerLink]="['/routing', { outlets: { details: 'user/' + login() } }]"
        routerLinkActive="router-link-active"
        [disabled]="login() === ''"
      >
        search
      </button>
    </div>
  `,
  styleUrl: './user-search.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserSearchComponent {
  public login: WritableSignal<string> = signal('');
}
