"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import { CountryDropdown } from "react-country-region-selector";

interface FormInput {
  name: string;
  email: string;
  mobile_number: string;
  country?: string;
  message?: string;
}

export default function EnquireNow() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm<FormInput>();

  const onSubmit: SubmitHandler<FormInput> = (data) => {
    console.log(data);
  };

  const [country, setCountry] = useState("");

  const onChangeCountry = (value: any) => {
    setCountry(value);
    if (!value) {
      setCountry("");
    }
  };

  return (
    <div className="enquire-section pb-20 py-10 w-full">
      <div className="main-container">
        <div className="sub-heading text-center heading font-bold mb-10">
          Enquire Now
        </div>

        <div className="form-container">
          <form
            className="w-full flex gap-[20px] flex-wrap"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="form-field items-center">
              <input
                {...register("name", {
                  required: "Name is required.",
                })}
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                className=" block w-full text-gray-900 border border-[#cccccc] placeholder:text-gray-400 p-1.5"
              />

              {errors.name && (
                <p role={"alert"} className="text-[##f2df79] error-msg text-sm">
                  {errors?.name ? errors.name.message : null}
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
                className=" block w-full text-gray-900 border border-[#cccccc] placeholder:text-gray-400 p-1.5"
              />

              {errors.email && (
                <p role={"alert"} className="text-[##f2df79] error-msg text-sm">
                  {errors?.email ? errors.email.message : null}
                </p>
              )}
            </div>

            <div className="form-field items-center">
              <input
                {...register("mobile_number", {
                  required: "Mobile No. is required.",
                })}
                type="text"
                id="mobile_number"
                name="mobile_number"
                placeholder="Mobile No."
                className=" block w-full text-gray-900 border border-[#cccccc] placeholder:text-gray-400 p-1.5"
              />

              {errors.mobile_number && (
                <p role={"alert"} className="text-[##f2df79] error-msg text-sm">
                  {errors?.mobile_number ? errors.mobile_number.message : null}
                </p>
              )}
            </div>
            <div className="form-field items-center">
              <CountryDropdown
                className="w-full"
                value={country}
                onChange={onChangeCountry}
              />
              {errors.country && (
                <p role={"alert"} className="text-[##f2df79] error-msg text-sm">
                  {errors?.country ? errors.country.message : null}
                </p>
              )}
            </div>
            <div className="form-field full items-center">
              <div className="field flex-[0_0_100%]">
                <textarea
                  {...register("message")}
                  name="message"
                  className="w-full"
                  placeholder="Message"
                ></textarea>
              </div>
            </div>

            <div className="form-field full flex justify-center items-center  items-center">
              <input
                id="submit_btn"
                name="enquiry_submit"
                type="submit"
                value="Submit"
                className="main-btn px-5 py-2 bg-[#F37406] rounded-sm text-white hover:bg-[#fff] hover:text-[#F37406]"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
