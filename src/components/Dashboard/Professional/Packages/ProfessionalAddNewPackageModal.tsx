/* eslint-disable @typescript-eslint/no-explicit-any */
import ReuseButton from "@/components/ui/Button/ReuseButton";
import ReusableForm from "@/components/ui/Form/ReuseForm";
import ReuseInput from "@/components/ui/Form/ReuseInput";
import ReuseSelect from "@/components/ui/Form/ReuseSelect";
import ReuseUpload from "@/components/ui/Form/ReuseUpload";
import { addNewPackage } from "@/services/PackageService/PackageServiceApi";
import { ISignInUser } from "@/types";
import tryCatchWrapper from "@/utils/tryCatchWrapper";
import { Form, Modal, Typography } from "antd";
import React from "react";

const ProfessionalAddNewPackageModal = ({
  isAddModalVisible,
  handleCancel,
  userData,
}: {
  isAddModalVisible: boolean;
  handleCancel: () => void;
  userData: ISignInUser;
}) => {
  const categoryOptions =
    userData?.role === "both"
      ? [
          {
            label: "Photography",
            value: "photography",
          },
          {
            label: "Videography",
            value: "videography",
          },
        ]
      : userData?.role === "photographer"
      ? [
          {
            label: "Photography",
            value: "photography",
          },
        ]
      : userData?.role === "videographer"
      ? [
          {
            label: "Videography",
            value: "videography",
          },
        ]
      : [];

  const [form] = Form.useForm();

  const onSubmit = async (values: any) => {
    const formData = new FormData();

    const data = {
      title: values.title,
      description: values.description,
      price: Number(values.price),
      category: values.category,
      vatAmount: Number(values.vatAmount) || 0,
      deliveryTime: Number(values.deliveryTime),
      duration: `${Number(values.durationUnit)} ${values.durationType}`,
    };

    console.log("data", data);

    formData.append("data", JSON.stringify(data));

    if (values?.image?.[0]?.originFileObj) {
      formData.append("image", values?.image?.[0]?.originFileObj);
    }

    const res = await tryCatchWrapper(
      addNewPackage,
      { body: formData },
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
      open={isAddModalVisible}
      onCancel={handleCancel}
      footer={null}
      centered
      className="lg:!w-[1000px]"
    >
      <h3 className="text-base sm:text-lg lg:text-xl xl:text-2xl font-bold mb-2">
        Add New Package
      </h3>

      <ReusableForm form={form} handleFinish={onSubmit}>
        <h3 className="text-xs sm:text-sm lg:text-base xl:text-lg font-medium mb-5">
          Package Information
        </h3>
        <ReuseInput
          name="title"
          label="Title"
          placeholder="Enter Title"
          rules={[{ required: true, message: "Title is required" }]}
          labelClassName="!font-semibold"
        />

        <ReuseInput
          inputType="textarea"
          rows={4}
          name="description"
          label="Description"
          placeholder="Enter Description"
          rules={[{ required: true, message: "Description is required" }]}
          labelClassName="!font-semibold mt-4"
        />

        <ReuseSelect
          name="category"
          label="Select Category"
          placeholder="Select Category"
          rules={[{ required: true, message: "Category is required" }]}
          labelClassName="!font-semibold"
          options={categoryOptions}
        />
        <ReuseInput
          name="price"
          label="Package Price"
          placeholder="Enter Package Price"
          type="number"
          rules={[{ required: true, message: "Package Price is required" }]}
          labelClassName="!font-semibold"
        />
        <ReuseInput
          name="vatAmount"
          label="VAT Amount % (optional) "
          placeholder="Enter VAT Amount"
          type="number"
          labelClassName="!font-semibold"
        />
        <ReuseSelect
          name="deliveryTime"
          label="Delivery Time (Weekly)"
          placeholder="Select Delivery Time"
          rules={[{ required: true, message: "Delivery Time is required" }]}
          labelClassName="!font-semibold"
          options={[
            { label: "1 Week", value: 7 },
            { label: "2 Weeks", value: 14 },
            { label: "3 Weeks", value: 21 },
            { label: "4 Weeks", value: 28 },
            { label: "5 Weeks", value: 35 },
            { label: "6 Weeks", value: 42 },
            { label: "7 Weeks", value: 49 },
          ]}
        />

        <Typography.Title
          level={5}
          className="!font-semibold !text-base-color !mt-4"
        >
          Duration
        </Typography.Title>

        <div className="grid grid-cols-2 gap-4">
          <ReuseInput
            name="durationUnit"
            placeholder="Enter Duration"
            type="number"
            rules={[{ required: true, message: "Duration is required" }]}
          />
          <ReuseSelect
            name="durationType"
            placeholder="Select Duration Type"
            rules={[{ required: true, message: "Duration Type is required" }]}
            options={[
              { label: "Weeks", value: "Weeks" },
              { label: "Days", value: "Days" },
              { label: "Hours", value: "Hours" },
              { label: "Months", value: "Months" },
            ]}
          />
        </div>

        <ReuseUpload
          label="Upload Image"
          name="image"
          buttonText="Upload Image"
          accept="image/png, image/jpeg"
          maxCount={1}
          labelClassName="!font-semibold"
        />

        <ReuseButton htmlType="submit" variant="secondary" className="mt-2">
          Add Package
        </ReuseButton>
      </ReusableForm>
    </Modal>
  );
};

export default ProfessionalAddNewPackageModal;
