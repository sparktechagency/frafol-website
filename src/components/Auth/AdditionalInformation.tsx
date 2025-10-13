"use client";
import React from "react";
import ReusableForm from "../ui/Form/ReuseForm";
import ReuseInput from "../ui/Form/ReuseInput";
import { useRouter } from "next/navigation";
import { Form } from "antd";
import ReuseButton from "../ui/Button/ReuseButton";
import Cookies from "js-cookie";

const inputStructure = [
  {
    name: "about",
    type: "text",
    inputType: "textarea",
    label: "About You / Biography",
    placeholder: "Enter About You / Biography",
    labelClassName: "!font-semibold !text-secondary-color",
    rules: [{ required: true, message: "Bio is required" }],
  },
  {
    name: "minHourlyRate",
    type: "number",
    inputType: "number",
    label: "Min Hourly Rate",
    placeholder: "Enter Min Hourly Rate",
    labelClassName: "!font-semibold !text-secondary-color",
    rules: [{ required: true, message: "Min Hourly Rate is required" }],
  },
  {
    name: "maxHourlyRate",
    type: "number",
    inputType: "number",
    label: "Max Hourly Rate",
    placeholder: "Enter Max Hourly Rate",
    labelClassName: "!font-semibold !text-secondary-color",
    rules: [{ required: true, message: "Max Hourly Rate is required" }],
  },
];

const AdditionalInformation = () => {
  const router = useRouter();
  const [form] = Form.useForm();

  const storedInformation = Cookies.get("information");

  const parseData = JSON.parse(storedInformation || "{}");

  if (storedInformation) {
    form.setFieldsValue({
      about: parseData.about,
      minHourlyRate: parseData.minHourlyRate,
      maxHourlyRate: parseData.maxHourlyRate,
    });
  }

  const onFinish = (values: {
    about: string;
    minHourlyRate: number;
    maxHourlyRate: number;
  }) => {
    const data = {
      ...parseData,
      about: values.about,
      minHourlyRate: Number(values.minHourlyRate),
      maxHourlyRate: Number(values.maxHourlyRate),
    };
    Cookies.set("information", JSON.stringify(data), {
      expires: 1,
    });
    form.resetFields();
    router.push("/sign-up/professional/legal-invoice");
  };
  return (
    <div className=" flex flex-col justify-center gap-3 h-full w-full sm:w-3/4 mx-auto">
      <div className="mb-3">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-secondary-color mb-5">
          Additional Information
        </h2>
        <p className="text-base sm:text-lg lg:text-xl text-base-color">
          Complete your professional profile
        </p>
      </div>
      <ReusableForm handleFinish={onFinish} form={form}>
        {inputStructure.map((input, index) => (
          <ReuseInput
            key={index}
            name={input.name}
            Typolevel={5}
            inputType={input.inputType}
            type={input.type}
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
            Continue
          </ReuseButton>
        </div>
      </ReusableForm>
    </div>
  );
};

export default AdditionalInformation;
