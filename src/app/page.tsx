'use client';
import Image from 'next/image';
import { images } from '@/assets';
import { LoginInput, Socials } from '@/components';
import { socials } from '@/assets';
import { useEffect, useMemo, useState } from 'react';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import { useCoreStore } from '@/store';

export default function Home() {
  //* STORE
  const usernameValue = useCoreStore((state) => state.usernameValue);
  const passwordValue = useCoreStore((state) => state.passwordValue);
  const isLoginFormValid = useCoreStore((state) => state.isLoginFormValid);
  const setIsLoginFormValid = useCoreStore((state) => state.setIsLoginFormValid);

  //* Checkbox
  const [staySignedIn, setStaySignedIn] = useState<boolean>(false);

  const handleStaySignedInState = () => {
    setStaySignedIn((prevValue) => !prevValue);
  };

  //* Resources
  const resources = useMemo(() => {
    return {
      SignIn: 'Sign in',
      inputs: {
        username: 'USERNAME',
        password: 'PASSWORD',
      },
      staySignedIn: 'Stay signed in',
      footer: {
        cantSignIn: "CAN'T SIGN IN?",
        createAccount: 'CREATE ACCOUNT',
        version: 'v96.0.1',
        disclaimer: [
          'THIS APP IS PROTECTED BY HCAPTCHA AND ITS',
          'PRIVACY POLICY',
          'AND',
          'TERMS OF SERVICE',
          'APPLY.',
        ],
      },
    };
  }, []);

  //* Login Button Validator
  useEffect(() => {
    if (usernameValue && passwordValue) {
      setIsLoginFormValid(true);
    } else setIsLoginFormValid(false);
  }, [usernameValue, passwordValue, setIsLoginFormValid]);

  return (
    <main className="flex min-h-screen">
      <div className="w-full sm:w-[400px] bg-white text-black shadow">
        <div className="flex flex-col gap-8 mt-16 px-12  h-full">
          {/* //* Riot Logo + Sign In Title */}
          <div className="flex flex-col items-center gap-4">
            <Image height={60} width={140} src={images.riotgames} alt="Riot Games" />
            <span className="flex font-bold text-2xl font-sans">{resources.SignIn}</span>
          </div>

          {/* //* Inputs */}
          <div className="flex flex-col gap-1">
            <LoginInput inputType="username" />
            <LoginInput inputType="password" />
          </div>
          {/* //* Socials & Checkbox */}
          <div className="flex flex-col gap-4">
            <div className="flex gap-2 justify-between">
              {socials.map((s, i) => (
                <Socials key={i} social={s} />
              ))}
            </div>

            <div className="flex gap-2 items-center">
              <input
                className={'w-4 h-4 text-red-600 rounded dark:bg-[#ebebeb] focus:ring-0 border-none'}
                type={'checkbox'}
                onClick={handleStaySignedInState}
                checked={staySignedIn}
                value=""
              />
              <p className="font-sans font-medium text-black/60">{resources.staySignedIn}</p>
            </div>

            <div className="w-full flex justify-center">
              <button
                className={`w-16 h-16 mt-14 rounded-2xl flex justify-center items-center transition-none ${
                  isLoginFormValid ? 'bg-red-600 hover:bg-red-700' : 'bg-[#f5f5f5] hover:bg-[#e0e0e0]'
                }`}
              >
                <ArrowRightIcon className={`w-8 h-8 ${isLoginFormValid ? 'text-white' : 'text-[#919191]'} `} />
              </button>
            </div>
          </div>

          {/* //*Login Button */}
          <div className="flex flex-col h-full justify-center text-center gap-4">
            <section className="flex flex-col">
              {/* //* Can't Sign in */}
              <p className="font-sans text-[12px] font-extrabold text-black/60 cursor-pointer hover:text-black/70">
                {resources.footer.cantSignIn}
              </p>
              {/* //* Create Account & Game Version */}
              <div className="flex text-center justify-center relative">
                <p className="font-sans text-[12px] font-extrabold text-black/60 cursor-pointer hover:text-black/70">
                  {resources.footer.createAccount}
                </p>
                <p className="absolute right-0 font-sans text-[12px] font-extrabold text-black/30">
                  {resources.footer.version}
                </p>
              </div>
            </section>

            <div className="flex flex-col text-center justify-center relative">
              <p className="right-0 font-sans text-[12px] font-extrabold text-black/30">
                {resources.footer.disclaimer[0]}
              </p>

              <div className="flex gap-1 justify-center">
                <p className="right-0 font-sans text-[12px] font-extrabold text-black/30 underline cursor-pointer">
                  {resources.footer.disclaimer[1]}
                </p>
                <p className="right-0 font-sans text-[12px] font-extrabold text-black/30 cursor-pointer">
                  {resources.footer.disclaimer[2]}
                </p>
                <p className="right-0 font-sans text-[12px] font-extrabold text-black/30 underline cursor-pointer">
                  {resources.footer.disclaimer[3]}
                </p>
                <p className="right-0 font-sans text-[12px] font-extrabold text-black/30 cursor-pointer">
                  {resources.footer.disclaimer[4]}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
