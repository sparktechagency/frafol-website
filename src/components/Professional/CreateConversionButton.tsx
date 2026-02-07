"use client";
import { createConversation } from "@/services/ConversationService/ConversationServiceApi";
import { IProfessionalUser } from "@/types";
import tryCatchWrapper from "@/utils/tryCatchWrapper";
import React from "react";
import ReuseButton from "../ui/Button/ReuseButton";
import { AiFillMessage } from "react-icons/ai";
import { useRouter } from "next/navigation";

const CreateConversionButton = ({
  professionalUser,
}: {
  professionalUser: IProfessionalUser;
}) => {
  const router = useRouter();
  const createChat = async (data: IProfessionalUser) => {
    const res = await tryCatchWrapper(
      createConversation,
      { body: { users: [data?._id] } },
      {
        toastLoadingMessage: "Creating Conversation... ",
        toastSuccessMessage: "Conversation Created Successfully! ",
        toastErrorMessage: "Something went wrong! Please try again ",
      }
    );

    if (res?.success) {
      console.log(res)
      router.push(`/message`);
      // ?room=${res?.data?._id}
    }
  };

  return (
    <ReuseButton
      variant="secondary"
      className="!py-4.5 !px-4 !text-xs sm:!text-sm lg:!text-base flex items-center"
      onClick={() => createChat(professionalUser)}
    >
      <AiFillMessage /> Contact
    </ReuseButton>
  );
};

export default CreateConversionButton;
