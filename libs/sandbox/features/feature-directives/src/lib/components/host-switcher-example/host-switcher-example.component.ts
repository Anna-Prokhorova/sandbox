import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ETaskStatus, ITask } from '../../models/task.model';
import { MatButton } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChip } from '@angular/material/chips';
import { HostSwitcherDirective } from '../../utils/host-switcher.directive';

@Component({
  selector: 'lib-host-switcher-example',
  standalone: true,
  imports: [
    CommonModule,
    HostSwitcherDirective,
    MatButton,
    MatCardModule,
    MatChip,
  ],
  templateUrl: './host-switcher-example.component.html',
  styleUrl: './host-switcher-example.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HostSwitcherExampleComponent {
  private cdr: ChangeDetectorRef = inject(ChangeDetectorRef);
  public condition: boolean = true;
  public TaskStatusEnum: typeof ETaskStatus = ETaskStatus;
  public selectedTask: ITask | null = null;

  public tasks: ITask[] = [
    {
      id: 'id-0',
      title: 'TASK 1',
      status: ETaskStatus.ATWORK,
    },
    {
      id: 'id-1',
      title: 'TASK 2',
      status: ETaskStatus.DONE,
    },
    {
      id: 'id-2',
      title: 'TASK 3',
      status: ETaskStatus.ATWORK,
    },
  ];

  public changeStatus(task: ITask): void {
    task.status =
      task.status === ETaskStatus.ATWORK
        ? ETaskStatus.DONE
        : ETaskStatus.ATWORK;
    this.cdr.detectChanges();
  }

  public selectTask(targetTask: ITask): void {
    if (this.selectedTask?.id === targetTask.id) {
      this.selectedTask = null;
      return;
    }
    this.selectedTask = targetTask;
  }
}
