import { MessageCircleIcon } from "lucide-react";

const NoConversationPlaceholder = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center p-6 bg-black">
      <div className="size-20 bg-white/5 border border-white/10 rounded-full flex items-center justify-center mb-6">
        <MessageCircleIcon className="size-10 text-white/70" />
      </div>

      <h3 className="text-xl font-semibold text-white mb-2">
        Select a conversation
      </h3>

      <p className="text-white/50 max-w-md leading-relaxed">
        Choose a contact from the sidebar to start chatting or continue a
        previous conversation.
      </p>
    </div>
  );
};

export default NoConversationPlaceholder;
