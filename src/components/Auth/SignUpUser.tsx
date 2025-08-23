/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { useRouter } from "next/navigation";
import Container from "../ui/Container";
import Image from "next/image";
import { Button, Checkbox, Form, FormInstance, Input, Typography } from "antd";
import Link from "next/link";
import { allIcons, AllImages } from "../../../public/assets/AllImages";
import ReuseButton from "../ui/Button/ReuseButton";
import { RiLockPasswordFill } from "react-icons/ri";
import ReusableForm from "../ui/Form/ReuseForm";
import ReuseInput from "../ui/Form/ReuseInput";
import { FaAddressCard, FaUser } from "react-icons/fa6";
import { HiLocationMarker } from "react-icons/hi";
import { IoMdMail } from "react-icons/io";
import { useState } from "react";

const userInputStructure = [
  {
    name: "name",
    type: "text",
    inputType: "normal",
    label: " Name",
    placeholder: "Enter Full Name",
    labelClassName: "!font-semibold !text-secondary-color",
    prefix: <FaUser className="mr-1 !text-secondary-color" />,
    rules: [{ required: true, message: "Name is required" }],
  },
  {
    name: "streetAddress",
    type: "text",
    inputType: "normal",
    label: "Street Address",
    placeholder: "Enter Street Address",
    labelClassName: "!font-semibold !text-secondary-color",
    prefix: <HiLocationMarker className="mr-1 !text-secondary-color" />,
    rules: [{ required: true, message: "Street Address is required" }],
  },
  {
    name: "town",
    type: "text",
    inputType: "normal",
    label: "Town",
    placeholder: "Enter Town Name",
    labelClassName: "!font-semibold !text-secondary-color",
    prefix: <HiLocationMarker className="mr-1 !text-secondary-color" />,
    rules: [{ required: true, message: "Town is required" }],
  },
  {
    name: "country",
    type: "text",
    inputType: "normal",
    label: "Country",
    placeholder: "Enter Country Name",
    labelClassName: "!font-bold !text-secondary-color",
    prefix: <HiLocationMarker className="mr-1 !text-secondary-color" />,
    rules: [{ required: true, message: "Country is required" }],
  },
  {
    name: "email",
    type: "email",
    inputType: "normal",
    label: "Email",
    placeholder: "Enter Email Name",
    labelClassName: "!font-bold !text-secondary-color",
    prefix: <IoMdMail className="mr-1 !text-secondary-color" />,
    rules: [{ required: true, message: "Email is required" }],
  },
  {
    name: "password",
    type: "password",
    inputType: "password",
    label: "Password",
    placeholder: "Enter your password",
    prefix: <RiLockPasswordFill className="mr-1 !text-secondary-color" />,
    labelClassName: "!font-bold !text-secondary-color",
    rules: [{ required: true, message: "Password is required" }],
  },
  {
    name: "confirmPassword",
    type: "password",
    inputType: "password",
    label: "Confirm Password",
    placeholder: "Confirm your password",
    prefix: <RiLockPasswordFill className="mr-1 !text-secondary-color" />,
    labelClassName: "!font-bold !text-secondary-color",
    rules: [
      { required: true, message: "Confirm Password is required" },
      ({
        getFieldValue,
      }: {
        getFieldValue: FormInstance["getFieldValue"];
      }) => ({
        validator(_: unknown, value: string) {
          if (!value || getFieldValue("password") === value) {
            return Promise.resolve();
          }
          return Promise.reject(new Error("Password does not match!"));
        },
      }),
    ],
  },
];
const companyInputStructure = [
  {
    name: "name",
    type: "text",
    inputType: "normal",
    label: " Company Name",
    placeholder: "Enter Full Company Name",
    labelClassName: "!font-semibold !text-secondary-color",
    prefix: <FaUser className="mr-1 !text-secondary-color" />,
    rules: [{ required: true, message: "Company Name is required" }],
  },
  {
    name: "email",
    type: "email",
    inputType: "normal",
    label: "Email",
    placeholder: "Enter Email Name",
    labelClassName: "!font-semibold !text-secondary-color",
    prefix: <IoMdMail className="mr-1 !text-secondary-color" />,
    rules: [{ required: true, message: "Email is required" }],
  },
  {
    name: "streetAddress",
    type: "text",
    inputType: "normal",
    label: "Street Address",
    placeholder: "Enter Street Address",
    labelClassName: "!font-semibold !text-secondary-color",
    prefix: <HiLocationMarker className="mr-1 !text-secondary-color" />,
    rules: [{ required: true, message: "Street Address is required" }],
  },
  {
    name: "town",
    type: "text",
    inputType: "normal",
    label: "Town",
    placeholder: "Enter Town Name",
    labelClassName: "!font-semibold !text-secondary-color",
    prefix: <HiLocationMarker className="mr-1 !text-secondary-color" />,
    rules: [{ required: true, message: "Town is required" }],
  },
  {
    name: "country",
    type: "text",
    inputType: "normal",
    label: "Country",
    placeholder: "Enter Country Name",
    labelClassName: "!font-semibold !text-secondary-color",
    prefix: <HiLocationMarker className="mr-1 !text-secondary-color" />,
    rules: [{ required: true, message: "Country is required" }],
  },
  {
    name: "ico",
    type: "text",
    inputType: "normal",
    label: "IČO",
    placeholder: "Enter IČO",
    labelClassName: "!font-semibold !text-secondary-color",
    prefix: <FaAddressCard className="mr-1 !text-secondary-color" />,
    rules: [{ required: true, message: "IČO is required" }],
  },
  {
    name: "dic",
    type: "text",
    inputType: "normal",
    label: "DIČ",
    placeholder: "Enter DIČ",
    labelClassName: "!font-semibold !text-secondary-color",
    prefix: <FaAddressCard className="mr-1 !text-secondary-color" />,
    rules: [{ required: true, message: "DIČ is required" }],
  },
  {
    name: "icdph",
    type: "text",
    inputType: "normal",
    label: "IČ DPH",
    placeholder: "Enter IČ DPH",
    labelClassName: "!font-semibold !text-secondary-color",
    prefix: <FaAddressCard className="mr-1 !text-secondary-color" />,
    rules: [{ required: true, message: "IČ DPH is required" }],
  },

  {
    name: "password",
    type: "password",
    inputType: "password",
    label: "Password",
    placeholder: "Enter your password",
    prefix: <RiLockPasswordFill className="mr-1 !text-secondary-color" />,
    labelClassName: "!font-semibold !text-secondary-color",
    rules: [{ required: true, message: "Password is required" }],
  },
  {
    name: "confirmPassword",
    type: "password",
    inputType: "password",
    label: "Confirm Password",
    placeholder: "Confirm your password",
    prefix: <RiLockPasswordFill className="mr-1 !text-secondary-color" />,
    labelClassName: "!font-semibold !text-secondary-color",
    rules: [
      { required: true, message: "Confirm Password is required" },
      ({
        getFieldValue,
      }: {
        getFieldValue: FormInstance["getFieldValue"];
      }) => ({
        validator(_: unknown, value: string) {
          if (!value || getFieldValue("password") === value) {
            return Promise.resolve();
          }
          return Promise.reject(new Error("Password does not match!"));
        },
      }),
    ],
  },
];

const SignUpUser = () => {
  const router = useRouter();
  const [form] = Form.useForm();

  const [type, setType] = useState<"user" | "company">("user");

  const onFinish = (values: any) => {
    console.log("Received values of login form:", values);
    form.resetFields();
    router.push("/sign-up/user/otp-verify");
  };
  return (
    <div className=" flex flex-col gap-3 h-full w-full sm:w-3/4 mx-auto">
      <div className="mb-3">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-secondary-color mb-5">
          Sign Up
        </h2>
        <p className="text-base sm:text-lg lg:text-xl text-base-color">
          Tell us about yourself
        </p>
      </div>
      <ReusableForm handleFinish={onFinish} form={form}>
        <div className="mb-5">
          <Checkbox
            className="!text-lg !font-semibold"
            onChange={(e) => {
              if (e.target.checked) {
                setType("company");
              } else {
                setType("user");
              }
            }}
          >
            Register as a company
          </Checkbox>
        </div>
        {type !== "company"
          ? userInputStructure.map((input, index) => (
              <ReuseInput
                key={index}
                name={input.name}
                Typolevel={5}
                inputType={input.inputType}
                type={input.type}
                prefix={input.prefix}
                label={input.label}
                placeholder={input.placeholder}
                labelClassName={input.labelClassName}
                inputClassName="!py-2.5"
                rules={input.rules}
              />
            ))
          : companyInputStructure.map((input, index) => (
              <ReuseInput
                key={index}
                name={input.name}
                Typolevel={5}
                inputType={input.inputType}
                type={input.type}
                prefix={input.prefix}
                label={input.label}
                placeholder={input.placeholder}
                labelClassName={input.labelClassName}
                inputClassName="!py-2.5"
                rules={input.rules}
              />
            ))}

        <div className="flex justify-end items-end w-full mt-5">
          <ReuseButton
            htmlType="submit"
            variant="secondary"
            className="!w-fit !text-[10px] sm:!text-xs lg:!text-sm !px-5 !py-2.5"
          >
            Create account
          </ReuseButton>
        </div>
      </ReusableForm>

      <div className="flex justify-center items-center gap-2.5 !py-10">
        <p>Already have an account?</p>
        <Link href="/" className="text-secondary-color font-bold">
          Sign In
        </Link>
      </div>
    </div>
  );
};
export default SignUpUser;
