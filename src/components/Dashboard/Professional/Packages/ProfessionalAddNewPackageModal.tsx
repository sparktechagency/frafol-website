/* eslint-disable @typescript-eslint/no-explicit-any */
import ReuseButton from "@/components/ui/Button/ReuseButton";
import ReusableForm from "@/components/ui/Form/ReuseForm";
import ReuseInput from "@/components/ui/Form/ReuseInput";
import ReuseSelect from "@/components/ui/Form/ReuseSelect";
import ReuseUpload from "@/components/ui/Form/ReuseUpload";
import { Form, Modal } from "antd";
import React from "react";

const ProfessionalAddNewPackageModal = ({
  isAddModalVisible,
  handleCancel,
}: {
  isAddModalVisible: boolean;
  handleCancel: () => void;
}) => {
  const [form] = Form.useForm();

  const onSubmit = (values: any) => {
    console.log(values);
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
          name="role"
          label="Select Category"
          placeholder="Select Category"
          rules={[{ required: true, message: "Category is required" }]}
          labelClassName="!font-semibold"
          options={[
            { label: "Photography", value: "photography" },
            { label: "Videography", value: "videography" },
          ]}
        />
        <ReuseInput
          name="price"
          label="Package Price"
          placeholder="Enter Package Price"
          rules={[{ required: true, message: "Package Price is required" }]}
          labelClassName="!font-semibold"
        />
        <ReuseInput
          name="VATAmount "
          label="VAT Amount % (optional) "
          placeholder="Enter VAT Amount"
          labelClassName="!font-semibold"
        />
        <ReuseSelect
          name="deliveryTime"
          label="Delivery Time (Weekly)"
          placeholder="Select Delivery Time"
          rules={[{ required: true, message: "Delivery Time is required" }]}
          labelClassName="!font-semibold"
          options={[
            { label: "1", value: "1 Week" },
            { label: "2", value: "2 Weeks" },
            { label: "3", value: "3 Weeks" },
            { label: "4", value: "4 Weeks" },
          ]}
        />

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
