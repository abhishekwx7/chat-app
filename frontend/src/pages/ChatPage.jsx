import { useChatStore } from "../store/useChatStore";
import BorderAnimatedContainer from "../components/BorderAnimatedContainer";
import ProfileHeader from "../components/ProfileHeader";
import ActiveTabSwitch from "../components/ActiveTabSwitch";
import ChatsList from "../components/ChatsList";
import ContactList from "../components/ContactList";
import ChatContainer from "../components/ChatContainer";
import NoConversationPlaceholder from "../components/NoConversationPlaceholder";

const ChatPage = () => {
  const { activeTab, selectedUser } = useChatStore();

  return (
    <div className="w-full min-h-screen flex items-center justify-center px-6 py-10 bg-transparent">
      <div className="relative w-full max-w-7xl h-[88vh] rounded-3xl overflow-hidden border border-white/10 bg-[#050505] shadow-[0_0_120px_rgba(255,255,255,0.05)] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.04),transparent_28%)] before:pointer-events-none after:absolute after:inset-0 after:bg-[radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.03),transparent_28%)] after:pointer-events-none">
        <BorderAnimatedContainer>
          <div className="flex h-full w-full bg-[#050505] relative z-10">
            {/* LEFT SIDEBAR */}
            <div className="w-[320px] border-r border-white/10 bg-white/[0.03] backdrop-blur-xl flex flex-col">
              <ProfileHeader />

              <div className="px-4 pt-2">
                <ActiveTabSwitch />
              </div>

              <div className="flex-1 overflow-y-auto px-3 py-4 space-y-2">
                {activeTab === "chats" ? <ChatsList /> : <ContactList />}
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="flex-1 flex flex-col bg-[#050505]">
              {selectedUser ? <ChatContainer /> : <NoConversationPlaceholder />}
            </div>
          </div>
        </BorderAnimatedContainer>
      </div>
    </div>
  );
};

export default ChatPage;
