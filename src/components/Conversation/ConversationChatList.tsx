/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useEffect, useState, useMemo, useCallback } from "react";
import ConversationChatListCard from "./ConversationChatListCard";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  selectSelectedChatUser,
  setOnlineUsers,
} from "../../redux/features/conversation/conversationSlice";
import { useSocket } from "../../context/socket-context";
import { useUser } from "@/context/UserContext";
import { IConversation } from "@/types/conversation.type";
import SearchInput from "../ui/Form/ReuseSearchInput";

const ConversationChatList = ({
  conversation,
  onlineUsers,
}: {
  conversation: IConversation[];
  onlineUsers: any;
}) => {
  const user = useUser();
  const socket = useSocket()?.socket;
  const dispatch = useAppDispatch();

  const seletedConversation = useAppSelector(selectSelectedChatUser);
  const [chatList, setChatList] = useState<IConversation[]>([]);

  console.log("chatList", chatList);

  const handleNewMessage = useCallback((message: any) => {
    const { chatId, text, sender, time } = message;
    console.log(message);

    // Find if this conversation already exists
    setChatList((prevChatList: IConversation[]) => {
      console.log(prevChatList);
      const existingIndex = prevChatList.findIndex(
        (item) => item.chat._id === chatId
      );

      if (existingIndex !== -1) {
        // Update the existing conversation's lastMessage and updatedAt
        const updatedList = [...prevChatList];
        updatedList[existingIndex] = {
          ...updatedList[existingIndex],
          lastMessage: text,
          lastMessageSender: sender._id,
          lastMessageCreatedAt: time,
          unreadMessageCount: updatedList[existingIndex].unreadMessageCount + 1,
        };

        console.log(updatedList);
        return updatedList;
      } else {
        // If this is a new conversation
        const newConversation: IConversation = {
          chat: {
            _id: chatId,
            users: [sender], // you might need to merge with self if needed
            createdBy: sender._id,
            unreadCounts: 1,
            blockedUsers: null,
            createdAt: time,
            updatedAt: time,
            __v: 0,
          },
          lastMessage: text,
          message: text,
          lastMessageSender: sender._id,
          unreadMessageCount: 1,
          lastMessageCreatedAt: time,
        };
        console.log(newConversation);

        return [newConversation, ...prevChatList];
      }
    });
  }, []);

  useEffect(() => {
    if (!socket) {
      console.warn("❌ Socket not ready yet.");
      return;
    }

    if (!socket.connected) {
      socket.connect();
    }
    console.log("🧠 Checking socket:", socket);

    socket.on(`newMessage`, (message: any) => {
      console.log(" New Message Received from socket:", message);
      handleNewMessage(message);
    });
    socket.on("onlineUser", (online: any) => {
      dispatch(setOnlineUsers(online));
    });

    // const handleNewMessageSocket = (message: any) => {
    //   console.log("📨 New Message Received from socket:", message);
    // };

    return () => {
      socket.off("onlineUser", (message: any) => {
        console.log("📨 onlineUser Received from socket:", message);
      });
      socket.off("newMessage", (message: any) => {
        console.log("📨New Message Off:", message);
      });
    };
  }, [dispatch, handleNewMessage, socket, user?.user?.userId]);

  useEffect(() => {
    if (conversation) {
      setChatList(conversation);
    }
  }, [conversation]);

  const filteredConversations = useMemo(() => {
    return chatList?.slice()?.sort((a: any, b: any) => {
      const dateA = new Date(a?.lastMessageCreatedAt || 0).getTime();
      const dateB = new Date(b?.lastMessageCreatedAt || 0).getTime();
      return dateB - dateA;
    });
  }, [chatList]);

  return (
    <div
      className={`w-full lg:w-[400px] overflow-y-auto px-3 border-r-2 border-secondary-color/20 ${
        seletedConversation ? "hidden lg:block" : "block lg:block"
      }`}
    >
      <div className="sticky top-0 z-20   pt-5 !bg-primary-color">
        <div className=" flex justify-between items-center pe-4  text-base sm:text-xl md:text-2xl lg:text-3xl text-secondary-color font-bold mt-3">
          Messages
        </div>
        <div className="mt-3 w-full">
          <SearchInput
            placeholder="Search Conversations"
            className="!w-full gap-0 "
            isPage={false}
            formClassName="!w-full !-mb-2 !h-fit"
            inputClassName="!w-full !bg-[#EFEFEF] text-base-color !py-3 !px-2 w-full !mb-0"
          />
        </div>
      </div>
      <div className="h-fit mb-3">
        <div className=" text-gray-300 bg-white   ">
          {filteredConversations?.map((conversation: IConversation) => {
            // Compute the image source URL
            const imageUrlSrc = conversation?.chat?.users?.[0]?.profileImage;

            // Return the JSX
            return (
              <ConversationChatListCard
                key={conversation?.chat?._id}
                conversation={conversation}
                imageUrlSrc={imageUrlSrc}
                onlineUsers={onlineUsers}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ConversationChatList;
