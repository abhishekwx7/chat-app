import { useChatStore } from "../store/useChatStore";

function ActiveTabSwitch() {
  const { activeTab, setActiveTab } = useChatStore();

  return (
    <div className="tabs tabs-boxed bg-black border border-white/10 p-2 m-2 rounded-xl">
      <button
        onClick={() => setActiveTab("chats")}
        className={`tab transition-all duration-200 ${
          activeTab === "chats"
            ? "bg-white text-black font-medium"
            : "bg-transparent text-white/60 hover:text-white"
        }`}
      >
        Chats
      </button>

      <button
        onClick={() => setActiveTab("contacts")}
        className={`tab transition-all duration-200 ${
          activeTab === "contacts"
            ? "bg-white text-black font-medium"
            : "bg-transparent text-white/60 hover:text-white"
        }`}
      >
        Contacts
      </button>
    </div>
  );
}

export default ActiveTabSwitch;
