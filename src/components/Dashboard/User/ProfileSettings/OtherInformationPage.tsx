/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import MyAvailabilitySection from "./MyAvailabilitySection";
import ReusableForm from "@/components/ui/Form/ReuseForm";
import ReuseInput from "@/components/ui/Form/ReuseInput";
import ReuseButton from "@/components/ui/Button/ReuseButton";
import { Form } from "antd";

const OtherInformationPage = () => {
  const [form] = Form.useForm();
  const onSubmit = (values: any) => {
    console.log("Submitted Values:", values);
  };
  return (
    <div>
      <MyAvailabilitySection />
      <ReusableForm form={form} handleFinish={onSubmit}>
        <ReuseInput
          inputType="textarea"
          rows={4}
          name="bankName"
          label="Bank Name"
          placeholder="Enter Bank Name"
          rules={[{ required: true, message: "Bank Name is required" }]}
          labelClassName="!font-semibold"
        />
        <ReuseInput
          name="biography"
          label="Biography"
          placeholder="Enter Biography"
          rules={[{ required: true, message: "Biography is required" }]}
          labelClassName="!font-semibold"
        />
        <ReuseInput
          name="hourlyRate"
          label="Hourly Rate"
          placeholder="Enter Hourly Rate"
          rules={[{ required: true, message: "Hourly Rate is required" }]}
          labelClassName="!font-semibold"
        />

        <ReuseButton htmlType="submit" variant="secondary" className="mt-2">
          Update
        </ReuseButton>
      </ReusableForm>
    </div>
  );
};

export default OtherInformationPage;
