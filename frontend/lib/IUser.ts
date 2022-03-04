export interface IUser {
  username: string;
  _id: string;
  Error?: string;
}

export interface ISingleUser {
  username: string;
  _id: string;
  cout: number;
  log: ILog[];
}

interface ILog {
  description: string;
  duration: number;
  date: string;
}

export interface ICreateUserParams {
  username: string;
}
