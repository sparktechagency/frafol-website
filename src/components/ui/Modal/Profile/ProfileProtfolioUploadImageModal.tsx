/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Form, Modal } from "antd";
import ReusableForm from "../../Form/ReuseForm";
import ReuseButton from "../../Button/ReuseButton";
import ReuseUpload from "../../Form/ReuseUpload";
import tryCatchWrapper from "@/utils/tryCatchWrapper";
import { updateGallery } from "@/services/ProfileService/ProfileServiceApi";

interface ProfileProtfolioUploadImageModalProps {
  isModalVisible: boolean;
  handleCancel: () => void;
}

const ProfileProtfolioUploadImageModal: React.FC<
  ProfileProtfolioUploadImageModalProps
> = ({ isModalVisible, handleCancel }) => {
  const [form] = Form.useForm();

  const onSubmit = async (values: any) => {
    const formData = new FormData();

    values?.image?.forEach((file: any) => {
      formData.append("gallery", file?.originFileObj);
    });

    const res = await tryCatchWrapper(
      updateGallery,
      { body: formData },
      "Uploading Image...",
      "Gallery updated successfully!",
      "Something went wrong! Please try again."
    );

    if (res?.success) {
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
          Protfolio Upload
        </h1>

        <p className="text-sm sm:text-base lg:text-lg xl:text-xl font-semibold mb-5">
          Upload your Protfolio
        </p>

        <ReusableForm form={form} handleFinish={onSubmit}>
          <ReuseUpload
            name="image"
            label="Image"
            labelClassName="!font-semibold"
            maxCount={10}
            accept="image/*"
            multiple={true}
            rules={[{ required: true, message: "Image is required" }]}
          />
          <ReuseButton htmlType="submit" variant="secondary" className="mt-2">
            Upload
          </ReuseButton>
        </ReusableForm>
      </div>
    </Modal>
  );
};

export default ProfileProtfolioUploadImageModal;
