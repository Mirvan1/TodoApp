export interface Todo {
  Id?: number;
  Title: string;
  Description?: string;
  Status: number;
  CreatedAt?: Date;
  DeletedAt?: Date;
  DueDate?: Date;
  UserId?: number;
}
