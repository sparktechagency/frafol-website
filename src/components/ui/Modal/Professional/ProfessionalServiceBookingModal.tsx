"use client";

import { Checkbox, Form, Modal } from "antd";
import { useEffect, useState } from "react";
import type { Dayjs } from "dayjs";
import ReusableForm from "../../Form/ReuseForm";
import ReuseInput from "../../Form/ReuseInput";
import ReuseButton from "../../Button/ReuseButton";
import ReuseDatePicker from "../../Form/ReuseDatePicker";
import ReuseTimePicker from "../../Form/ReuseTimePicker";
import { ICreateEventOrder, IPackage, IProfile } from "@/types";
import tryCatchWrapper from "@/utils/tryCatchWrapper";
import { createEventOrder } from "@/services/EventOrderService/EventOrderServiceApi";
import { companyInputStructure, userInputStructure } from "./ProfessionalBookingModal";



interface ProfessionalServiceBookingModalProps {
  isModalVisible: boolean;
  handleCancel: () => void;
  packageData: IPackage;
  myData: IProfile;
}

const ProfessionalServiceBookingModal: React.FC<
  ProfessionalServiceBookingModalProps
> = ({ isModalVisible, handleCancel, packageData, myData }) => {
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
      ico: myData?.ico,
      dic: myData?.dic,
      ic_dph: myData?.ic_dph,
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
      className="lg:!w-[700px]"
    >
      <div className="p-5 text-base-color">
        <h1 className="text-lg sm:text-xl lg:text-2xl font-bold mb-5">
          Book Now
        </h1>

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


          <ReuseButton htmlType="submit" variant="secondary" className="mt-2">
            Send Booking Request
          </ReuseButton>
        </ReusableForm>
      </div>
    </Modal>
  );
};

export default ProfessionalServiceBookingModal;
