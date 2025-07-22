/* eslint-disable @typescript-eslint/no-explicit-any */
import ReuseButton from "@/components/ui/Button/ReuseButton";
import ReusableForm from "@/components/ui/Form/ReuseForm";
import ReuseInput from "@/components/ui/Form/ReuseInput";
import { Form } from "antd";
import React from "react";

const AccountCredentialPage = () => {
  const [form] = Form.useForm();

  const onSubmit = (values: any) => {
    console.log("Submitted Values:", values);
  };
  return (
    <div className="p-5 text-base-color">
      <h1 className="text-lg sm:text-xl lg:text-2xl font-bold mb-5">
        Account Credentials
      </h1>

      <ReusableForm form={form} handleFinish={onSubmit}>
        <ReuseInput
          name="bankName"
          label="Bank Name"
          placeholder="Enter Bank Name"
          rules={[{ required: true, message: "Bank Name is required" }]}
          labelClassName="!font-semibold"
        />
        <ReuseInput
          name="accountNumber"
          label="Account Number"
          placeholder="Enter Account Number"
          rules={[{ required: true, message: "Account Number is required" }]}
          labelClassName="!font-semibold"
        />
        <ReuseInput
          name="routingNumber"
          label="Routing Number"
          placeholder="Enter Routing Number"
          rules={[{ required: true, message: "Routing Number is required" }]}
          labelClassName="!font-semibold"
        />

        <ReuseButton htmlType="submit" variant="secondary" className="mt-2">
          Update
        </ReuseButton>
      </ReusableForm>
    </div>
  );
};

export default AccountCredentialPage;
