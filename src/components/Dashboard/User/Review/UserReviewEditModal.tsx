import ReuseButton from "@/components/ui/Button/ReuseButton";
import ReusableForm from "@/components/ui/Form/ReuseForm";
import ReuseInput from "@/components/ui/Form/ReuseInput";
import { Form, Modal, Rate, Typography } from "antd";
interface UserReviewEditModalProps {
  isViewModalVisible: boolean;
  handleCancel: () => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  currentRecord: any | null;
}
const UserReviewEditModal: React.FC<UserReviewEditModalProps> = ({
  isViewModalVisible,
  handleCancel,
  currentRecord,
}) => {
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
            {currentRecord === null ? "Write Review" : "Edit Review"}
          </h3>
        </div>
        <ReusableForm handleFinish={() => {}} defaultValues={currentRecord}>
          <div className="mt-5">
            <Typography.Title
              className="!text-base-color !font-normal"
              level={5}
            >
              Rating
            </Typography.Title>
            <Form.Item name={"review"} rules={[{ required: true }]}>
              <Rate allowHalf value={currentRecord?.review} />
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

export default UserReviewEditModal;
