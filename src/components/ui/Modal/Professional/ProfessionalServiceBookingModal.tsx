"use client";

import { Checkbox, Form, Modal } from "antd";
import { useEffect, useState } from "react";
import type { Dayjs } from "dayjs";
import ReusableForm from "../../Form/ReuseForm";
import ReuseInput from "../../Form/ReuseInput";
import ReuseButton from "../../Button/ReuseButton";
import ReuseDatePicker from "../../Form/ReuseDatePicker";
import ReuseTimePicker from "../../Form/ReuseTimePicker";
import { ICreateEventOrder, IPackage, IProfessionalUser, IProfile } from "@/types";
import tryCatchWrapper from "@/utils/tryCatchWrapper";
import { createEventOrder } from "@/services/EventOrderService/EventOrderServiceApi";
import { companyInputStructure, userInputStructure } from "./ProfessionalBookingModal";
import Image from "next/image";
import { IoCalendarOutline } from "react-icons/io5";
import { LuClock } from "react-icons/lu";
import { BsCurrencyDollar } from "react-icons/bs";
import { AllImages } from "../../../../../public/assets/AllImages";
import { getServerUrl } from "@/helpers/config/envConfig";
import Link from "next/link";



interface ProfessionalServiceBookingModalProps {
  isModalVisible: boolean;
  handleCancel: () => void;
  packageData: IPackage;
  myData: IProfile;
  professionalUser: IProfessionalUser;
}

const ProfessionalServiceBookingModal: React.FC<
  ProfessionalServiceBookingModalProps
> = ({ isModalVisible, handleCancel, packageData, myData, professionalUser }) => {
  const serverUrl = getServerUrl();
  console.log(myData)
  const [form] = Form.useForm();
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null);
  const [type, setType] = useState<"user" | "company">("user");

  useEffect(() => {
    form.setFieldsValue({
      name: myData?.name,
      sureName: myData?.sureName,
      companyName: myData?.companyName,
      streetAddress: myData?.address,
      town: myData?.town,
      country: myData?.country,
      ICO: myData?.ico,
      DIC: myData?.dic,
      IC_DPH: myData?.ic_dph,
    });
  }, [form, myData]);

  const onSubmit = async (values: ICreateEventOrder) => {
    const data = {
      orderType: "direct",
      packageId: packageData?._id,
      location: values.location,
      time: values.time,
      date: values.date,

      isRegisterAsCompany: type === "company" ? true : false,
      name: values.name,
      // sureName: values.sureName,
      streetAddress: values.streetAddress,
      town: values.town,
      country: values.country,

      companyName: values.companyName,

      ICO: values.ICO,
      DIC: values.DIC,
      IC_DPH: values.IC_DPH || "",
    };
    const res = await tryCatchWrapper(
      createEventOrder,
      { body: data },
      {
        toastLoadingMessage: "Adding new package...",
        toastSuccessMessage: "Order Placed successfully!",
        toastErrorMessage: "Something went wrong! Please try again.",
      }
    );

    if (res?.success) {
      form.resetFields();
      handleCancel();
    }
  };

  return (
    <Modal
      open={isModalVisible}
      onCancel={handleCancel}
      footer={null}
      centered
      className="lg:!w-[900px]"
    >
      <div className="p-5 text-base-color">

        <h1 className="text-lg sm:text-xl lg:text-2xl font-bold mb-5">
          Book Now
        </h1>

        <div className="relative">
          <Image
            width={1000}
            height={1000}
            src={
              packageData?.thumbnailImage
                ? serverUrl + packageData?.thumbnailImage
                : AllImages?.dummyCover
            }
            alt="workspace"
            className="w-full h-40 sm:h-60 lg:h-72 xl:h-80 object-cover rounded-lg "
          />
          <div className="flex items-center justify-start gap-2 absolute top-3 w-full px-2">
            {packageData?.vatAmount > 0 ? (
              <span className="text-xs sm:text-sm bg-secondary-color text-primary-color py-0.5 px-1.5 rounded-full ">
                VAT Included: {packageData?.vatAmount}%
              </span>
            ) : (
              <span></span>
            )}
          </div>
          <div className="px-1  mt-3">
            <span className="text-xs sm:text-sm bg-secondary-color text-primary-color py-0.5 px-1.5 rounded-full capitalize">
              {packageData?.category}
            </span>
            <p className="text-sm sm:text-base lg:text-lg xl:text-xl font-bold mt-3">
              {packageData?.title}
            </p>
            <p className="text-xs sm:text-sm lg:text-base mt-1.5">
              {packageData?.description}
            </p>
            <div className="flex flex-col gap-1 mt-3">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <BsCurrencyDollar className="text-secondary-color text-sm sm:text-base lg:text-lg" />
                  <p className="text-xs sm:text-sm lg:text-base font-semibold">
                    Price:
                  </p>
                </div>
                <p className="text-xs sm:text-sm lg:text-base">{packageData?.mainPrice} </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1">
                  <LuClock className="text-secondary-color text-sm sm:text-base lg:text-lg" />
                  <p className="text-xs sm:text-sm lg:text-base font-semibold">
                    Duration:
                  </p>
                </div>
                <p className="text-xs sm:text-sm lg:text-base">{packageData?.duration}</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1">
                  <IoCalendarOutline className="text-secondary-color text-sm sm:text-base lg:text-lg" />
                  <p className="text-xs sm:text-sm lg:text-base font-semibold">
                    Delivery Time:
                  </p>
                </div>
                <p className="text-xs sm:text-sm lg:text-base">
                  {packageData?.deliveryTime / 7} Week
                </p>
              </div>
            </div>

          </div>
        </div>



        <div className="border border-base-color/20 mt-5 p-3 rounded-lg">
          <p className="text-sm sm:text-base lg:text-lg xl:text-xl font-semibold mb-5">
            Event Information
          </p>

          <ReusableForm
            form={form}
            handleFinish={onSubmit}
            onValuesChange={(changedValues) => {
              if (changedValues.date) {
                setSelectedDate(changedValues.date);
                form.setFieldsValue({ time: null }); // Reset time when date changes
              }
            }}
          >
            <ReuseInput
              name="location"
              label="Event Location"
              placeholder="Enter Event Location"
              rules={[{ required: true, message: "Event Location is required" }]}
              labelClassName="!font-semibold"
            />

            <ReuseDatePicker
              name="date"
              label="Event Date"
              labelClassName="!font-semibold"
              rules={[{ required: true, message: "Date is required" }]}
              placeholder="Select Date"
              unAllowedDate={professionalUser?.unAvailability}
              format="MM-DD-YYYY"
            />

            <ReuseTimePicker
              name="time"
              date={selectedDate ? selectedDate.toISOString() : null}
              label="Event Time"
              labelClassName="!font-semibold"
              rules={[{ required: true, message: "Time is required" }]}
              placeholder="Select Time"
              disabled={!selectedDate}
            />


            <div className="my-5">
              <Checkbox
                className="!text-lg !font-semibold"
                onChange={(e) => {
                  if (e.target.checked) {
                    setType("company");
                  } else {
                    setType("user");
                  }
                }}
              >
                Register as a company
              </Checkbox>
            </div>
            {type !== "company"
              ? userInputStructure?.map((input, index) => (
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
              ))
              : companyInputStructure?.map((input, index) => (
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
                  <p className="text-sm">
                    Agree to <Link href="/terms-of-service" target="_blank" className="text-secondary-color! underline">
                      Terms of Service Conceptural
                    </Link>{" "}
                    and{" "}
                    <Link href="/terms-of-service-marketplace" target="_blank" className="text-secondary-color! underline">
                      Terms of Service Marketplace.
                    </Link>
                  </p>

                </div>
              </Checkbox>
            </Form.Item>
            <Form.Item
              name="výslovneSúhlasím"
              valuePropName="checked"
              rules={[
                {
                  validator: (_, value) =>
                    value
                      ? Promise.resolve()
                      : Promise.reject(
                        new Error("Should accept with this conditions")
                      ),
                },
              ]}
            >
              <Checkbox
              // onChange={(e) => handleCheckboxChange(e, "acceptTerms")}
              >
                <div>
                  <p className="text-sm">
                    Výslovne súhlasím so začatím poskytovania služby alebo so začatím dodávania digitálneho obsahu pred uplynutím lehoty na odstúpenie od zmluvy v súlade s § 17 ods. 10 písm. c zákona č. 108/2024 Z.z. o ochrane spotrebiteľa a o zmene a doplnení niektorých zákonov.
                  </p>

                </div>
              </Checkbox>
            </Form.Item>
            <Form.Item
              name="bolSom"
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
                  <p className="text-sm">
                    Bol som riadne poučený o tom, že udelením tohto súhlasu so začatím poskytovania služieb pred uplynutím lehoty na odstúpenie od zmluvy strácam po úplnom poskytnutí služby právo na odstúpenie od zmluvy (§ 17 ods. 10 písm. b) zákona č. 108/2024 Z.z. o ochrane spotrebiteľa a o zmene a doplnení niektorých zákonov.
                  </p>

                </div>
              </Checkbox>
            </Form.Item>

            <ReuseButton htmlType="submit" variant="secondary" className="mt-2">
              Send Booking Request
            </ReuseButton>
          </ReusableForm>
        </div>
      </div>
    </Modal>
  );
};

export default ProfessionalServiceBookingModal;
