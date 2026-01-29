/* eslint-disable @typescript-eslint/no-explicit-any */
import { Checkbox, Form, Modal, Typography } from "antd";
import ReuseButton from "../Button/ReuseButton";
import ReusableForm from "../Form/ReuseForm";
import ReuseInput from "../Form/ReuseInput";
import tryCatchWrapper from "@/utils/tryCatchWrapper";
import { addReport } from "@/services/Others/OthersApi";
import { useGetUserData } from "@/context/useGetUserData";
import { useEffect } from "react";
import ReuseUpload from "../Form/ReuseUpload";

interface ReportModalProps {
  isReportModalVisible: boolean;
  handleCancel: () => void;
  description?: string;
}

const ReportModal: React.FC<ReportModalProps> = ({
  isReportModalVisible,
  handleCancel,
  description = "Are You Sure You want to Reject This Order ?",
}) => {
  const user = useGetUserData();
  const [form] = Form.useForm();
  //   const [blockUser] = useBlockUserMutation();

  useEffect(() => {
    if (isReportModalVisible) {
      form.setFieldsValue({
        name: user?.name,
        email: user?.email,
      });
    }
  }, [form, isReportModalVisible, user?.email, user?.name]);

  const submit = async (values: any) => {

    const formData = new FormData();
    console.log(values)
    const data = {
      name: values.name,
      email: values.email,
      url: values.url,
      reason: values.reason,
      message: values.message,
      agreement: values.agreement
    };
    if (values.image) {
      formData.append("image", values.image[0]?.originFileObj);
    }
    formData.append("data", JSON.stringify(data));



    const res = await tryCatchWrapper(
      addReport,
      { body: formData },
      {
        toastLoadingMessage: "Wait a moment...",
        toastSuccessMessage: "submitted successfully!",
        toastErrorMessage: "Something went wrong! Please try again.",
      }
    );

    if (res?.success) {
      handleCancel();
      form.resetFields();
    }
  };

  return (
    <Modal
      // title="Confirm Delete"
      open={isReportModalVisible}
      onCancel={() => {
        handleCancel();
        form.resetFields();
      }}
      className="W-[90%] lg:w-[768px]!"
      centered
      // styles.body={{ textAlign: "center" }}
      footer={null}
    >
      <p className="text-3xl font-semibold pt-10 pb-4 text-base-color">
        {description}
      </p>
      <ReusableForm handleFinish={submit} form={form}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <ReuseInput
            name="name"
            label="Full Name"
            placeholder="Enter Full Name"
            rules={[{ required: true, message: "Full Name is required" }]}
          />
          <ReuseInput
            inputType=""
            name="email"
            type="email"
            label="Email"
            disabled
            placeholder="Enter Email"
            rules={[{ required: true, message: "Email is required" }]}
          />
        </div>
        <ReuseInput
          name="url"
          type="url"
          label="Website URL Address"
          placeholder="Enter Website URL Address"
          rules={[{ required: true, message: "Website URL Address is required" }]}
        />
        <ReuseInput
          inputType="textarea"
          name="reason"
          label="Additional information allowing the identification of the illegal content"
          placeholder="Enter Reason"
          rules={[{ required: true, message: "Reason is required" }]}
        />
        <ReuseUpload
          name="image"
          label="Attach a screenshot of the illegal content (optional)"
          multiple={false}
          maxCount={1}
        />
        <Typography.Title level={4}>Your message</Typography.Title>
        <ReuseInput
          inputType="textarea"
          name="message"
          Typolevel={5}
          label="Please provide all reasons, including a sufficiently substantiated explanation of those reasons, why you consider the information you have provided to constitute illegal content."
          labelClassName="text-base-color/70!"
          placeholder="Enter Your message"
          rules={[{ required: true, message: "message is required" }]}
        />
        <Form.Item
          className="!mb-5"
          name="agreement"
          valuePropName="checked"
          rules={[
            {
              validator: (_, value) => {
                if (value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error("Please confirm the agreement!"));
              },
            },
          ]}
        >
          <Checkbox className="">
            hereby confirm that I genuinely believe that the information and statements contained in this notice are accurate and complete.
          </Checkbox>
        </Form.Item>
        <ReuseButton
          htmlType="submit"
          variant="error"
          className="w-full! bg-secondary-color!"
        >
          Submit
        </ReuseButton>
      </ReusableForm>
    </Modal>
  );
};

export default ReportModal;
