/* eslint-disable @typescript-eslint/no-explicit-any */
import { Form, Modal } from "antd";
import ReusableForm from "@/components/ui/Form/ReuseForm";
import ReuseInput from "@/components/ui/Form/ReuseInput";
import ReuseDatePicker from "@/components/ui/Form/ReuseDatePicker";
import ReuseButton from "@/components/ui/Button/ReuseButton";

const EventCreateOrderModal = ({
  isViewModalVisible,
  handleCancel,
  currentRecord,
}: any) => {
  const [form] = Form.useForm();

  const onSubmit = (values: any) => {
    console.log(values);
  };
  console.log(currentRecord);
  return (
    <Modal
      open={isViewModalVisible}
      onCancel={handleCancel}
      footer={null}
      centered
      className="lg:!w-[600px]"
    >
      <h3 className="text-base sm:text-lg lg:text-xl xl:text-2xl font-bold mb-2">
        Create Order for Lívia Nováková
      </h3>
      <h3 className="text-xs sm:text-sm lg:text-base xl:text-lg font-medium mb-5">
        Fill in the pricing and delivery details for this booking.
      </h3>

      <ReusableForm form={form} handleFinish={onSubmit}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <ReuseInput
            name="price"
            label="Total Price ($)"
            placeholder="Enter Total Price"
            rules={[{ required: true, message: "Total Price is required" }]}
            labelClassName="!font-semibold"
          />
          <ReuseDatePicker
            name="date"
            label="Delivery Date"
            rules={[{ required: true, message: "Delivery Date is required" }]}
            labelClassName="!font-semibold"
          />
          <ReuseInput
            name="vatAmount"
            label="VAT Amount (%) (Optional)"
            placeholder="Enter VAT Amount"
            // rules={[{ required: true, message: "VAT Amount is required" }]}
            labelClassName="!font-semibold"
          />
        </div>
        <ReuseInput
          inputType="textarea"
          rows={4}
          name="description"
          label="Description"
          placeholder="Enter Description"
          rules={[{ required: true, message: "Description is required" }]}
          labelClassName="!font-semibold mt-4"
        />
        <ReuseButton htmlType="submit" variant="secondary" className="mt-2">
          Create Order
        </ReuseButton>
      </ReusableForm>
    </Modal>
  );
};

export default EventCreateOrderModal;
