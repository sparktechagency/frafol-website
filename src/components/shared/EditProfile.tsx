/* eslint-disable @typescript-eslint/no-explicit-any */
import { Form, Upload } from "antd";
import { useEffect, useState } from "react";
import { IoCameraOutline } from "react-icons/io5";
import { AllImages } from "../../../public/assets/AllImages";
import ReusableForm from "../ui/Form/ReuseForm";
import Image, { StaticImageData } from "next/image";
import ReuseInput from "../ui/Form/ReuseInput";
import ReuseButton from "../ui/Button/ReuseButton";

const inputStructure = [
  {
    name: "email",
    type: "email",
    inputType: "email",
    label: "Email",
    placeholder: "Enter your email",
    labelClassName: "!font-medium",
    inputClassName:
      "!py-2 !w-full disabled:!text-base-color disabled:!border-input-color/60 disabled:!bg-input-color/10",
    rules: [{ required: true, message: "Email is required" }],
    disable: true,
  },
  {
    name: "fullName",
    type: "text",
    inputType: "text",
    label: "Full name",
    placeholder: "Enter your full name",
    labelClassName: "!font-medium",
    inputClassName: "!py-2 !w-full",
    rules: [{ required: true, message: "Full name is required" }],
    disable: false,
  },
  {
    name: "phoneNumber",
    type: "text",
    inputType: "tel",
    label: "Phone number",
    placeholder: "Enter your phone number",
    labelClassName: "!font-medium",
    inputClassName: "!py-2 !w-full",
    rules: [{ required: true, message: "Phone number is required" }],
    disable: false,
  },
  {
    name: "streetAddress",
    type: "text",
    inputType: "tel",
    label: "Street Address",
    placeholder: "Enter your Street Address",
    labelClassName: "!font-medium",
    inputClassName: "!py-2 !w-full",
    rules: [{ required: true, message: "Street Address is required" }],
    disable: false,
  },
  {
    name: "town",
    type: "text",
    inputType: "tel",
    label: "Town",
    placeholder: "Enter your Town",
    labelClassName: "!font-medium",
    inputClassName: "!py-2 !w-full",
    rules: [{ required: true, message: "Town is required" }],
    disable: false,
  },
  {
    name: "country",
    type: "text",
    inputType: "text",
    label: "Country",
    placeholder: "Enter your Country",
    labelClassName: "!font-medium",
    inputClassName: "!py-2 !w-full",
    rules: [{ required: true, message: "Country is required" }],
    disable: false,
  },
  {
    name: "ico",
    type: "text",
    inputType: "text",
    label: "IČO",
    placeholder: "Enter your IČO",
    labelClassName: "!font-medium",
    inputClassName: "!py-2 !w-full",
    rules: [{ required: true, message: "IČO is required" }],
    disable: false,
  },
  {
    name: "dic",
    type: "text",
    inputType: "text",
    label: "DIČ",
    placeholder: "Enter your DIČ",
    labelClassName: "!font-medium",
    inputClassName: "!py-2 !w-full",
    rules: [{ required: true, message: "DIČ is required" }],
    disable: false,
  },
  {
    name: "icDph",
    type: "text",
    inputType: "text",
    label: "IČ DPH",
    placeholder: "Enter your IČ DPH",
    labelClassName: "!font-medium",
    inputClassName: "!py-2 !w-full",
    // rules: [{ required: true, message: "IČ DPH is required" }],
    disable: false,
  },
];

const EditProfile = () => {
  const [form] = Form.useForm();

  const [imageUrl, setImageUrl] = useState<StaticImageData | string>(
    AllImages.dummyProfile
  );
  const profileImage = AllImages.dummyProfile;

  useEffect(() => {
    // if (profileData) {
    form.setFieldsValue({
      email: "user@gmail.com",
      fullName: "John Doe",
      phoneNumber: "1234567890",
    });
    setImageUrl(AllImages.dummyProfile); // Set the initial image URL
    // }
  }, [form]);

  const handleImageUpload = (info: any) => {
    if (info.file.status === "removed") {
      setImageUrl(profileImage); // Reset to null or fallback image
    } else {
      const file = info.file.originFileObj || info.file; // Handle the file object safely
      if (file) {
        setImageUrl(URL.createObjectURL(file)); // Set the preview URL of the selected image
      } else {
        console.error("No file selected or file object missing");
      }
    }
  };

  const onFinish = async (values: any) => {
    // const userImage = values.image?.fileList?.[0]?.originFileObj;

    // const data = {
    //   fullName: values.fullName,
    //   phoneNumber: values.phoneNumber,
    // };
    // const formData = new FormData();
    // if (userImage) {
    //   formData.append("profileImage", userImage);
    // }
    // formData.append("data", JSON.stringify(data));

    // await tryCatchWrapper(
    //   updateProfile,
    //   { body: formData },
    //   "Updating Profile..."
    // );
    console.log("Submitted Values:", values);
  };

  // if (isFetching)
  //   return (
  //     <div className="w-full h-[70vh] flex justify-center items-center">
  //       <FadeLoader color="#ed9388" />
  //     </div>
  //   );

  return (
    <div className=" mt-10  rounded-xl">
      <div className=" flex justify-start items-center">
        <ReusableForm
          form={form}
          handleFinish={onFinish}
          className="p-10 w-full lg:w-[70%]"
        >
          <div className="mt-5 flex flex-col justify-center items-start gap-x-4">
            <div className=" relative">
              <Image
                width={1000}
                height={1000}
                className="h-40 w-40 relative rounded-full border border-secondary-color object-contain "
                src={imageUrl}
                alt=""
              />
              <Form.Item name="image">
                <Upload
                  customRequest={(options) => {
                    setTimeout(() => {
                      if (options.onSuccess) {
                        options.onSuccess("ok");
                      }
                    }, 1000);
                  }}
                  onChange={handleImageUpload}
                  maxCount={1}
                  accept="image/*"
                  className=" text-start"
                  style={{
                    width: "100%",
                    height: "100%",
                    opacity: 0,
                    cursor: "pointer",
                  }}
                  listType="picture"
                >
                  <button
                    type="button"
                    style={{
                      zIndex: 1,
                    }}
                    className="bg-base-color/70 p-2 w-fit h-fit !border-none absolute -top-12 left-[115px] rounded-full cursor-pointer shadow-lg"
                  >
                    <IoCameraOutline className="w-6 h-6 text-secondary-color" />
                  </button>
                </Upload>
              </Form.Item>
            </div>
          </div>

          {inputStructure?.map((input, index) => (
            <ReuseInput
              key={index}
              name={input.name}
              Typolevel={5}
              inputType={input.inputType}
              type={input.type}
              label={input.label}
              placeholder={input.placeholder}
              labelClassName={input.labelClassName}
              inputClassName={input.inputClassName}
              rules={input.rules}
              disabled={input.disable}
            />
          ))}

          <ReuseButton
            htmlType="submit"
            variant="secondary"
            className="w-full mt-4"
          >
            Submit
          </ReuseButton>

          <div className=" text-white mt-5"></div>
        </ReusableForm>
      </div>
    </div>
  );
};
export default EditProfile;
