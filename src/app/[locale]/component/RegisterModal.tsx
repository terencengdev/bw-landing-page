"use client";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { CountryDropdown } from "react-country-region-selector";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useUser } from "../store/user";
import { IoClose } from "react-icons/io5";

import { ToastContainer, toast, Slide } from "react-toastify";

interface FormInput {
  firstname: string;
  lastname: string;
  email: string;
  mobile: string;
  country: string;
  password: string;
  confirm_password: string;
}
interface User {
  firstName: string;
  email: string;
  password: string;
}

interface ModalProps {
  onClose: any;
}
export default function RegisterModal({ onClose }: ModalProps) {
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
      const newUser: User = await signup(data);

      const notify = () =>
        toast.success(
          `Hi ${newUser.firstName},welcome to Blackwell, please verify your email.`
        );
      reset();
      notify();
      updateUser(newUser);
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

  const [country, setCountry] = useState("");
  const [pass_type, SetPassType] = useState("password");
  const [confirm_pass_type, SetConfirmPassType] = useState("password");

  const handlePasswordToggle = () => {
    if (pass_type == "text") {
      SetPassType("password");
    } else {
      SetPassType("text");
    }
  };
  const handleconfirmPasswordToggle = () => {
    if (confirm_pass_type == "text") {
      SetConfirmPassType("password");
    } else {
      SetConfirmPassType("text");
    }
  };
  const onChangeCountry = (value: any) => {
    setCountry(value);
    if (!value) {
      setCountry("");
    }
  };

  const signup = (userData: FormInput): Promise<User> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (userData.email === "terencejiahao@gmail.com") {
          reject("Email already exists!");
          const notify = () => toast.error("Email already exists!");
          notify();
        } else {
          const newUser: User = {
            firstName: userData.firstname ?? "User",
            email: userData.email,
          };
          resolve(newUser);
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
        Register Blackwell Global Account
      </div>
      <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-field items-center">
          <input
            {...register("firstname", {
              required: "First Name is required.",
            })}
            type="text"
            id="firstname"
            name="firstname"
            placeholder="First Name"
            className={`${
              errors?.firstname ? "error" : ""
            } block w-full text-gray-900 border border-[#cccccc] placeholder:text-gray-400 p-1.5`}
          />

          {errors.firstname && (
            <p role={"alert"} className=" error-msg text-sm">
              {errors?.firstname ? errors.firstname.message : null}
            </p>
          )}
        </div>
        <div className="form-field items-center">
          <input
            {...register("lastname", {
              required: "Last Name is required.",
            })}
            type="text"
            id="lastname"
            name="lastname"
            placeholder="Last Name"
            className={`${
              errors?.lastname ? "error" : ""
            } block w-full text-gray-900 border border-[#cccccc] placeholder:text-gray-400 p-1.5`}
          />

          {errors.lastname && (
            <p role={"alert"} className="error-msg text-sm">
              {errors?.lastname ? errors.lastname.message : null}
            </p>
          )}
        </div>
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
        <div className="form-field items-center">
          <input
            {...register("mobile", {
              required: "Mobile No. is required.",
            })}
            type="text"
            id="mobile"
            name="mobile"
            placeholder="Mobile No."
            className={`${
              errors?.mobile ? "error" : ""
            } block w-full text-gray-900 border border-[#cccccc] placeholder:text-gray-400 p-1.5`}
          />

          {errors.mobile && (
            <p role={"alert"} className="error-msg text-sm">
              {errors?.mobile ? errors.mobile.message : null}
            </p>
          )}
        </div>

        <div className="country-dropdown form-field items-center">
          <CountryDropdown
            onChange={onChangeCountry}
            className="w-full"
            value={country}
          />
          {errors.country && (
            <p role={"alert"} className="error-msg text-sm">
              {errors?.country ? errors.country.message : null}
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
        <div className="form-field  items-center">
          <div className="field">
            <div className="password-wrap relative">
              <input
                {...register("confirm_password", {
                  required: "Confirm Password is required.",
                  validate: (value) => {
                    if (value !== watch("password")) {
                      return "Password does not match";
                    }
                  },
                })}
                placeholder="Confirm Password"
                id="confirm_password"
                type={confirm_pass_type}
                autoComplete="current-password"
                className={`${
                  errors.confirm_password ? "error" : ""
                } block w-full text-gray-900 border border-[#cccccc] placeholder:text-gray-400 p-1.5`}
              />

              {confirm_pass_type == "password" && (
                <FaEye
                  className="c absolute top-[50%] right-2 translate-y-[-50%]"
                  onClick={handleconfirmPasswordToggle}
                />
              )}
              {confirm_pass_type == "text" && (
                <FaEyeSlash
                  className="cursor-pointer absolute top-[50%] right-2 translate-y-[-50%]"
                  onClick={handleconfirmPasswordToggle}
                />
              )}
            </div>
            {errors.confirm_password && (
              <p role={"alert"} className="error-msg text-sm">
                {errors?.confirm_password
                  ? errors.confirm_password.message
                  : null}
              </p>
            )}
          </div>
        </div>
        <div className="form-field full flex justify-center items-center  items-center">
          <input
            id="register_btn"
            name="register"
            type="submit"
            value="Register"
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
