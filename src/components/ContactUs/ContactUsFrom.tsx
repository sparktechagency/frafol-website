"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */

import { Form, Input, Typography } from "antd";
import ReuseButton from "../ui/Button/ReuseButton";

const ContactUsForm = () => {
  const [form] = Form.useForm();
  const TextArea = Input.TextArea;

  const onFinish = async (values: any) => {
    console.log("Received values of Contact form:", values);
  };
  return (
    <Form form={form} layout="vertical" className="" onFinish={onFinish}>
      {/* Full Name Input */}
      <div>
        <Typography.Title level={5} style={{ color: "#222222" }}>
          Name
        </Typography.Title>
        <Form.Item
          name="name"
          className="text-base-color"
          rules={[
            {
              required: true,
              message: "Full Name is Required",
            },
          ]}
        >
          <Input
            placeholder="Enter your full name"
            className="!py-2 !px-3 !text-base !bg-[#EFEFEF] border !border-[#EFEFEF] outline-none !ring-0 !text-base-color rounded-lg "
          />
        </Form.Item>
      </div>
      {/* Email Input */}
      <div>
        <Typography.Title level={5} style={{ color: "#222222" }}>
          Email
        </Typography.Title>
        <Form.Item
          name="email"
          className="text-base-color"
          rules={[
            {
              required: true,
              message: "Email is Required",
            },
          ]}
        >
          <Input
            placeholder="Enter your email"
            className="!py-2 !px-3 !text-base !bg-[#EFEFEF] border !border-[#EFEFEF] outline-none !ring-0 !text-base-color rounded-lg "
          />
        </Form.Item>
      </div>
      {/* Message Input */}
      <div>
        <Typography.Title level={5} style={{ color: "#222222" }}>
          Message
        </Typography.Title>
        <Form.Item
          name="message"
          className="text-base-color"
          rules={[
            {
              required: true,
              message: "Message is Required",
            },
          ]}
        >
          <TextArea
            placeholder="Enter your Message"
            rows={4}
            className="!py-2 !px-3 !text-base !bg-[#EFEFEF] border !border-[#EFEFEF] outline-none !ring-0 !text-base-color rounded-lg "
          />
        </Form.Item>
      </div>

      <Form.Item className="lg:col-span-2">
        <ReuseButton variant="secondary">
          <span className="text-white">Send Message</span>
        </ReuseButton>
      </Form.Item>
    </Form>
  );
};

export default ContactUsForm;
