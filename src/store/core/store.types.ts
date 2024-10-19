export interface CoreStoreState {
  usernameValue: string | undefined;
  passwordValue: string | undefined;
  isLoginFormValid: boolean;
}

export interface CoreStoreActions {
  setUsernameValue(value: string): void;
  setPasswordValue(value: string): void;
  setIsLoginFormValid(value: boolean): void;
}

export interface CoreStore extends CoreStoreState, CoreStoreActions {}
