export interface IUser {
  username: string;
  _id: string;
  Error?: string;
}

export interface ISingleUser {
  username: string;
  _id: string;
  count: number;
  log: ILog[];
  Error?: string;
}

export interface ILog {
  description: string;
  duration: number;
  date: string;
}

export interface ICreateUserParams {
  username: string;
}

export interface IExercise {
  description: string;
  duration: number;
  date: string;
}

export interface ICreateExerciseParams extends IExercise {
  userId: string;
}

export type IExerciseResponse = ICreateExerciseParams & IUser;
