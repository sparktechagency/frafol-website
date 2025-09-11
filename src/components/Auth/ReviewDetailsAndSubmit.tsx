/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";
import ReuseButton from "../ui/Button/ReuseButton";
import { useRouter } from "next/navigation";
import ReusableForm from "../ui/Form/ReuseForm";
import { Checkbox, Form } from "antd";
import Cookies from "js-cookie";
import tryCatchWrapper from "@/utils/tryCatchWrapper";
import { registerUser } from "@/services/AuthService";

const ReviewDetailsAndSubmit = () => {
  const router = useRouter();
  const [form] = Form.useForm();

  const storedInformation = Cookies.get("information");

  const parseData = JSON.parse(storedInformation || "{}");

  const details = [
    {
      label: "Name",
      value: parseData.name || "",
    },
    {
      label: "Email",
      value: parseData.email || "",
    },
    {
      label: "Role",
      value: parseData.role || "",
    },
    {
      label: "Location",
      value: `${parseData.address || ""}, ${parseData.town || ""}, ${
        parseData.country || ""
      }`,
    },
    {
      label: "Specializations",
      value:
        parseData?.role === "photographer"
          ? parseData.photographerSpecializations.join(", ")
          : parseData?.role === "videographer"
          ? parseData.videographerSpecializations.join(", ")
          : parseData?.role === "both" &&
            [
              ...parseData.photographerSpecializations,
              ...parseData.videographerSpecializations,
            ].join(", "),
    },
  ];

  const onFinish = async () => {
    try {
      // Validate all fields
      const values = await form.validateFields();

      const data = { ...parseData, ...values };

      const res = await tryCatchWrapper(
        registerUser,
        { body: data },
        "Creating account...",
        "OTP sent To your email!"
      );
      if (res?.success) {
        Cookies.remove("information");
        form.resetFields();
        router.push("/sign-up/professional/otp-verify");
      }
    } catch (error) {
      // If validation fails, error will be caught here
      console.log("Form validation failed:", error);
    }
  };

  return (
    <div className="flex flex-col justify-center gap-3 h-full w-full sm:w-3/4 mx-auto">
      <div className="mb-3">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-secondary-color mb-5">
          Review & Submit
        </h2>
        <p className="text-base sm:text-lg lg:text-xl text-base-color">
          Review your information before creating your account
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
        {details.map((detail, index) => (
          <div
            key={index}
            className={`flex flex-col justify-start items-start gap-1 ${
              index === 4 ? "sm:col-span-2" : ""
            }`}
          >
            <p className="text-xs sm:text-sm lg:text-base font-semibold">
              {detail.label}
            </p>
            <p className="text-base sm:text-lg lg:text-xl font-semibold text-secondary-color">
              {detail.value}
            </p>
          </div>
        ))}
      </div>

      <ReusableForm handleFinish={onFinish} form={form}>
        <Form.Item
          name="acceptTerms"
          valuePropName="checked"
          rules={[
            {
              validator: (_, value) =>
                value
                  ? Promise.resolve()
                  : Promise.reject(
                      new Error("Should accept with terms and conditions")
                    ),
            },
          ]}
        >
          <Checkbox
          // onChange={(e) => handleCheckboxChange(e, "acceptTerms")}
          >
            <div>
              <p className="text-sm sm:text-base lg:text-lg font-semibold">
                Agree to terms and conditions
              </p>
              <p className="text-xs sm:text-sm lg:text-base">
                By creating an account, you agree to our{" "}
                <span className="text-secondary-color underline">
                  Terms of Service
                </span>{" "}
                and{" "}
                <span className="text-secondary-color underline">
                  Privacy Policy.
                </span>
              </p>
            </div>
          </Checkbox>
        </Form.Item>

        {/* Agree to rámcová zmluva contract Checkbox */}
        <Form.Item
          name="ramcuvaAgree"
          valuePropName="checked"
          rules={[
            {
              validator: (_, value) =>
                value
                  ? Promise.resolve()
                  : Promise.reject(
                      new Error("Should accept with rámcová zmluva contract")
                    ),
            },
          ]}
        >
          <Checkbox
          // onChange={(e) => handleCheckboxChange(e, "ramcuvaAgree")}
          >
            <div>
              <p className="text-sm sm:text-base lg:text-lg font-semibold">
                Agree to{" "}
                <span className="text-secondary-color underline">
                  rámcová zmluva
                </span>{" "}
                contract
              </p>
            </div>
          </Checkbox>
        </Form.Item>

        {/* Subscribe to newsletter Checkbox */}
        <Form.Item name="newsLetterSub" valuePropName="checked">
          <Checkbox>
            <div>
              <p className="text-sm sm:text-base lg:text-lg font-semibold">
                Subscribe to newsletter (optional)
              </p>
            </div>
          </Checkbox>
        </Form.Item>

        <div className="w-full rounded-lg bg-background-color p-4 text-secondary-color">
          <p className="flex items-center gap-2 text-sm sm:text-base lg:text-lg">
            <span className="h-3 w-3 rounded-full bg-secondary-color"></span>
            <span className=" font-semibold">
              Why do you need to agree to ramcova zmluva?
            </span>
          </p>
          <p className="text-xs sm:text-sm lg:text-base mt-1">
            Ramcova zmluva allows us to work together, handle payments, and
            issue invoices properly. It&apos;s just a legal agreement to use the
            platform as intended.
          </p>
        </div>

        <div className="flex justify-end items-end w-full mt-5">
          <ReuseButton
            variant="secondary"
            className="!w-fit !text-[10px] sm:!text-xs lg:!text-sm !px-5 !py-2.5"
            htmlType="submit"
          >
            Create Account
          </ReuseButton>
        </div>
      </ReusableForm>
    </div>
  );
};

export default ReviewDetailsAndSubmit;
