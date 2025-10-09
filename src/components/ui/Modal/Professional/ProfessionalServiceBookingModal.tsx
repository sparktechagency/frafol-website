"use client";

import { Form, Modal } from "antd";
import { useState } from "react";
import type { Dayjs } from "dayjs";
import ReusableForm from "../../Form/ReuseForm";
import ReuseInput from "../../Form/ReuseInput";
import ReuseButton from "../../Button/ReuseButton";
import ReuseDatePicker from "../../Form/ReuseDatePicker";
import ReuseTimePicker from "../../Form/ReuseTimePicker";
import { ICreateEventOrder, IPackage } from "@/types";
import tryCatchWrapper from "@/utils/tryCatchWrapper";
import { createEventOrder } from "@/services/EventOrderService/EventOrderServiceApi";

interface ProfessionalServiceBookingModalProps {
  isModalVisible: boolean;
  handleCancel: () => void;
  packageData: IPackage;
}

const ProfessionalServiceBookingModal: React.FC<
  ProfessionalServiceBookingModalProps
> = ({ isModalVisible, handleCancel, packageData }) => {
  const [form] = Form.useForm();
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null);

  const onSubmit = async (values: ICreateEventOrder) => {
    const data = {
      orderType: "direct",
      packageId: packageData?._id,
      location: values.location,
      time: values.time,
      date: values.date,
    };
    const res = await tryCatchWrapper(
      createEventOrder,
      { body: data },
      "Adding new package...",
      "Package added successfully!",
      "Something went wrong! Please try again."
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

          <ReuseButton htmlType="submit" variant="secondary" className="mt-2">
            Send Booking Request
          </ReuseButton>
        </ReusableForm>
      </div>
    </Modal>
  );
};

export default ProfessionalServiceBookingModal;
