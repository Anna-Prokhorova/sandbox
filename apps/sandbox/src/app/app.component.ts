import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UiHeaderComponent } from '@sandbox/ui';

@Component({
  standalone: true,
  imports: [RouterModule, UiHeaderComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.less',
})
export class AppComponent {
  title: string = 'sandbox';
}
