/* eslint-disable @typescript-eslint/no-explicit-any */
import { Form, Modal } from "antd";
import ReuseButton from "../Button/ReuseButton";
import ReusableForm from "../Form/ReuseForm";
import ReuseInput from "../Form/ReuseInput";
import tryCatchWrapper from "@/utils/tryCatchWrapper";
import { addReport } from "@/services/Others/OthersApi";

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
  const [form] = Form.useForm();
  //   const [blockUser] = useBlockUserMutation();

  const submit = async (values: any) => {
    const res = await tryCatchWrapper(
      addReport,
      { body: values },
      "Wait a moment...",
      "submitted successfully!",
      "Something went wrong! Please try again."
    );

    if (res?.success) {
      handleCancel();
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
      okText="Cancle Order"
      centered
      // styles.body={{ textAlign: "center" }}
      footer={null}
    >
      <p className="text-3xl font-semibold pt-10 pb-4 text-base-color">
        {description}
      </p>
      <ReusableForm handleFinish={submit} form={form}>
        <ReuseInput
          inputType="textarea"
          name="reason"
          label="Reason"
          placeholder="Enter Reason"
          rules={[{ required: true, message: "Reason is required" }]}
        />

        <ReuseButton
          htmlType="submit"
          variant="error"
          className="!px-6 !py-5 w-fit flex items-center justify-center gap-2"
        >
          Submit
        </ReuseButton>
      </ReusableForm>
    </Modal>
  );
};

export default ReportModal;
