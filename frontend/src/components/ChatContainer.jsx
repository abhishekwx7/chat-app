import { useEffect } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { useChatStore } from "../store/useChatStore";
import ChatHeader from "./ChatHeader";
import NoChatHistoryPlaceholder from "./NoChatHistoryPlaceholder";
import MessageInput from "./MessageInput";
import MessagesLoadingSkeleton from "./MessagesLoadingSkeleton";

function ChatContainer() {
  const { selectedUser, getMessagesByUserId, messages, isMessagesLoading } =
    useChatStore();

  const { authUser } = useAuthStore();

  useEffect(() => {
    if (selectedUser?._id) {
      getMessagesByUserId(selectedUser._id);
    }
  }, [selectedUser, getMessagesByUserId]);

  return (
    <div className="flex flex-col h-full bg-black">
      <ChatHeader />

      <div className="flex-1 px-6 py-8 overflow-y-auto">
        {messages.length > 0 && !isMessagesLoading ? (
          <div className="max-w-3xl mx-auto space-y-6">
            {messages.map((msg) => {
              const isSender = msg.senderId === authUser._id;

              return (
                <div
                  key={msg._id}
                  className={`chat ${isSender ? "chat-end" : "chat-start"}`}
                >
                  <div
                    className={`chat-bubble relative border shadow-sm ${
                      isSender
                        ? "bg-white text-black border-white"
                        : "bg-zinc-900 text-white border-white/10"
                    }`}
                  >
                    {msg.image && (
                      <img
                        src={msg.image}
                        alt="Shared"
                        className="rounded-xl h-48 object-cover mb-2"
                      />
                    )}

                    {msg.text && (
                      <p className="mt-1 break-words leading-relaxed">
                        {msg.text}
                      </p>
                    )}

                    <p
                      className={`text-[11px] mt-2 opacity-60 flex items-center gap-1 ${
                        isSender ? "text-black/50" : "text-white/40"
                      }`}
                    >
                      {new Date(msg.createdAt).toISOString().slice(11, 16)}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        ) : isMessagesLoading ? (
          <MessagesLoadingSkeleton />
        ) : (
          <NoChatHistoryPlaceholder name={selectedUser.fullName} />
        )}
      </div>

      <MessageInput />
    </div>
  );
}

export default ChatContainer;
