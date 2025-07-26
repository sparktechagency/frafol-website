"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import ReusableForm from "../ui/Form/ReuseForm";
import { Checkbox, Form } from "antd";
import ReuseButton from "../ui/Button/ReuseButton";
import ReuseInput from "../ui/Form/ReuseInput";
import type { Rule } from "antd/es/form";

const inputFields: {
  name: string;
  label: string;
  placeholder: string;
  required?: boolean;
  rules?: Rule[];
  inputType?: "normal" | "password" | "textarea";
}[] = [
  {
    name: "name",
    label: "Name",
    placeholder: "Placeholder",
    required: true,
    rules: [{ required: true, message: "Name is required" }] as Rule[],
  },
  {
    name: "street",
    label: "Street",
    placeholder: "Placeholder",
    required: true,
    rules: [{ required: true, message: "Street is required" }] as Rule[],
  },
  {
    name: "postCode",
    label: "Post code",
    placeholder: "Placeholder",
    required: true,
    rules: [{ required: true, message: "Post code is required" }] as Rule[],
  },
  {
    name: "town",
    label: "Town",
    placeholder: "Placeholder",
    required: true,
    rules: [{ required: true, message: "Town is required" }] as Rule[],
  },
  {
    name: "mobileNumber",
    label: "Mobile Number",
    placeholder: "Placeholder",
    required: true,
    rules: [{ required: true, message: "Mobile Number is required" }] as Rule[],
  },
  {
    name: "email",
    label: "Email address",
    placeholder: "Placeholder",
    required: true,
    rules: [
      { required: true, message: "Email is required" },
      { type: "email", message: "Enter a valid email" },
    ] as Rule[],
  },
];
const otherFields: {
  name: string;
  label: string;
  placeholder: string;
  required?: boolean;
  rules?: Rule[];
  inputType?: "normal" | "password" | "textarea";
}[] = [
  {
    name: "ico",
    label: "IČO (Optional)",
    placeholder: "Placeholder",
  },
  {
    name: "dic",
    label: "DIČ (Optional)",
    placeholder: "Placeholder",
  },
  {
    name: "ic_dhp",
    label: "IČ DHP (Optional)",
    placeholder: "Placeholder",
  },
  {
    name: "companyAddress",
    label: "Company Address (Optional)",
    placeholder: "Placeholder",
  },
  {
    name: "deliveryNote",
    label: "Delivery Note (Optional)",
    placeholder: "Placeholder",
    inputType: "textarea",
  },
];

const CartDeliveryOption = () => {
  const [form] = Form.useForm();

  const handleSubmit = (value: any) => {
    console.log(value);
  };
  return (
    <ReusableForm handleFinish={handleSubmit} form={form}>
      <div className="">
        {inputFields.map((field) => (
          <ReuseInput
            key={field.name}
            name={field.name}
            label={field.label}
            placeholder={field.placeholder}
            rules={field.rules}
            inputType={field.inputType}
          />
        ))}
        <div className="mb-2">
          <Checkbox>I am login as company</Checkbox>
        </div>
        {otherFields.map((field) => (
          <ReuseInput
            key={field.name}
            name={field.name}
            label={field.label}
            placeholder={field.placeholder}
            rules={field.rules}
            inputType={field.inputType}
          />
        ))}
        <div className="flex justify-end">
          <ReuseButton
            htmlType="submit"
            variant="secondary"
            className="w-full md:w-auto !text-base !py-5 !px-5"
          >
            Next Step
          </ReuseButton>
        </div>
      </div>
    </ReusableForm>
  );
};

export default CartDeliveryOption;
