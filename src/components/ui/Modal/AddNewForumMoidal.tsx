/* eslint-disable @typescript-eslint/no-explicit-any */
import { Form, Modal } from "antd";
import ReusableForm from "../Form/ReuseForm";
import ReuseInput from "../Form/ReuseInput";
import ReuseButton from "../Button/ReuseButton";
import ReuseUpload from "../Form/ReuseUpload";

interface AddNewForumMoidalProps {
  isAddModalVisible: boolean;
  handleCancel: () => void;
}

const AddNewForumMoidal: React.FC<AddNewForumMoidalProps> = ({
  isAddModalVisible,
  handleCancel,
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
      className="lg:!w-[500px]"
    >
      <div className="p-5 text-base-color">
        <h1 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-5">
          Create New Topic
        </h1>
        <ReusableForm form={form} handleFinish={onSubmit}>
          <ReuseInput
            name="title"
            label="Titles"
            placeholder="Enter Titles"
            rules={[{ required: true, message: "Titles is required" }]}
            labelClassName="!font-semibold"
          />
          <ReuseInput
            type="number"
            name="content"
            label="Content"
            placeholder="Enter Content"
            rules={[{ required: true, message: "Content is required" }]}
            labelClassName="!font-semibold"
          />
          <ReuseUpload
            label="Upload Image (Optional)"
            name="image"
            buttonText="Upload Image"
            accept="image/png, image/jpeg"
            maxCount={1}
            labelClassName="!font-semibold"
          />

          <ReuseButton htmlType="submit" variant="secondary" className="mt-2">
            Add
          </ReuseButton>
        </ReusableForm>
      </div>
    </Modal>
  );
};

export default AddNewForumMoidal;
