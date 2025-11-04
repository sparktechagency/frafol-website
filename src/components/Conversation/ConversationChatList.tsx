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
  const [chatList, setChatList] = useState<any[]>([]);

  console.log("chatList", chatList);

  const handleNewMessage = useCallback((message: any) => {
    const newMessage = message?.data;
    console.log("newMessage", newMessage);
    if (!newMessage?.conversationId) return;

    setChatList((prevChatList: any) => {
      const existingIndex = prevChatList.findIndex(
        (item: any) =>
          item.lastMessage?.conversationId === newMessage.conversationId
      );

      if (existingIndex !== -1) {
        // Update the existing conversation's lastMessage
        const updatedList = [...prevChatList];
        updatedList[existingIndex] = {
          ...updatedList[existingIndex],
          lastMessage: newMessage,
          updatedAt: newMessage.updatedAt,
        };
        return updatedList;
      } else {
        // Push a new conversation (you need to define what a new conversation looks like)
        const newConversation = {
          _id: newMessage.conversationId,
          lastMessage: newMessage,
          createdAt: newMessage.createdAt,
          updatedAt: newMessage.updatedAt,
          self: {}, // You should populate this from context or existing data
          otherUser: {}, // Same as above
        };
        return [newConversation, ...prevChatList];
      }
    });
  }, []);

  useEffect(() => {
    console.log("🧠 Checking socket:", socket);

    if (!socket) {
      console.warn("❌ Socket not ready yet.");
      return;
    }

    if (!socket.connected) {
      socket.connect();
    }
    socket.on(`new_message::${user?.user?.userId}`, handleNewMessage);
    socket.on("online-active-user", (online: any) => {
      console.log("Online Users:", online);
      dispatch(setOnlineUsers(online));
    });

    // const handleNewMessageSocket = (message: any) => {
    //   console.log("📨 New Message Received from socket:", message);
    // };

    return () => {
      socket.off("online-active-user", (message: any) => {
        console.log("📨 online-active-user Received from socket:", message);
      });
      socket.off("new_message", (message: any) => {
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
    console.log(
      "chatList ===>",
      chatList?.slice()?.sort((a: any, b: any) => {
        const dateA = new Date(a?.lastMessage?.updatedAt || 0).getTime();
        const dateB = new Date(b?.lastMessage?.updatedAt || 0).getTime();
        return dateB - dateA;
      })
    );
    return chatList?.slice()?.sort((a: any, b: any) => {
      const dateA = new Date(a?.lastMessage?.updatedAt || 0).getTime();
      const dateB = new Date(b?.lastMessage?.updatedAt || 0).getTime();
      return dateB - dateA;
    });
  }, [chatList]);

  return (
    <div
      className={`w-full lg:w-[400px] overflow-y-auto px-3 border-r-2 border-secondary-color ${
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
