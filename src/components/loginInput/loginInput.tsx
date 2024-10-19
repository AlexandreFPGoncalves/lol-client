'use client';
import React, { useState } from 'react';
import { EyeOpenIcon, EyeNoneIcon } from '@radix-ui/react-icons';
import { useCoreStore } from '@/store';

interface LoginInputProps {
  inputType: 'username' | 'password';
}

export const LoginInput: React.FC<LoginInputProps> = ({ inputType }) => {
  const usernameValue = useCoreStore((state) => state.usernameValue);
  const passwordValue = useCoreStore((state) => state.passwordValue);

  const setUsernameValue = useCoreStore((state) => state.setUsernameValue);
  const setPasswordValue = useCoreStore((state) => state.setPasswordValue);

  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const isPassword = inputType === 'password';
  const inputValue = isPassword ? passwordValue : usernameValue;

  const resources = {
    placeholders: {
      username: 'USERNAME',
      password: 'PASSWORD',
    },
  };

  const handleInputOnChange = (value: string) => {
    isPassword ? setPasswordValue(value) : setUsernameValue(value);
  };

  return (
    <div className="relative flex w-full mt-4 gap-2">
      <input
        className="peer w-full h-14 px-[10px] py-[12px] bg-[#ebebeb] rounded font-sans font-bold text-black placeholder-transparent focus:outline-none focus:ring-0 focus:bg-[#ebebeb] transition-all duration-200 hover:bg-[#e4e4e4] border-none focus:border-none"
        type={isPassword ? (isPasswordVisible ? 'text' : 'password') : 'text'}
        placeholder=" "
        onChange={(e) => handleInputOnChange(e.target.value)}
        value={inputValue}
      />

      <label
        className={`absolute flex font-sans text-xs font-extrabold text-gray-500 transition-all duration-200
          ${
            inputValue
              ? 'top-[10px] left-2 text-gray-700 transform -translate-y-1/2'
              : 'top-1/2 left-6 transform -translate-y-1/2 text-gray-500'
          }
          peer-focus:top-[10px] peer-focus:left-2 `}
      >
        {isPassword ? resources.placeholders.password : resources.placeholders.username}
      </label>

      {isPassword && (
        <div className="absolute right-4 flex items-center content-center justify-center w-[40px] h-full">
          <div onClick={() => setIsPasswordVisible((prevValue) => !prevValue)}>
            {isPasswordVisible ? <EyeOpenIcon /> : <EyeNoneIcon />}
          </div>
        </div>
      )}
    </div>
  );
};
