export interface ITask {
  id: string;
  title: string;
  status: TaskStatusType;
}

export enum ETaskStatus {
  ATWORK = 'ATWORK',
  DONE = 'DONE',
}

export type TaskStatusType = `${ETaskStatus}`;
