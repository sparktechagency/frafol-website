/* eslint-disable @typescript-eslint/no-explicit-any */
import { Form, Upload } from "antd";
import { useEffect, useState } from "react";
import { IoCameraOutline } from "react-icons/io5";
import { AllImages } from "../../../public/assets/AllImages";
import ReusableForm from "../ui/Form/ReuseForm";
import Image from "next/image";
import ReuseInput from "../ui/Form/ReuseInput";
import ReuseButton from "../ui/Button/ReuseButton";
import { IProfile } from "@/types";
import { getServerUrl } from "@/helpers/config/envConfig";
import { FaAddressCard, FaUser } from "react-icons/fa6";
import { HiLocationMarker } from "react-icons/hi";
import { IoMdMail } from "react-icons/io";
import tryCatchWrapper from "@/utils/tryCatchWrapper";
import { updateProfile } from "@/services/ProfileService/ProfileServiceApi";

const userInputStructure = [
  {
    name: "name",
    type: "text",
    inputType: "text",
    label: "Full name",
    placeholder: "Enter your full name",
    labelClassName: "!font-medium  !text-secondary-color",
    inputClassName: "!py-2 !w-full",
    rules: [{ required: true, message: "Full name is required" }],
    disable: false,
  },
  {
    name: "email",
    type: "email",
    inputType: "email",
    label: "Email",
    placeholder: "Enter your email",
    labelClassName: "!font-medium  !text-secondary-color",
    inputClassName:
      "!py-2 !w-full disabled:!text-base-color disabled:!border-input-color/60 disabled:!bg-input-color/10",
    rules: [{ required: true, message: "Email is required" }],
    disable: true,
  },

  {
    name: "phone",
    type: "text",
    inputType: "tel",
    label: "Phone number",
    placeholder: "Enter your phone number",
    labelClassName: "!font-medium  !text-secondary-color",
    inputClassName: "!py-2 !w-full",
    rules: [{ required: true, message: "Phone number is required" }],
    disable: false,
  },
  {
    name: "address",
    type: "text",
    inputType: "tel",
    label: "Street Address",
    placeholder: "Enter your Street Address",
    labelClassName: "!font-medium  !text-secondary-color",
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
    labelClassName: "!font-medium  !text-secondary-color",
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
    labelClassName: "!font-medium  !text-secondary-color",
    inputClassName: "!py-2 !w-full",
    rules: [{ required: true, message: "Country is required" }],
    disable: false,
  },
];
const companyInputStructure = [
  {
    name: "companyName",
    type: "text",
    inputType: "normal",
    label: " Company Name",
    placeholder: "Enter Full Company Name",
    labelClassName: "!font-semibold !text-secondary-color",
    inputClassName: "!py-2 !w-full",
    disable: false,
    prefix: <FaUser className="mr-1 !text-secondary-color" />,
    rules: [{ required: true, message: "Company Name is required" }],
  },
  {
    name: "email",
    type: "email",
    inputType: "normal",
    label: "Email",
    placeholder: "Enter Email Name",
    labelClassName: "!font-semibold !text-secondary-color",
    inputClassName: "!py-2 !w-full",
    disable: false,
    prefix: <IoMdMail className="mr-1 !text-secondary-color" />,
    rules: [{ required: true, message: "Email is required" }],
  },
  {
    name: "phone",
    type: "text",
    inputType: "tel",
    label: "Phone number",
    placeholder: "Enter your phone number",
    labelClassName: "!font-medium  !text-secondary-color",
    inputClassName: "!py-2 !w-full",
    rules: [{ required: true, message: "Phone number is required" }],
    disable: false,
  },
  {
    name: "address",
    type: "text",
    inputType: "normal",
    label: "Street Address",
    placeholder: "Enter Street Address",
    labelClassName: "!font-semibold !text-secondary-color",
    inputClassName: "!py-2 !w-full",
    disable: false,
    prefix: <HiLocationMarker className="mr-1 !text-secondary-color" />,
    rules: [{ required: true, message: "Street Address is required" }],
  },
  {
    name: "town",
    type: "text",
    inputType: "normal",
    label: "Town",
    placeholder: "Enter Town Name",
    labelClassName: "!font-semibold !text-secondary-color",
    inputClassName: "!py-2 !w-full",
    disable: false,
    prefix: <HiLocationMarker className="mr-1 !text-secondary-color" />,
    rules: [{ required: true, message: "Town is required" }],
  },
  {
    name: "country",
    type: "text",
    inputType: "normal",
    label: "Country",
    placeholder: "Enter Country Name",
    labelClassName: "!font-semibold !text-secondary-color",
    inputClassName: "!py-2 !w-full",
    disable: false,
    prefix: <HiLocationMarker className="mr-1 !text-secondary-color" />,
    rules: [{ required: true, message: "Country is required" }],
  },
  {
    name: "ico",
    type: "text",
    inputType: "normal",
    label: "IČO",
    placeholder: "Enter IČO",
    labelClassName: "!font-semibold !text-secondary-color",
    inputClassName: "!py-2 !w-full",
    disable: false,
    prefix: <FaAddressCard className="mr-1 !text-secondary-color" />,
  },
  {
    name: "dic",
    type: "text",
    inputType: "normal",
    label: "DIČ",
    placeholder: "Enter DIČ",
    labelClassName: "!font-semibold !text-secondary-color",
    inputClassName: "!py-2 !w-full",
    disable: false,
    prefix: <FaAddressCard className="mr-1 !text-secondary-color" />,
    rules: [{ required: true, message: "DIČ is required" }],
  },
  {
    name: "ic_dph",
    type: "text",
    inputType: "normal",
    label: "IČ DPH (Optional)",
    placeholder: "Enter IČ DPH",
    labelClassName: "!font-semibold !text-secondary-color",
    inputClassName: "!py-2 !w-full",
    disable: false,
    prefix: <FaAddressCard className="mr-1 !text-secondary-color" />,
    rules: [{ required: false, message: "IČ DPH is required" }],
  },
];

const professionalInputStructure = [
  {
    name: "name",
    type: "text",
    inputType: "text",
    label: "Full name",
    placeholder: "Enter your full name",
    labelClassName: "!font-medium  !text-secondary-color",
    inputClassName: "!py-2 !w-full",
    rules: [{ required: true, message: "Full name is required" }],
    disable: false,
  },
  {
    name: "companyName",
    type: "text",
    inputType: "normal",
    label: " Company Name",
    placeholder: "Enter Full Company Name",
    labelClassName: "!font-semibold !text-secondary-color",
    inputClassName: "!py-2 !w-full",
    disable: false,
    prefix: <FaUser className="mr-1 !text-secondary-color" />,
    rules: [{ required: true, message: "Company Name is required" }],
  },
  {
    name: "phone",
    type: "text",
    inputType: "tel",
    label: "Phone number",
    placeholder: "Enter your phone number",
    labelClassName: "!font-medium  !text-secondary-color",
    inputClassName: "!py-2 !w-full",
    rules: [{ required: true, message: "Phone number is required" }],
    disable: false,
  },
  {
    name: "email",
    type: "email",
    inputType: "normal",
    label: "Email",
    placeholder: "Enter Email Name",
    labelClassName: "!font-semibold !text-secondary-color",
    inputClassName: "!py-2 !w-full",
    disable: false,
    prefix: <IoMdMail className="mr-1 !text-secondary-color" />,
    rules: [{ required: true, message: "Email is required" }],
  },
  {
    name: "about",
    type: "text",
    inputType: "textarea",
    label: "About Me",
    placeholder: "Enter About Yourself",
    labelClassName: "!font-semibold !text-secondary-color",
    inputClassName: "!py-2 !w-full",
    disable: false,
    prefix: <FaUser className="mr-1 !text-secondary-color" />,
    rules: [{ required: true, message: "Company Name is required" }],
  },
  {
    name: "address",
    type: "text",
    inputType: "normal",
    label: "Street Address",
    placeholder: "Enter Street Address",
    labelClassName: "!font-semibold !text-secondary-color",
    inputClassName: "!py-2 !w-full",
    disable: false,
    prefix: <HiLocationMarker className="mr-1 !text-secondary-color" />,
    rules: [{ required: true, message: "Street Address is required" }],
  },
  {
    name: "minHourlyRate",
    type: "number",
    inputType: "number",
    label: "Min  Rate",
    placeholder: "Enter Min  Rate",
    labelClassName: "!font-semibold !text-secondary-color",
    inputClassName: "!py-2 !w-full",
    disable: false,
    prefix: <HiLocationMarker className="mr-1 !text-secondary-color" />,
    rules: [{ required: true, message: "Street Address is required" }],
  },
  {
    name: "maxHourlyRate",
    type: "number",
    inputType: "number",
    label: "Max  Rate",
    placeholder: "Enter Max  Rate",
    labelClassName: "!font-semibold !text-secondary-color",
    inputClassName: "!py-2 !w-full",
    disable: false,
    prefix: <HiLocationMarker className="mr-1 !text-secondary-color" />,
    rules: [{ required: true, message: "Street Address is required" }],
  },
  {
    name: "town",
    type: "text",
    inputType: "normal",
    label: "Town",
    placeholder: "Enter Town Name",
    labelClassName: "!font-semibold !text-secondary-color",
    inputClassName: "!py-2 !w-full",
    disable: false,
    prefix: <HiLocationMarker className="mr-1 !text-secondary-color" />,
    rules: [{ required: true, message: "Town is required" }],
  },
  {
    name: "country",
    type: "text",
    inputType: "normal",
    label: "Country",
    placeholder: "Enter Country Name",
    labelClassName: "!font-semibold !text-secondary-color",
    inputClassName: "!py-2 !w-full",
    disable: false,
    prefix: <HiLocationMarker className="mr-1 !text-secondary-color" />,
    rules: [{ required: true, message: "Country is required" }],
  },
  {
    name: "ico",
    type: "text",
    inputType: "normal",
    label: "IČO",
    placeholder: "Enter IČO",
    labelClassName: "!font-semibold !text-secondary-color",
    inputClassName: "!py-2 !w-full",
    disable: false,
    prefix: <FaAddressCard className="mr-1 !text-secondary-color" />,
  },
  {
    name: "dic",
    type: "text",
    inputType: "normal",
    label: "DIČ",
    placeholder: "Enter DIČ",
    labelClassName: "!font-semibold !text-secondary-color",
    inputClassName: "!py-2 !w-full",
    disable: false,
    prefix: <FaAddressCard className="mr-1 !text-secondary-color" />,
    rules: [{ required: true, message: "DIČ is required" }],
  },
  {
    name: "ic_dph",
    type: "text",
    inputType: "normal",
    label: "IČ DPH",
    placeholder: "Enter IČ DPH",
    labelClassName: "!font-semibold !text-secondary-color",
    inputClassName: "!py-2 !w-full",
    disable: false,
    prefix: <FaAddressCard className="mr-1 !text-secondary-color" />,
    rules: [{ required: true, message: "IČ DPH is required" }],
  },
];

const EditProfile = ({ myData }: { myData: IProfile }) => {
  const serverUrl = getServerUrl() || "";
  const [form] = Form.useForm();

  const inputStructure =
    myData?.role === "user"
      ? userInputStructure
      : myData?.role === "company"
        ? companyInputStructure
        : myData?.role === "photographer" || "videographer" || "both"
          ? professionalInputStructure
          : [];

  const [imageUrl, setImageUrl] = useState<string>(AllImages.dummyProfile?.src);

  const handleImageUpload = (info: any) => {
    if (info.file.status === "removed") {
      setImageUrl(AllImages.dummyProfile?.src); // Reset to null or fallback image
    } else {
      const file = info.file.originFileObj || info.file; // Handle the file object safely
      if (file) {
        setImageUrl(URL.createObjectURL(file)); // Set the preview URL of the selected image
      } else {
      }
    }
  };

  useEffect(() => {
    form.setFieldsValue({
      email: myData?.email,
      name: myData?.name,
      companyName: myData?.companyName,
      phone: myData?.phone,
      about: myData?.profileId?.about,
      minHourlyRate: myData?.minHourlyRate,
      maxHourlyRate: myData?.maxHourlyRate,
      address: myData?.address,
      town: myData?.town,
      country: myData?.country,
      ico: myData?.ico,
      dic: myData?.dic,
      ic_dph: myData?.ic_dph,
    });

    if (myData?.profileImage?.length > 0) {
      setImageUrl(myData?.profileImage);
    } else {
      setImageUrl(AllImages.dummyProfile.src);
    }
  }, [form, myData]);

  const onFinish = async (values: any) => {
    const formData = new FormData();

    formData.append("data", JSON.stringify(values));

    if (values?.image?.file?.originFileObj) {
      formData.append("image", values?.image?.file?.originFileObj);
    }

    const res = await tryCatchWrapper(
      updateProfile,
      { body: formData },
      "Updating profile...",
      "Profile updated successfully!",
      "Something went wrong! Please try again."
    );

    console.log(res)

    if (res?.success) {
      form.resetFields();
    }
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
                src={
                  imageUrl.startsWith("/uploads")
                    ? serverUrl + imageUrl
                    : imageUrl
                } // Check if imageUrl starts with 'http', use default if not
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
