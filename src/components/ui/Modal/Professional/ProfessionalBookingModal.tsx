/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Form, Modal, Radio, Typography } from "antd";
import { useState } from "react";
import type { Dayjs } from "dayjs";
import ReusableForm from "../../Form/ReuseForm";
import ReuseInput from "../../Form/ReuseInput";
import ReuseButton from "../../Button/ReuseButton";
import ReuseDatePicker from "../../Form/ReuseDatePicker";
import ReuseTimePicker from "../../Form/ReuseTimePicker";
import ReuseSelect from "../../Form/ReuseSelect";

interface ProfessionalBookingModalProps {
  isModalVisible: boolean;
  handleCancel: () => void;
}

const ProfessionalBookingModal: React.FC<ProfessionalBookingModalProps> = ({
  isModalVisible,
  handleCancel,
}) => {
  const [form] = Form.useForm();
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null);

  const onSubmit = (values: any) => {
    console.log("Submitted Values:", values);
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
        <h1 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2">
          Contact Zuzana Králiková
        </h1>
        <p className="text-xs sm:text-sm lg:text-base xl:text-lg mb-5 font-medium">
          Fill out the form below to request a quote and book your session.
        </p>

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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-4 mt-6">
            <ReuseInput
              name="location"
              label="Event Location"
              placeholder="Enter Event Location"
              rules={[
                { required: true, message: "Event Location is required" },
              ]}
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
              format="HH:mm"
              disabled={!selectedDate}
            />
            <ReuseSelect
              name="budget"
              label="Budget"
              labelClassName="!font-semibold"
              rules={[{ required: true, message: "Budget is required" }]}
              options={[
                { value: "under500", label: "Under 500€" },
                { value: "500-1000", label: "500€-1000€" },
                { value: "1000-2000", label: "1000€-2000€" },
                { value: "2000-5000", label: "2000€-5000€" },
                { value: "over5000", label: "Over 5000€" },
              ]}
            />
            <ReuseSelect
              name="duration"
              label="Duration"
              labelClassName="!font-semibold"
              rules={[{ required: true, message: "Duration is required" }]}
              options={[
                { value: "1hour", label: "1 hour" },
                { value: "2hour", label: "2 hours" },
                { value: "halfday", label: "half Day" },
                { value: "fullday", label: "Full Day" },
                { value: "multiday", label: "Multiple Day" },
              ]}
            />
          </div>
          <div>
            <Typography.Title level={5} className="!font-semibold mt-4">
              Media Options
            </Typography.Title>
            <Form.Item name="mediaOption" rules={[{ required: true }]}>
              <Radio.Group>
                <Radio value="photography">Photography</Radio>
                <Radio value="videography">Videography</Radio>
              </Radio.Group>
            </Form.Item>
          </div>
          <ReuseInput
            name="description"
            inputType="textarea"
            rows={5}
            label="Event Description"
            placeholder="Enter Event Description"
            rules={[
              { required: true, message: "Event Description is required" },
            ]}
            labelClassName="!font-semibold"
          />

          <ReuseButton htmlType="submit" variant="secondary" className="mt-2">
            Send Booking Request
          </ReuseButton>
        </ReusableForm>
      </div>
    </Modal>
  );
};

export default ProfessionalBookingModal;
