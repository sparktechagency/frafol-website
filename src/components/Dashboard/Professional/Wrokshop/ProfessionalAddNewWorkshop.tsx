/* eslint-disable @typescript-eslint/no-explicit-any */
import ReuseButton from "@/components/ui/Button/ReuseButton";
import ReuseDatePicker from "@/components/ui/Form/ReuseDatePicker";
import ReusableForm from "@/components/ui/Form/ReuseForm";
import ReuseInput from "@/components/ui/Form/ReuseInput";
import ReuseTimePicker from "@/components/ui/Form/ReuseTimePicker";
import { Form, Modal } from "antd";
import React, { useState } from "react";
import type { Dayjs } from "dayjs";
import ReuseSelect from "@/components/ui/Form/ReuseSelect";
import ReuseUpload from "@/components/ui/Form/ReuseUpload";

const ProfessionalAddNewWorkshop = ({
  isAddModalVisible,
  handleCancel,
}: {
  isAddModalVisible: boolean;
  handleCancel: () => void;
}) => {
  const [form] = Form.useForm();
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null);

  const onSubmit = (values: any) => {
    console.log("Submitted Values:", values);
  };
  return (
    <Modal
      open={isAddModalVisible}
      onCancel={handleCancel}
      footer={null}
      centered
      className="lg:!w-[1000px]"
    >
      <div className="p-5 text-base-color">
        <h1 className="text-lg sm:text-xl lg:text-2xl font-bold mb-5">
          Add New Workshop
        </h1>

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
            name="title"
            label="Title"
            placeholder="Enter Title"
            rules={[{ required: true, message: "Title is required" }]}
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
          <ReuseSelect
            name="location"
            label="Select Location"
            placeholder="Select Location"
            rules={[{ required: true, message: "Location is required" }]}
            labelClassName="!font-semibold"
            options={[
              { label: "online", value: "Online" },
              { label: "Offline", value: "offline" },
            ]}
          />
          <ReuseInput
            name="eventlocation"
            label="Event Location"
            placeholder="Enter Event Location"
            rules={[{ required: true, message: "Event Location is required" }]}
            labelClassName="!font-semibold"
          />

          <ReuseInput
            name="price"
            label="Price"
            placeholder="Enter Price"
            rules={[{ required: true, message: "Price is required" }]}
            labelClassName="!font-semibold"
          />

          <ReuseInput
            name="VATAmount "
            label="VAT Amount % (optional) "
            placeholder="Enter VAT Amount"
            labelClassName="!font-semibold"
          />

          <ReuseInput
            inputType="textarea"
            rows={4}
            name="description"
            label="Event Description"
            placeholder="Enter Description"
            rules={[{ required: true, message: "Description is required" }]}
            labelClassName="!font-semibold mt-4"
          />
          <ReuseUpload
            label="Upload Thumbnail"
            name="image"
            buttonText="Upload Image"
            accept="image/png, image/jpeg"
            maxCount={1}
            labelClassName="!font-semibold"
          />

          <ReuseButton htmlType="submit" variant="secondary" className="mt-2">
            Update Workshop
          </ReuseButton>
        </ReusableForm>
      </div>
    </Modal>
  );
};

export default ProfessionalAddNewWorkshop;
