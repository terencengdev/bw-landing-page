"use client";
import { useState, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useUser } from "../store/user";
import { IoClose } from "react-icons/io5";

import { ToastContainer, toast, Slide } from "react-toastify";

interface FormInput {
  email: string;
  password: string;
}

interface User {
  firstName: string;
  email: string;
}
interface ModalProps {
  onClose: any;
}

export default function Login({ onClose }: ModalProps) {
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
    watch,
  } = useForm<FormInput>();

  const { updateUser } = useUser();
  const onSubmit: SubmitHandler<FormInput> = async (data) => {
    try {
      const userData: User = await login(data);
      updateUser(userData);
      console.log(userData);
      const notify = () =>
        toast.success(`Welcome back, ${userData.firstName}!`);
      reset();
      notify();
      setTimeout(() => {
        onClose();
        window.location.reload();
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  };

  const [openModal, setModal] = useState(false);

  const handleModal = () => {
    onClose();
    setModal(!openModal);
  };

  const [pass_type, SetPassType] = useState("password");

  const handlePasswordToggle = () => {
    if (pass_type == "text") {
      SetPassType("password");
    } else {
      SetPassType("text");
    }
  };

  const login = (data: FormInput): Promise<User> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (
          data.email === "terencejiahao@gmail.com" &&
          data.password === "password"
        ) {
          const loggedInUser: User = { firstName: "User", email: data.email };
          resolve(loggedInUser);
        } else {
          reject(new Error("Invalid email or password"));
          const notify = () => toast.error("Invalid email or password");
          notify();
        }
      }, 1000);
    });
  };

  return (
    <div className="form-wrap w-full">
      <button onClick={handleModal} className="close">
        <IoClose />
      </button>
      <div className="form-title text-3xl mb-5 text-center">
        Login Blackwell Global
      </div>
      <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-field  items-center">
          <input
            {...register("email", {
              required: "Email is required.",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            className={`${
              errors?.email ? "error" : ""
            } block w-full text-gray-900 border border-[#cccccc] placeholder:text-gray-400 p-1.5`}
          />

          {errors.email && (
            <p role={"alert"} className="error-msg text-sm">
              {errors?.email ? errors.email.message : null}
            </p>
          )}
        </div>

        <div className="form-field  items-center">
          <div className="field">
            <div className="password-wrap relative">
              <input
                {...register("password", {
                  required: "Password is required.",
                })}
                id="password"
                placeholder="Password"
                type={pass_type}
                autoComplete="current-password"
                className={`${
                  errors.password ? "error" : ""
                } block w-full text-gray-900 border border-[#cccccc] placeholder:text-gray-400 p-1.5`}
              />
              {pass_type == "password" && (
                <FaEye
                  className="c absolute top-[50%] right-2 translate-y-[-50%]"
                  onClick={handlePasswordToggle}
                />
              )}
              {pass_type == "text" && (
                <FaEyeSlash
                  className="cursor-pointer absolute top-[50%] right-2 translate-y-[-50%]"
                  onClick={handlePasswordToggle}
                />
              )}
            </div>

            {errors.password && (
              <p role={"alert"} className="error-msg text-sm">
                {errors?.password ? errors.password.message : null}
              </p>
            )}
          </div>
        </div>

        <div className="form-field full flex justify-center items-center  items-center">
          <input
            id="login_btn"
            name="login"
            type="submit"
            value="Login"
            className="main-btn px-5 py-2 bg-[#F37406] rounded-sm text-white hover:bg-[#fff] hover:text-[#F37406]"
          />
        </div>
      </form>
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
