import { MessageCircleIcon } from "lucide-react";
import { useChatStore } from "../store/useChatStore";

function NoChatsFound() {
  const { setActiveTab } = useChatStore();

  return (
    <div className="flex flex-col items-center justify-center py-10 text-center space-y-4">
      <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-full flex items-center justify-center">
        <MessageCircleIcon className="w-8 h-8 text-white/70" />
      </div>

      <div>
        <h4 className="text-white font-medium mb-1">No conversations yet</h4>

        <p className="text-white/50 text-sm px-6">
          Start a new chat by selecting a contact from the contacts tab
        </p>
      </div>

      <button
        onClick={() => setActiveTab("contacts")}
        className="px-4 py-2 text-sm bg-white text-black rounded-lg hover:bg-white/90 transition-all duration-200"
      >
        Find contacts
      </button>
    </div>
  );
}

export default NoChatsFound;
