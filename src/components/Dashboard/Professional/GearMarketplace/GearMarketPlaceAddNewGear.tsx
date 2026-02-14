/* eslint-disable @typescript-eslint/no-explicit-any */
import ReuseButton from "@/components/ui/Button/ReuseButton";
import ReusableForm from "@/components/ui/Form/ReuseForm";
import ReuseInput from "@/components/ui/Form/ReuseInput";
import ReuseSelect from "@/components/ui/Form/ReuseSelect";
import ReuseUpload from "@/components/ui/Form/ReuseUpload";
import { addNewGear } from "@/services/GearService/GearServiceApi";
import { ICategory } from "@/types";
import tryCatchWrapper from "@/utils/tryCatchWrapper";
import { Form, Modal } from "antd";
import React, { useEffect } from "react";

const GearMarketPlaceAddNewGear = ({
  isAddModalVisible,
  handleCancel,
  categories,
  serviceCharge,
  minServiceCharge
}: {
  isAddModalVisible: boolean;
  handleCancel: () => void;
  categories: ICategory[];
  serviceCharge: number;
  minServiceCharge: number
}) => {
  const [form] = Form.useForm();
  const priceValue = Form.useWatch("price", form) || 0;
  const vatAmountValue = Form.useWatch("VATAmount", form) || 0;

  useEffect(() => {
    const serviceChagePercentage = serviceCharge / 100;
    const vatAmountPercentage = vatAmountValue / 100;

    const serviceChargeAmmount = Number(priceValue) * serviceChagePercentage;

    const totalServiceCharge = serviceChargeAmmount > minServiceCharge ? serviceChargeAmmount : minServiceCharge;
    const totalVatAmount = Number(priceValue) * vatAmountPercentage;

    const mainPriceValue =
      Number(priceValue) + totalServiceCharge + totalVatAmount;

    form.setFieldValue("mainPrice", Number(mainPriceValue?.toFixed(2)));
  }, [form, minServiceCharge, priceValue, serviceCharge, vatAmountValue]);

  const onSubmit = async (values: any) => {
    const formData = new FormData();
    const data = {
      name: values.name,
      categoryId: values.categoryId,
      price: Number(values.price),
      description: values.description,
      condition: values.condition,
      mainPrice: Number(values.mainPrice),
      shippingCompany: {
        name: values.shippingCompany,
        price: Number(values.shippingPrice),
      },
      vatAmount: values.VATAmount || 0,
      extraInformation: values.extraInformation || "",
    };

    formData.append("data", JSON.stringify(data));

    if (values.image) {
      values?.image?.forEach((file: any) => {
        formData.append("gallery", file?.originFileObj);
      });
    }

    const res = await tryCatchWrapper(
      addNewGear,
      { body: formData },
      {
        toastLoadingMessage: "Adding new gear...",
        toastSuccessMessage: "New gear added successfully!",
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
      open={isAddModalVisible}
      onCancel={() => {
        form.resetFields();
        handleCancel();
      }}
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
              name="categoryId"
              label="Product Category"
              placeholder="Select Category"
              rules={[{ required: true, message: "Category is required" }]}
              labelClassName="!font-semibold"
              options={categories?.map((category) => ({
                label: category?.title,
                value: category?._id,
              }))}
            />
            <ReuseInput
              name="price"
              label="Item Price"
              placeholder="Enter Item Price"
              type="number"
              rules={[{ required: true, message: "Item Price is required" }]}
              labelClassName="!font-semibold"
            />
            <ReuseInput
              name="VATAmount"
              label="VAT Amount % (optional) "
              placeholder="Enter VAT Amount"
              type="number"
              labelClassName="!font-semibold"
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
              type="number"
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
              maxCount={5}
              labelClassName="!font-semibold"
            />
            {/* <ReuseInput
              inputType="textarea"
              rows={4}
              name="extraInformation"
              label="Extra Information (Optional)"
              placeholder="Enter Extra Information"
              labelClassName="!font-semibold mt-4"
            /> */}
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
