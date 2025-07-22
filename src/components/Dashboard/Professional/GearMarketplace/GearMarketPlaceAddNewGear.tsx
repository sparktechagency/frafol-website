/* eslint-disable @typescript-eslint/no-explicit-any */
import ReuseButton from "@/components/ui/Button/ReuseButton";
import ReusableForm from "@/components/ui/Form/ReuseForm";
import ReuseInput from "@/components/ui/Form/ReuseInput";
import ReuseSelect from "@/components/ui/Form/ReuseSelect";
import ReuseUpload from "@/components/ui/Form/ReuseUpload";
import { Form, Modal } from "antd";
import React from "react";

const GearMarketPlaceAddNewGear = ({
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
        Add New Gear
      </h3>

      <ReusableForm form={form} handleFinish={onSubmit}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="p-2 rounded border border-[#E1E1E1]">
            <h3 className="text-xs sm:text-sm lg:text-base xl:text-lg font-medium mb-5">
              Gear Information
            </h3>
            <ReuseInput
              name="name"
              label="Product Name"
              placeholder="Enter Product Name"
              rules={[{ required: true, message: "Product Name is required" }]}
              labelClassName="!font-semibold"
            />
            <ReuseSelect
              name="category"
              label="Product Category"
              placeholder="Select Category"
              rules={[{ required: true, message: "Category is required" }]}
              labelClassName="!font-semibold"
              options={[
                { label: "Camera", value: "camera" },
                { label: "Lens", value: "lens" },
                { label: "Tripod", value: "tripod" },
                { label: "Lighting", value: "lighting" },
              ]}
            />
            <ReuseInput
              name="price"
              label="Item Price"
              placeholder="Enter Item Price"
              rules={[{ required: true, message: "Item Price is required" }]}
              labelClassName="!font-semibold"
            />
            <ReuseInput
              inputType="textarea"
              rows={4}
              name="description"
              label="Product Description"
              placeholder="Enter Description"
              rules={[{ required: true, message: "Description is required" }]}
              labelClassName="!font-semibold mt-4"
            />
            <ReuseSelect
              name="condition"
              label="Condition"
              placeholder="Select Condition"
              rules={[{ required: true, message: "Condition is required" }]}
              labelClassName="!font-semibold"
              options={[
                { label: "New", value: "new" },
                { label: "Used", value: "used" },
              ]}
            />
            <ReuseInput
              name="shippingCompany"
              label="Shipping Company"
              placeholder="Enter Shipping Company"
              rules={[
                { required: true, message: "Shipping Company is required" },
              ]}
              labelClassName="!font-semibold"
            />
            <ReuseInput
              name="shippingPrice"
              label="Shipping Price"
              placeholder="Enter Shipping Price"
              rules={[
                { required: true, message: "Shipping Price is required" },
              ]}
              labelClassName="!font-semibold"
            />
          </div>
          <div className="p-2 rounded border border-[#E1E1E1]">
            <ReuseUpload
              label="Upload Image"
              name="image"
              buttonText="Upload Image"
              accept="image/png, image/jpeg"
              maxCount={1}
              labelClassName="!font-semibold"
            />
            <ReuseInput
              inputType="textarea"
              rows={4}
              name="extraInformation"
              label="Extra Information (Optional)"
              placeholder="Enter Extra Information"
              labelClassName="!font-semibold mt-4"
            />
          </div>
        </div>

        <ReuseButton htmlType="submit" variant="secondary" className="mt-2">
          Add Gear
        </ReuseButton>
      </ReusableForm>
    </Modal>
  );
};

export default GearMarketPlaceAddNewGear;
