/* eslint-disable @typescript-eslint/no-explicit-any */
import dayjs from "dayjs";
import ReuseButton from "@/components/ui/Button/ReuseButton";
import ReuseDatePicker from "@/components/ui/Form/ReuseDatePicker";
import ReusableForm from "@/components/ui/Form/ReuseForm";
import ReuseInput from "@/components/ui/Form/ReuseInput";
import ReuseTimePicker from "@/components/ui/Form/ReuseTimePicker";
import { Form, Modal } from "antd";
import React, { useEffect, useState } from "react";
import ReuseSelect from "@/components/ui/Form/ReuseSelect";
import ReuseUpload from "@/components/ui/Form/ReuseUpload";
import { IWorkshop } from "@/types";
import tryCatchWrapper from "@/utils/tryCatchWrapper";
import { updateWrokshop } from "@/services/WorkshopService/WorkshopServiceApi";
import Image from "next/image";
import { AllImages } from "../../../../../public/assets/AllImages";
import { getServerUrl } from "@/helpers/config/envConfig";

const ProfessionalEditWorkshop = ({
  isEditModalVisible,
  handleCancel,
  currentRecord,
  serviceCharge,
}: {
  isEditModalVisible: boolean;
  handleCancel: () => void;
  currentRecord: IWorkshop | null;
  serviceCharge: number;
}) => {
  const serverUrl = getServerUrl();
  const [form] = Form.useForm();
  const priceValue = Form.useWatch("price", form) || 0;
  const vatAmountValue = Form.useWatch("vatAmount", form) || 0;

  const [selectedDate, setSelectedDate] = useState<IWorkshop | null>(null);
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);

  useEffect(() => {
    if (currentRecord) {
      // Ensure both date and time are properly converted to Dayjs
      const date = currentRecord?.date ? dayjs(currentRecord?.date) : null;
      const time = currentRecord?.time ? dayjs(currentRecord?.time) : null;

      form.setFieldsValue({
        title: currentRecord?.title,
        // Ensure date and time are valid before setting them
        date: date,
        time: time,
        locationType: currentRecord?.locationType,
        location: currentRecord?.location,
        workshopLink: currentRecord?.workshopLink,
        price: currentRecord?.price,
        mainPrice: currentRecord?.mainPrice,
        description: currentRecord?.description,
        vatAmount: currentRecord?.vatAmount,
      });

      setSelectedLocation(currentRecord?.locationType);
    }
  }, [currentRecord, form]);

  useEffect(() => {
    const serviceChagePercentage = serviceCharge / 100;
    const vatAmountPercentage = vatAmountValue / 100;

    const serviceChargeAmmount = Number(priceValue) * serviceChagePercentage;

    const totalServiceCharge = serviceChargeAmmount > 5 ? serviceChargeAmmount : 5;
    const totalVatAmount = Number(priceValue) * vatAmountPercentage;

    const mainPriceValue =
      Number(priceValue) + totalServiceCharge + totalVatAmount;

    form.setFieldValue("mainPrice", Number(mainPriceValue?.toFixed(2)));
  }, [form, priceValue, serviceCharge, vatAmountValue]);

  const onSubmit = async (values: any) => {
    const formData = new FormData();

    const data = {
      title: values.title,
      date: values.date,
      time: values.time,
      locationType: values.locationType,
      location: values.location,
      workshopLink: values.workshopLink,
      price: Number(values.price),
      mainPrice: Number(values.mainPrice),
      description: values.description,
      vatAmount: Number(values.vatAmount) || 0,
    };

    formData.append("data", JSON.stringify(data));

    if (values?.image?.[0]?.originFileObj) {
      formData.append("image", values?.image?.[0]?.originFileObj);
    }

    const res = await tryCatchWrapper(
      updateWrokshop,
      { body: formData, params: currentRecord?._id },
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
      open={isEditModalVisible}
      onCancel={handleCancel}
      footer={null}
      centered
      className="lg:!w-[1000px]"
    >
      <div className="p-5 text-base-color">
        <h1 className="text-lg sm:text-xl lg:text-2xl font-bold mb-5">
          Edit Workshop
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
            date={selectedDate as any}
            label="Event Time"
            labelClassName="!font-semibold"
            rules={[{ required: true, message: "Time is required" }]}
            placeholder="Select Time"
            disabled={!selectedDate}
          />
          <ReuseSelect
            name="locationType"
            label="Select Location"
            placeholder="Select Location"
            rules={[{ required: true, message: "Location is required" }]}
            value={selectedLocation}
            labelClassName="!font-semibold"
            options={[
              { label: "Online", value: "online" },
              { label: "Offline", value: "offline" },
            ]}
            onChange={(value) => {
              setSelectedLocation(value);
            }}
          />
          {selectedLocation === "offline" ? (
            <ReuseInput
              name="location"
              label="Event Location"
              placeholder="Enter Event Location"
              rules={[
                { required: true, message: "Event Location is required" },
              ]}
              labelClassName="!font-semibold"
            />
          ) : (
            <ReuseInput
              name="workshopLink"
              label="Online Link"
              placeholder="Enter Online Link"
              type="url"
              rules={[
                { required: true, message: "Event Location is required" },
              ]}
              labelClassName="!font-semibold"
            />
          )}

          <ReuseInput
            name="price"
            label="Price"
            placeholder="Enter Price"
            rules={[{ required: true, message: "Price is required" }]}
            labelClassName="!font-semibold"
            type="number"
          />

          <ReuseInput
            name="vatAmount"
            label="VAT Amount % (optional) "
            placeholder="Enter VAT Amount"
            labelClassName="!font-semibold"
            type="number"
          />

          <ReuseInput
            name="mainPrice"
            label="Package Price After Adding Service Fee and VAT"
            placeholder="Enter Package Price"
            disabled
            type="number"
            rules={[{ required: true, message: "Package Price is required" }]}
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

          <div>
            <p>Current Image:</p>
            <Image
              src={
                (currentRecord?.image && serverUrl + currentRecord?.image) ||
                AllImages.dummyCover.src
              }
              width={100}
              height={100}
              alt="image"
            />
          </div>

          <ReuseButton htmlType="submit" variant="secondary" className="mt-2">
            Update Workshop
          </ReuseButton>
        </ReusableForm>
      </div>
    </Modal>
  );
};

export default ProfessionalEditWorkshop;
