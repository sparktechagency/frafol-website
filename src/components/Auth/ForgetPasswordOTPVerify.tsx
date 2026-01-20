"use client";
import { Form } from "antd";
import { useState } from "react";
import OTPInput from "react-otp-input";
import Container from "../ui/Container";
import { useRouter } from "next/navigation";
import ReuseButton from "../ui/Button/ReuseButton";
import { IoMdMail } from "react-icons/io";
import tryCatchWrapper from "@/utils/tryCatchWrapper";
import { forgetPasswordOtp, resendOtp } from "@/services/AuthService";

const ForgetPasswordOTPVerify = () => {
  const router = useRouter();
  const [otp, setOtp] = useState("");

  const handleOTPSubmit = async () => {
    const res = await tryCatchWrapper(
      forgetPasswordOtp,
      { body: { otp } },
      {
        toastLoadingMessage: "Verifying...",
        toastSuccessMessage: "Verified successfully!",
      }
    );
    if (res?.success) {
      router.push("/update-password");
    }
  };

  const handleResendOtp = async () => {
    await tryCatchWrapper(
      resendOtp,
      { body: { purpose: "forget-password" } },
      {
        toastLoadingMessage: "wait a moment...",
        toastSuccessMessage: "OTP sent successfully!",
      }
    );
  };
  return (
    <div className="text-base-color">
      <Container>
        <div className="min-h-screen flex justify-center items-center text-center">
          <div className="w-full md:w-[80%] lg:w-[60%] xl:w-[40%] mx-auto bg-highlight-color p-6 rounded-2xl">
            <div className="mb-8">
              <div className="w-fit h-fit bg-[#FFF6EC] rounded-full p-4 mx-auto  mb-4">
                <IoMdMail className="size-10 text-secondary-color font-bold mx-auto" />
              </div>
              <h1 className="text-2xl sm:text-3xl font-semibold text-base-color mb-5">
                Verify Your Email
              </h1>
              <p className="text-lg sm:text-xl mb-2 text-base-color">
                We sent a verification link to your <span> </span> email
              </p>
            </div>

            <Form layout="vertical" className="bg-transparent w-full">
              <Form.Item className="">
                <div className="flex justify-center items-center">
                  <OTPInput
                    inputStyle="!w-[30px] h-[45px] md:!w-[70px] md:!h-[80px] text-[20px] sm:text-[30px] !bg-[#FFF6EC] border !border-[#FFF6EC]
                      rounded-lg mr-[10px] sm:mr-[20px] !text-secondary-color focus:!outline-secondary-color !select-none"
                    value={otp}
                    onChange={setOtp}
                    numInputs={4}
                    renderInput={(props) => <input {...props} required />}
                  />
                </div>
              </Form.Item>

              <ReuseButton
                htmlType="submit"
                variant="secondary"
                onClick={handleOTPSubmit}
              >
                Verify OTP
              </ReuseButton>
            </Form>
            <div className="flex justify-center gap-2 py-1 mt-5">
              <p>Didn’t receive code?</p>
              <p
                onClick={handleResendOtp}
                className="!text-secondary-color !underline font-semibold cursor-pointer"
              >
                Click to resend
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
export default ForgetPasswordOTPVerify;
