"use client";
import { Checkbox, Form } from "antd";
import Link from "next/link";
import Container from "../ui/Container";
import { AllImages } from "../../../public/assets/AllImages";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { loginUser } from "@/services/AuthService";
import tryCatchWrapper from "@/utils/tryCatchWrapper";
import { IoMdMail } from "react-icons/io";
import { RiLockPasswordFill } from "react-icons/ri";
import ReuseInput from "../ui/Form/ReuseInput";
import ReuseButton from "../ui/Button/ReuseButton";

interface SignInValues {
  email: string;
  password: string;
}

const inputStructure = [
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
    name: "password",
    type: "password",
    inputType: "password",
    label: "Password",
    placeholder: "Enter your password",
    prefix: <RiLockPasswordFill className="mr-1 !text-secondary-color" />,
    labelClassName: "!font-semibold !text-secondary-color",
    rules: [{ required: true, message: "Password is required" }],
  },
];

const SignIn = () => {
  const router = useRouter();
  const onFinish = async (values: SignInValues) => {
    // try {
    //   const res = await loginUser(values);
    //   // setIsLoading(true);
    //   if (res?.success) {
    //     toast.success(res?.message);
    //     // if (redirect) {
    //     //   router.push(redirect);
    //     // } else {
    //     //   router.push("/");
    //     // }
    //   } else {
    //     toast.error(res?.message);
    //   }
    // } catch (err: any) {
    //   toast.error(err);
    // }
    const res = await tryCatchWrapper(
      loginUser,
      { body: values },
      {
        toastLoadingMessage: "Signing in...",
        toastSuccessMessage: "Signed in successfully!",
      }
    );
    if (res?.success) {
      router.push("/");
    }
  };
  return (
    <div className="text-base-color">
      <Container>
        <div></div>
        <div className=" min-h-screen flex justify-center items-center">
          <div className="w-full md:w-[80%] lg:w-[60%] xl:w-[40%] mx-auto">
            <Image
              src={AllImages.logo}
              width={500}
              height={500}
              className="w-80 mx-auto"
              alt="logo"
            />
            <div className="flex flex-col justify-center items-center">
              <div className="text-center mt-5 mb-8">
                <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-secondary-color">
                  Sign In
                </h1>
                <p className="text-lg sm:text-xl mb-2 text-[#667085]">
                  Welcome back! Please enter your details.
                </p>
              </div>
            </div>

            <Form
              layout="vertical"
              className="bg-transparent w-full"
              onFinish={onFinish}
            >
              {inputStructure.map((input, index) => (
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

              <div className="flex justify-between items-center mt-10">
                <Checkbox className="">Remember me</Checkbox>
                <Link
                  href="/forgot-password"
                  className="!text-secondary-color !underline font-bold"
                >
                  Forgot Password?
                </Link>
              </div>

              <Form.Item>
                <ReuseButton
                  htmlType="submit"
                  variant="secondary"
                  className="mt-5"
                >
                  Sign In
                </ReuseButton>
              </Form.Item>
            </Form>

            <p className="text-center text-ellipsis mt-10">
              Don’t have an account?
              <span>
                <Link
                  href="/join"
                  className="text-secondary-color font-semibold underline ml-2"
                >
                  Sign Up
                </Link>
              </span>{" "}
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};
export default SignIn;
