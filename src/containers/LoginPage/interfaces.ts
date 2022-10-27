type R<T> = T extends Promise<infer U> ? U : T;

export type YieldReturn<T> = R<
  ReturnType<T extends (...args: any) => any ? T : any>
>;
export interface FormInputs {
  username: string;
  password: string;
}
export interface UserState {
  authToken: string;
  error: string;
  loading: boolean;
}

export interface PostLoginPayload {
  username: string;
  password: string;
  client_id: string;
  grant_type: string;
}
