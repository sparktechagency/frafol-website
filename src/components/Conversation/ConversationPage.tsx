"use client";
import { useUser } from "@/context/UserContext";
import { useAppSelector } from "@/redux/hooks";
import ConversationChatList from "./ConversationChatList";
import ConversationMessage from "./ConversationMessage";
import { IConversation, IMessage } from "@/types/conversation.type";
import { ISignInUser } from "@/types";

const ConversationPage = ({
  conversation,
  allMessages,
  totalMessages,
  room,
  page,
}: {
  conversation: IConversation[];
  allMessages: IMessage[];
  totalMessages: {
    page: number;
    limit: number;
    total: number;
    totalPage: number;
  };
  room: string;
  page: number;
}) => {
  const userData = useUser();
  const onlineUsers = useAppSelector((state) => state.conversation.onlineUser);

  return (
    <div className="">
      <div className="flex h-[93vh] relative overflow-hidden">
        <ConversationChatList
          conversation={conversation}
          onlineUsers={onlineUsers}
        />

        <ConversationMessage
          allMessages={allMessages}
          userData={userData?.user as ISignInUser}
          totalMessages={totalMessages}
          onlineUsers={onlineUsers}
          room={room}
          page={page}
        />
      </div>
    </div>
  );
};

export default ConversationPage;
