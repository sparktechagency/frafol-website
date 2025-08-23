/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";
import { IoCamera } from "react-icons/io5";
import { LuUser } from "react-icons/lu";
import ReuseButton from "../ui/Button/ReuseButton";
import ReusableForm from "../ui/Form/ReuseForm";
import { Form } from "antd";
import ReuseSelect from "../ui/Form/ReuseSelect";
import { useRouter } from "next/navigation";

const ChooseRole = () => {
  const router = useRouter();
  const [form] = Form.useForm(); // Corrected initialization of the form

  const onFinish = (values: any) => {
    console.log("Form values:", values);
    form.resetFields();
    router.push("/sign-up/professional/personal-information");
  };

  return (
    <div className="flex flex-col justify-center gap-5 h-full w-full md:w-[60%] mx-auto">
      <div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-secondary-color mb-3">
          Choose Your Role
        </h2>
        <p className="text-base sm:text-lg lg:text-xl text-base-color">
          Select your professional role to continue
        </p>
      </div>

      <ReusableForm handleFinish={onFinish} form={form}>
        <ReuseSelect
          name="role"
          label="Professional Role"
          placeholder="Select your role"
          labelClassName="!text-secondary-color !font-semibold"
          rules={[{ required: true, message: "Please select your role" }]}
          options={[
            {
              value: "photographer",
              label: "Photographer",
              icon: <LuUser />,
            },
            {
              value: "videographer",
              label: "Videographer",
              icon: <IoCamera />,
            },
            {
              value: "both",
              label: "Both",
              icon: <IoCamera />,
            },
          ]}
        />
        <div className="flex justify-end items-end w-full mt-8">
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

export default ChooseRole;
