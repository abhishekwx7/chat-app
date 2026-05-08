import { useEffect } from "react";
import { useChatStore } from "../store/useChatStore";
import UsersLoadingSkeleton from "./UsersLoadingSkeleton";
import NoChatsFound from "./NoChatsFound";
import { useAuthStore } from "../store/useAuthStore";

function ChatsList() {
  const {
    getMyChatPartners,
    chats,
    isUsersLoading,
    setSelectedUser,
    selectedUser,
  } = useChatStore();

  const { onlineUsers = [] } = useAuthStore();

  useEffect(() => {
    getMyChatPartners();
  }, [getMyChatPartners]);

  if (isUsersLoading) return <UsersLoadingSkeleton />;
  if (chats.length === 0) return <NoChatsFound />;

  return (
    <div className="space-y-3 bg-black">
      {chats.map((chat) => {
        const isOnline = onlineUsers.includes(chat._id);
        const isSelected = selectedUser?._id === chat._id;

        return (
          <button
            key={chat._id}
            onClick={() => setSelectedUser(chat)}
            className={`w-full bg-black p-4 rounded-xl cursor-pointer border text-left transition-all duration-200 ${
              isSelected
                ? "border-white/40"
                : "border-white/10 hover:border-white/25 hover:bg-white/5"
            }`}
          >
            <div className="flex items-center gap-3">
              <div className={`avatar ${isOnline ? "online" : "offline"}`}>
                <div className="size-12 rounded-full overflow-hidden ring-1 ring-white/10 bg-black">
                  <img
                    src={chat.profilePic || "/avatar.png"}
                    alt={chat.fullName}
                  />
                </div>
              </div>

              <div className="flex flex-col min-w-0">
                <h4 className="text-white font-medium truncate">
                  {chat.fullName}
                </h4>

                <span className="text-xs text-white/40">
                  {isOnline ? "Online" : "Offline"}
                </span>
              </div>
            </div>
          </button>
        );
      })}
    </div>
  );
}

export default ChatsList;
