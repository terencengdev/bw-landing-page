"use client";
import { useEffect, useState } from "react";

import Image from "next/image";
import RegisterButton from "./RegisterBtn";
import { useUser } from "../store/user";
import LoginBtn from "./LoginBtn";

import { RiUserFill } from "react-icons/ri";
import { IoClose } from "react-icons/io5";

import { ToastContainer, toast, Slide } from "react-toastify";

import Countdown from "react-countdown";

export default function Navigation() {
  const { user, logout } = useUser();
  const [toggle, setToggle] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleLogout = () => {
    logout();
    const notify = () => toast.success(`You have logged out successfully`);
    notify();
  };

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const countdown_date = "2025-12-21";

  // Renderer callback with condition
  const renderer = ({ days, hours, minutes, seconds, completed }: any) => {
    return (
      <div className="countdown-date-wrap flex gap-2 uppercase text-4xl lg:text-6xl">
        <div className="days">
          <span>{days}</span>
          <span className="label">Days</span>
        </div>
        <span className="separator">:</span>
        <div className="hour">
          <span>{hours}</span>
          <span className="label">Hours</span>
        </div>
        <span className="separator">:</span>
        <div className="minutes">
          <span>{minutes}</span>
          <span className="label">Minutes</span>
        </div>
        <span className="separator">:</span>
        <div className="seconds">
          <span>{seconds}</span>
          <span className="label">Seconds</span>
        </div>
      </div>
    );
  };

  return (
    <div className="z-99 navbar w-full px-5 py-5 md:py-0 fixed top-0 bg-[#112A4D]">
      <div className="flex items-center justify-between">
        <div className="logo flex-[1.3]">
          {" "}
          <Image
            className="main-logo flex-[0 0 180]"
            src="/blackwelllogo.png"
            alt="Blackwell Logo"
            width={180}
            height={38}
            priority
          />
        </div>
        <div
          className={`${
            isOpen ? "active" : ""
          } flex-3 mobile-menu-wrap justify-between items-center flex flex-wrap md:flex-nowrap md:flex-row `}
        >
          <button onClick={handleClick} className="close">
            <IoClose />
          </button>
          <div className="countdown flex flex-row  flex-wrap md:flex-nowrap items-center gap-5">
            <div className="title uppercase text-sm lg:text-lg flex-[0_0_20%] text-center pr-[3%] lg:pr-[5%]">
              Promotion Ends In
            </div>
            <Countdown date={countdown_date} renderer={renderer} />
          </div>
          <div className="relative login-register register-btn items-center flex gap-2">
            <RegisterButton variant="rounded_primary" />
            <div
              className=" user flex items-center gap-2"
              onClick={handleToggle}
            >
              <div className="user-icon">
                <RiUserFill />
              </div>
            </div>

            {toggle && (
              <div className="login-dropdown">
                {user ? (
                  <a className="" onClick={handleLogout}>
                    Logout
                  </a>
                ) : (
                  <LoginBtn />
                )}
              </div>
            )}

            <div className="login-dropdown-mobile">
              {user ? (
                <a className="" onClick={handleLogout}>
                  Logout
                </a>
              ) : (
                <LoginBtn />
              )}
            </div>
          </div>
        </div>

        <div className="mobiletoggle block md:hidden">
          <button
            onClick={handleClick}
            className="flex flex-col justify-center items-center"
          >
            <span
              className={`bg-steel-500 block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm`}
            ></span>
            <span
              className={`bg-steel-500 block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm my-1.5`}
            ></span>
            <span
              className={`bg-steel-500 block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm`}
            ></span>
          </button>
        </div>
      </div>
      <ToastContainer
        className="w-[60%]"
        autoClose={2000}
        hideProgressBar={true}
        position="bottom-center"
        theme="colored"
        transition={Slide}
      />
    </div>
  );
}
