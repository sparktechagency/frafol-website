"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import ReusableForm from "../ui/Form/ReuseForm";
import ReuseInput from "../ui/Form/ReuseInput";
import ReuseButton from "../ui/Button/ReuseButton";
import { Checkbox, Form } from "antd";
import tryCatchWrapper from "@/utils/tryCatchWrapper";
import { addNewComment } from "@/services/ComentsService/ComentsServiceApi";

const ForumSubmitReply = ({ id }: { id: string }) => {
  const [form] = Form.useForm();
  const isChecked = Form?.useWatch("isAnonymous", form);
  const onSubmit = async (values: any) => {
    const data = {
      ...values,
      isAnonymous: isChecked,
    };

    const res = await tryCatchWrapper(
      addNewComment,
      { body: data, params: { id } },
      "Please wait a moment...",
      "Your comment posted successfully!",
      "Something went wrong! Please try again."
    );

    // console.log("Add New Gear Response:", res);

    if (res?.success) {
      form.resetFields();
    }
  };
  return (
    <ReusableForm form={form} handleFinish={onSubmit} className="!mt-5 w-full">
      <ReuseInput
        name="text"
        inputType="textarea"
        rows={4}
        placeholder="Write your reply here..."
      />
      <Form.Item name="isAnonymous">
        <Checkbox>Comment Annonimously</Checkbox>
      </Form.Item>
      <div className="flex justify-end">
        <ReuseButton htmlType="submit" variant="secondary" className="w-fit">
          Post Comment
        </ReuseButton>
      </div>
    </ReusableForm>
  );
};

export default ForumSubmitReply;
