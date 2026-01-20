/* eslint-disable @typescript-eslint/no-explicit-any */
import { Form, Modal } from "antd";
import ReusableForm from "../../Form/ReuseForm";
import ReuseInput from "../../Form/ReuseInput";
import ReuseButton from "../../Button/ReuseButton";
import ReuseUpload from "../../Form/ReuseUpload";
import { useRef, useState } from "react";
import JoditEditor from "jodit-react";
import tryCatchWrapper from "@/utils/tryCatchWrapper";
import { addNewCommunityPost } from "@/services/CommunityForumService/CommunityForumServiceApi";

interface AddNewForumMoidalProps {
  isAddModalVisible: boolean;
  handleCancel: () => void;
}

const AddNewForumMoidal: React.FC<AddNewForumMoidalProps> = ({
  isAddModalVisible,
  handleCancel,
}) => {
  const [form] = Form.useForm();
  const editor = useRef(null);
  const [content, setContent] = useState("");

  const onSubmit = async (values: any) => {
    const formData = new FormData();

    const data = {
      title: values.title,
      text: content,
      // shortText: shortText,
    };

    formData.append("data", JSON.stringify(data));

    if (values.image) {
      values?.image?.forEach((file: any) => {
        formData.append("images", file?.originFileObj);
      });
    }

    const res = await tryCatchWrapper(
      addNewCommunityPost,
      { body: formData },
      {
        toastLoadingMessage: "Uploading Your Post...",
        toastSuccessMessage: "Your post uploaded successfully!",
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
      onCancel={handleCancel}
      footer={null}
      centered
      className="lg:!w-[800px]"
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
          {/* <ReuseInput
            type="textarea"
            inputType="textarea"
            rows={5}
            name="content"
            label="Content"
            placeholder="Enter Content"
            rules={[{ required: true, message: "Content is required" }]}
            labelClassName="!font-semibold"
          /> */}

          <div className="my-10">
            <JoditEditor
              ref={editor}
              value={content}
              config={{
                height: 500,
                theme: "light",
                readonly: false,
                toolbarAdaptive: false,
                toolbarSticky: false,

                // 🔒 Remove image, video, file, voice, and print options
                removeButtons: [
                  "image",
                  "file",
                  "video",
                  "audio",
                  "voice",
                  "print",
                  "fullsize",
                  "about",
                  "source", // hide HTML source
                  // "hr",
                  "speechRecognize",
                  "spellcheck",

                  "superscript",
                  "subscript",
                  // "link",
                  // "unlink",
                  "strike",
                  "indent",
                  "outdent",
                  // "fontsize",
                  // "font",
                  "brush",
                  // "undo",
                  // "redo",
                  // "align",
                  "cut",
                  "copy",
                  "paste",
                  "selectall",
                  "find",
                  "ai",
                  "aiassistant",
                  "specialchars",
                  "insertClassName",
                ],

                hidePoweredByJodit: true,
              }}
              onBlur={(newContent) => setContent(newContent)}
            />
          </div>
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
