/* eslint-disable @typescript-eslint/no-explicit-any */
import { getServerUrl } from "@/helpers/config/envConfig";
import {
  selectSelectedChatUser,
  setSelectedChatUser,
} from "../../redux/features/conversation/conversationSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { formatDateTime } from "../../utils/dateFormet";
import Image from "next/image";
import { IConversation } from "@/types/conversation.type";
import { AllImages } from "../../../public/assets/AllImages";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

interface IConversationChatListCardProps {
  conversation: IConversation;
  imageUrlSrc: string;
  onlineUsers: any[];
}

const ConversationChatListCard = ({
  conversation,
  imageUrlSrc,
  onlineUsers,
}: IConversationChatListCardProps) => {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const router = useRouter();
  const { replace } = router;
  const imageUrl = getServerUrl();
  const dispatch = useAppDispatch();
  const selectedConversation = useAppSelector(selectSelectedChatUser);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    if (params.has("room") || params.has("page")) {
      params.delete("room");
      params.delete("page");

      // Replace URL without these params, scroll false keeps scroll position
      replace(`${pathName}?${params.toString()}`, { scroll: false });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleConversationSelect = (conversation: IConversation) => {
    const conversationId = conversation?.chat?._id;
    console.log(":", conversationId);

    // Create a new URLSearchParams object to modify search params
    const params = new URLSearchParams(searchParams);

    // Set the room and page params
    if (conversationId) {
      params.set("room", conversationId);
      params.set("page", "1");
    } else {
      params.delete("room");
      params.delete("page");
    }
    // Log the parameters to verify they are being set correctly
    console.log("Updated Params:", params.toString());

    // Replace the URL with the new params
    replace(`${pathName}?${params.toString()}`, { scroll: false });

    // Dispatch the selected conversation to Redux
    dispatch(setSelectedChatUser(conversation));
  };

  console.log(conversation?.chat?.users?.[0]);

  return (
    <div
      onClick={() => handleConversationSelect(conversation)}
      className={`m-1 rounded  border-b border-secondary-color/10 bg-secondary-color/10 text-black ${
        conversation?.chat?._id === selectedConversation?.chat?._id
          ? "!bg-secondary-color text-white"
          : ""
      }`}
    >
      <div className="py-4 px-2 cursor-pointer">
        <div className="flex items-center gap-2">
          <Image
            className="rounded-full aspect-square h-12 w-fit object-cover relative"
            src={
              imageUrlSrc
                ? imageUrl + "/" + imageUrlSrc
                : AllImages?.dummyProfile
            }
            width={100}
            height={100}
            alt="Profile"
            priority={true}
            fetchPriority="high"
          />
          <div className="w-full mt-1">
            <div className="flex items-center gap-1 text-xl">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  <p>
                    {/* {conversation?.users?.[0]?._id === userData?._id
                      ? conversation?.users?.[1]?.petName.length > 10
                        ? `${conversation?.users?.[1]?.petName.slice(0, 10)}...`
                        : conversation?.users?.[1]?.petName
                      : conversation?.users?.[0]?.petName.length > 10
                      ? `${conversation?.users?.[0]?.petName.slice(0, 10)}...`
                      : conversation?.users?.[0]?.petName} */}
                    {conversation?.chat?.users?.[0]?.name?.length > 15
                      ? `${conversation?.chat?.users?.[0]?.name.slice(
                          0,
                          15
                        )}...`
                      : conversation?.chat?.users?.[0]?.name}
                  </p>
                  {onlineUsers?.includes(
                    conversation?.chat?.users?.[0]?._id
                  ) && <div className="size-2 rounded-full bg-green-500"></div>}
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center w-full">
              <div className="text-sm">
                {conversation?.lastMessage
                  ? `${conversation?.lastMessage?.slice(0, 10)}...`
                  : ""}
              </div>
              <div className="text-xs">
                {conversation?.lastMessageCreatedAt
                  ? formatDateTime(conversation?.lastMessageCreatedAt)
                  : ""}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConversationChatListCard;
