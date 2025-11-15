"use client";

import { Checkbox, Form, Modal, Radio, Typography } from "antd";
import { useEffect, useState } from "react";
import type { Dayjs } from "dayjs";
import ReusableForm from "../../Form/ReuseForm";
import ReuseInput from "../../Form/ReuseInput";
import ReuseButton from "../../Button/ReuseButton";
import ReuseDatePicker from "../../Form/ReuseDatePicker";
import ReuseTimePicker from "../../Form/ReuseTimePicker";
import ReuseSelect from "../../Form/ReuseSelect";
import { ICreateEventOrder, IProfessionalUser, IProfile } from "@/types";
import tryCatchWrapper from "@/utils/tryCatchWrapper";
import { createEventOrder } from "@/services/EventOrderService/EventOrderServiceApi";

const userInputStructure = [
  {
    name: "name",
    type: "text",
    inputType: "normal",
    label: " Name",
    placeholder: "Enter Full Name",
    labelClassName: "!font-semibold",
    rules: [{ required: true, message: "Name is required" }],
  },
  {
    name: "sureName",
    type: "text",
    inputType: "normal",
    label: "Surname",
    placeholder: "Enter Full Surname",
    labelClassName: "!font-semibold",
    rules: [{ required: true, message: "Surname is required" }],
  },
  {
    name: "streetAddress",
    type: "text",
    inputType: "normal",
    label: "Street Address",
    placeholder: "Enter Street Address",
    labelClassName: "!font-semibold",
    rules: [{ required: true, message: "Street Address is required" }],
  },
  {
    name: "town",
    type: "text",
    inputType: "normal",
    label: "Town",
    placeholder: "Enter Town Name",
    labelClassName: "!font-semibold",
    rules: [{ required: true, message: "Town is required" }],
  },
  {
    name: "country",
    type: "text",
    inputType: "normal",
    label: "Country",
    placeholder: "Enter Country Name",
    labelClassName: "!font-bold",
    rules: [{ required: true, message: "Country is required" }],
  },
];
const companyInputStructure = [
  {
    name: "companyName",
    type: "text",
    inputType: "normal",
    label: " Company Name",
    placeholder: "Enter Full Company Name",
    labelClassName: "!font-semibold",
    rules: [{ required: true, message: "Company Name is required" }],
  },
  {
    name: "streetAddress",
    type: "text",
    inputType: "normal",
    label: "Street Address",
    placeholder: "Enter Street Address",
    labelClassName: "!font-semibold",
    rules: [{ required: true, message: "Street Address is required" }],
  },
  {
    name: "town",
    type: "text",
    inputType: "normal",
    label: "Town",
    placeholder: "Enter Town Name",
    labelClassName: "!font-semibold",
    rules: [{ required: true, message: "Town is required" }],
  },
  {
    name: "country",
    type: "text",
    inputType: "normal",
    label: "Country",
    placeholder: "Enter Country Name",
    labelClassName: "!font-semibold",
    rules: [{ required: true, message: "Country is required" }],
  },
  {
    name: "ICO",
    type: "text",
    inputType: "normal",
    label: "IČO",
    placeholder: "Enter IČO",
    labelClassName: "!font-semibold",
  },
  {
    name: "DIC",
    type: "text",
    inputType: "normal",
    label: "DIČ",
    placeholder: "Enter DIČ",
    labelClassName: "!font-semibold",
    rules: [{ required: true, message: "DIČ is required" }],
  },
  {
    name: "IC_DPH",
    type: "text",
    inputType: "normal",
    label: "IČ DPH",
    placeholder: "Enter IČ DPH",
    labelClassName: "!font-semibold",
    rules: [{ required: true, message: "IČ DPH is required" }],
  },
];

interface ProfessionalBookingModalProps {
  isModalVisible: boolean;
  handleCancel: () => void;
  myData: IProfile;
  professionalUser: IProfessionalUser;
}

const ProfessionalBookingModal: React.FC<ProfessionalBookingModalProps> = ({
  isModalVisible,
  handleCancel,
  myData,
  professionalUser,
}) => {
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
      orderType: "custom",
      serviceProviderId: professionalUser?._id,

      date: values.date,
      time: values.time,
      location: values.location,
      budget_range: values.budget_range,
      duration: values.duration,
      serviceType: values.serviceType,
      description: values.description,

      isRegisterAsCompany: type === "company" ? true : false,
      name: values.name,
      sureName: values.sureName,
      streetAddress: values.streetAddress,
      town: values.town,
      country: values.country,

      companyName: values.companyName,

      ICO: values.ICO,
      DIC: values.DIC,
      IC_DPH: values.IC_DPH,
    };

    const res = await tryCatchWrapper(
      createEventOrder,
      { body: data },
      "Adding new package...",
      "Order Placed successfully!",
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
      onCancel={() => {
        handleCancel();
      }}
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
              name="budget_range"
              label="Budget"
              placeholder="Select Budget"
              labelClassName="!font-semibold"
              rules={[{ required: true, message: "Budget is required" }]}
              options={[
                { value: "under50", label: "Under 50€" },
                { value: "€50-€100", label: "€50-€100" },
                { value: "€100-€300", label: "€100-€300" },
                { value: "€300 – €500", label: "€300 – €500" },
                { value: "€500 – €700", label: "€500 – €700" },
                { value: "€700 – €1000", label: "€700 – €1000" },
                { value: "over1000", label: "Over €1000" },
              ]}
            />
            <ReuseSelect
              name="duration"
              label="Duration"
              placeholder="Select Duration"
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
            <Form.Item name="serviceType" rules={[{ required: true }]}>
              <Radio.Group>
                {professionalUser?.role === "both" ? (
                  <div>
                    <Radio value="photography">Photography</Radio>
                    <Radio value="videography">Videography</Radio>
                  </div>
                ) : professionalUser?.role === "photographer" ? (
                  <Radio value="photography">Photography</Radio>
                ) : (
                  <Radio value="videography">Videography</Radio>
                )}
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
            ? userInputStructure.map((input, index) => (
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
            : companyInputStructure.map((input, index) => (
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

export default ProfessionalBookingModal;
