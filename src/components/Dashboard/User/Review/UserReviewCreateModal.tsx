/* eslint-disable @typescript-eslint/no-explicit-any */
import ReuseButton from "@/components/ui/Button/ReuseButton";
import ReusableForm from "@/components/ui/Form/ReuseForm";
import ReuseInput from "@/components/ui/Form/ReuseInput";
import { addNewReview } from "@/services/ReviewService/ReviewServiceApi";
import tryCatchWrapper from "@/utils/tryCatchWrapper";
import { Form, Modal, Rate, Typography } from "antd";
interface UserReviewCreateModalProps {
  isViewModalVisible: boolean;
  handleCancel: () => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  currentRecord: any | null;
}
const UserReviewCreateModal: React.FC<UserReviewCreateModalProps> = ({
  isViewModalVisible,
  handleCancel,
  currentRecord,
}) => {
  const [form] = Form.useForm();

  const onSubmit = async (values: any) => {
    console.log("values", values);

    const data = {
      rating: values.review,
      message: values.message,
    };

    console.log(data);
    const res = await tryCatchWrapper(
      addNewReview,
      { body: data, params: currentRecord?._id },
      "Providing Review...",
      "Review Provided Successfully!",
      "Something went wrong! Please try again."
    );

    if (res?.success) {
      handleCancel();
    }
  };
  return (
    <Modal
      open={isViewModalVisible}
      onCancel={handleCancel}
      footer={null}
      centered
      className="lg:!w-[600px]"
    >
      <div className="p-5">
        <div className="text-base-color">
          <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-secondary-color">
            Share Your Experience
          </h3>
        </div>
        <ReusableForm
          handleFinish={onSubmit}
          defaultValues={currentRecord}
          form={form}
        >
          <div className="mt-5">
            <Typography.Title
              className="!text-base-color !font-normal"
              level={5}
            >
              Rating
            </Typography.Title>
            <Form.Item name={"review"} rules={[{ required: true }]}>
              <Rate
                className="!text-3xl"
                allowHalf
                value={currentRecord?.review}
              />
            </Form.Item>
          </div>
          <ReuseInput
            rows={4}
            inputType="textarea"
            label="Review"
            name="message"
            type="text"
            placeholder="Enter Review"
          />
          <ReuseButton variant="secondary" htmlType="submit">
            Submit
          </ReuseButton>
        </ReusableForm>
      </div>
    </Modal>
  );
};

export default UserReviewCreateModal;
