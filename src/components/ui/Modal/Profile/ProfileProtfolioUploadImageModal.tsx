/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Form, Modal } from "antd";
import ReusableForm from "../../Form/ReuseForm";
import ReuseButton from "../../Button/ReuseButton";
import ReuseUpload from "../../Form/ReuseUpload";
import tryCatchWrapper from "@/utils/tryCatchWrapper";
import { updateBannerImage, updateGallery, updateIntroVIdeo } from "@/services/ProfileService/ProfileServiceApi";

interface ProfileProtfolioUploadImageModalProps {
  isModalVisible: boolean;
  handleCancel: () => void;
  type?: string;
}

const ProfileProtfolioUploadImageModal: React.FC<
  ProfileProtfolioUploadImageModalProps
> = ({ isModalVisible, handleCancel, type }) => {
  const [form] = Form.useForm();

  const onSubmit = async (values: any) => {
    const formData = new FormData();

    console.log(values)

    if (type === "both") {
      values?.image?.forEach((file: any) => {
        formData.append("gallery", file?.originFileObj);
      });

      const res = await tryCatchWrapper(
        updateGallery,
        { body: formData },
        {
          toastLoadingMessage: "Uploading Image...",
          toastSuccessMessage: "Gallery updated successfully!",
          toastErrorMessage: "Something went wrong! Please try again.",
        }
      );

      if (res?.success) {
        handleModalCancel();
      }
    } else if (type === "video") {

      if (values?.image) {
        formData.append("video", values?.image?.[0]?.originFileObj);
      }

      const res = await tryCatchWrapper(
        updateIntroVIdeo,
        { body: formData },
        {
          toastLoadingMessage: "Uploading Intro Video...",
          toastSuccessMessage: "Gallery updated successfully!",
          toastErrorMessage: "Something went wrong! Please try again.",
        }
      );

      if (res?.success) {
        handleModalCancel();
      }
    } else {
      values?.image?.forEach((file: any) => {
        formData.append("gallery", file?.originFileObj);
      });

      const res = await tryCatchWrapper(
        updateBannerImage,
        { body: formData },
        {
          toastLoadingMessage: "Uploading Intro Video...",
          toastSuccessMessage: "Gallery updated successfully!",
          toastErrorMessage: "Something went wrong! Please try again.",
        }
      );

      if (res?.success) {
        handleModalCancel();
      }
    }
  };

  const handleModalCancel = () => {
    form.resetFields();
    handleCancel();
  };



  return (
    <Modal
      open={isModalVisible}
      onCancel={handleModalCancel}
      footer={null}
      centered
      className="lg:!w-[700px]"
    >
      <div className="p-5 text-base-color">
        <h1 className="text-lg sm:text-xl lg:text-2xl font-bold mb-5">
          Protfolio Upload
        </h1>

        <p className="text-sm sm:text-base lg:text-lg xl:text-xl font-semibold mb-5">
          Upload your {type === "both" ? "Gallery Images and Video" : type === "video" ? "Intro Video" : "Banner Image"}
        </p>

        <ReusableForm form={form} handleFinish={onSubmit}>
          <ReuseUpload
            name="image"
            buttonText={type === "video" ? "Upload Video (Max 25mb)" : "Upload Image"}
            label={type === "video" ? "Video" : "Image"}
            labelClassName="!font-semibold"
            maxCount={type === "video" ? 1 : 10}
            accept={type === "both" ? "image/*,video/*" : type === "video" ? "video/*" : "image/*"}
            multiple={type === "video" ? false : true}
            rules={[{ required: true, message: type === "video" ? "Video is required" : "Image is required" }]}
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
