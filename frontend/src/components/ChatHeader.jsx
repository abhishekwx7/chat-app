import { XIcon } from "lucide-react";
import { useChatStore } from "../store/useChatStore";
import { useEffect } from "react";

function ChatHeader() {
  const { selectedUser, setSelectedUser } = useChatStore();

  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === "Escape") {
        setSelectedUser(null);
      }
    };

    window.addEventListener("keydown", handleEscKey);

    return () => window.removeEventListener("keydown", handleEscKey);
  }, [setSelectedUser]);

  return (
    <div className="flex justify-between items-center bg-black border-b border-white/10 px-6 py-4">
      <div className="flex items-center space-x-3">
        <div className="avatar online">
          <div className="w-12 rounded-full ring-1 ring-white/10 overflow-hidden">
            <img
              src={selectedUser.profilePic || "/avatar.png"}
              alt={selectedUser.fullName}
            />
          </div>
        </div>

        <div>
          <h3 className="text-white font-medium">{selectedUser.fullName}</h3>

          <p className="text-white/40 text-sm">Online</p>
        </div>
      </div>

      <button
        onClick={() => setSelectedUser(null)}
        className="p-2 rounded-lg hover:bg-white/5 transition-colors duration-200"
      >
        <XIcon className="w-5 h-5 text-white/50 hover:text-white transition-colors cursor-pointer" />
      </button>
    </div>
  );
}

export default ChatHeader;
