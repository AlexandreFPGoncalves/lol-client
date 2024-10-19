import { create } from 'zustand';
import { createJSONStorage, devtools, persist } from 'zustand/middleware';
import { CoreStore, CoreStoreState, CoreStoreActions } from './store.types';

const initialState: CoreStoreState = {
  usernameValue: undefined,
  passwordValue: undefined,
  isLoginFormValid: false,
};

const actions = (set: any): CoreStoreActions => {
  const setUsernameValue = (value: string) => {
    set(
      (state: CoreStoreState) => ({
        usernameValue: value,
      }),
      false,
      'set-username-value'
    );
  };

  const setPasswordValue = (value: string) => {
    set(
      (state: CoreStoreState) => ({
        passwordValue: value,
      }),
      false,
      'set-password-value'
    );
  };

  const setIsLoginFormValid = (value: boolean) => {
    set(
      (state: CoreStoreState) => ({
        isLoginFormValid: value,
      }),
      false,
      'set-is-login-form-valid'
    );
  };

  return {
    setUsernameValue,
    setPasswordValue,
    setIsLoginFormValid,
  };
};

export const useCoreStore = create<CoreStore>()(
  devtools(
    (set) => ({
      ...initialState,
      ...actions(set),
    }),
    {
      name: 'LOL-CLIENT.STORE',
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
