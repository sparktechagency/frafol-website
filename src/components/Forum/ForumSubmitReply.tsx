"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import ReusableForm from "../ui/Form/ReuseForm";
import ReuseInput from "../ui/Form/ReuseInput";
import ReuseButton from "../ui/Button/ReuseButton";

const ForumSubmitReply = () => {
  const onSubmit = (values: any) => {
    console.log(values);
  };
  return (
    <ReusableForm handleFinish={onSubmit} className="!mt-10 w-full">
      <ReuseInput
        name="message"
        inputType="textarea"
        rows={4}
        placeholder="Write your reply here..."
      />
      <div className="flex justify-end">
        <ReuseButton htmlType="submit" variant="secondary" className="w-fit">
          Post Reply
        </ReuseButton>
      </div>
    </ReusableForm>
  );
};

export default ForumSubmitReply;
