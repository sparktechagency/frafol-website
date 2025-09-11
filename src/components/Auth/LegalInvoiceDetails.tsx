"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import ReusableForm from "../ui/Form/ReuseForm";
import ReuseInput from "../ui/Form/ReuseInput";
import ReuseButton from "../ui/Button/ReuseButton";
import { Form, Typography } from "antd";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

const BusinessInputStructure = [
  {
    name: "companyName",
    type: "text",
    inputType: "normal",
    label: "Company Name",
    placeholder: "Enter Company Name Name",
    labelClassName: "!font-semibold !text-secondary-color",
    rules: [{ required: true, message: "Company Name is required" }],
  },
  {
    name: "ico",
    type: "text",
    inputType: "normal",
    label: "IČO",
    placeholder: "Enter IČO Name",
    labelClassName: "!font-semibold !text-secondary-color",
    rules: [{ required: true, message: "IČO is required" }],
  },
  {
    name: "dic",
    type: "text",
    inputType: "normal",
    label: "DIČ",
    placeholder: "Enter DIČ Name",
    labelClassName: "!font-semibold !text-secondary-color",
    rules: [{ required: true, message: "DIČ is required" }],
  },
  {
    name: "ic_dph",
    type: "text",
    inputType: "normal",
    label: "IČ DPH",
    placeholder: "Enter IČ DPH Name",
    labelClassName: "!font-semibold !text-secondary-color",
    rules: [{ required: true, message: "IČ DPH is required" }],
  },
];
const AddressInputStructure = [
  {
    name: "address",
    type: "text",
    inputType: "normal",
    label: "Street Address",
    placeholder: "Enter Street Address Name",
    labelClassName: "!font-semibold !text-secondary-color",
    rules: [{ required: true, message: "Street Address is required" }],
  },
  {
    name: "town",
    type: "text",
    inputType: "normal",
    label: "Town",
    placeholder: "Enter Town Name",
    labelClassName: "!font-semibold !text-secondary-color",
    rules: [{ required: true, message: "Town is required" }],
  },
  {
    name: "country",
    type: "text",
    inputType: "normal",
    label: "Country",
    placeholder: "Enter Country Name",
    labelClassName: "!font-semibold !text-secondary-color",
    rules: [{ required: true, message: "Country is required" }],
  },
];

const LegalInvoiceDetails = () => {
  const router = useRouter();
  const [form] = Form.useForm();

  const storedInformation = Cookies.get("information");

  const parseData = JSON.parse(storedInformation || "{}");

  form.setFieldsValue({
    companyName: parseData.companyName,
    ico: parseData.ico,
    dic: parseData.dic,
    ic_dph: parseData.ic_dph,
    address: parseData.address,
    town: parseData.town,
    country: parseData.country,
  });

  const onFinish = (values: any) => {
    Cookies.set("information", JSON.stringify({ ...parseData, ...values }), {
      expires: 1,
    });
    form.resetFields();
    router.push("/sign-up/professional/review-details");
  };
  return (
    <div className=" flex flex-col justify-center gap-3 h-full w-full sm:w-3/4 mx-auto mt-10">
      <div className="mb-3">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-secondary-color mb-5">
          Legal & Invoice Details
        </h2>
        <p className="text-base sm:text-lg lg:text-xl text-base-color">
          Please provide your details for seamless invoicing. This information
          is required for future transactions and will only appear on your final
          invoice.
        </p>
      </div>
      <ReusableForm handleFinish={onFinish} form={form}>
        <Typography.Title
          level={3}
          className="!text-secondary-color !font-semibold"
        >
          Business Information
        </Typography.Title>
        {BusinessInputStructure.map((input, index) => (
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
        <Typography.Title
          level={3}
          className="!text-secondary-color !font-semibold !mt-5"
        >
          Address Information{" "}
        </Typography.Title>
        {AddressInputStructure.map((input, index) => (
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
        <div className="flex justify-end items-end w-full mt-5 mb-10">
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

export default LegalInvoiceDetails;
