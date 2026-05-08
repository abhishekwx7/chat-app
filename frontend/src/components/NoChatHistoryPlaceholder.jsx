import { MessageCircleIcon } from "lucide-react";

const NoChatHistoryPlaceholder = ({ name }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center p-6 bg-black">
      <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-full flex items-center justify-center mb-5">
        <MessageCircleIcon className="size-8 text-white/70" />
      </div>

      <h3 className="text-lg font-medium text-white mb-3">
        Start your conversation with {name}
      </h3>

      <div className="flex flex-col space-y-3 max-w-md mb-5">
        <p className="text-white/50 text-sm leading-relaxed">
          This is the beginning of your conversation. Send a message to start
          chatting!
        </p>

        <div className="h-px w-32 bg-gradient-to-r from-transparent via-white/20 to-transparent mx-auto"></div>
      </div>

      <div className="flex flex-wrap gap-2 justify-center">
        <button className="px-4 py-2 text-xs font-medium text-white bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-all duration-200">
          👋 Say Hello
        </button>

        <button className="px-4 py-2 text-xs font-medium text-white bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-all duration-200">
          🤝 How are you?
        </button>

        <button className="px-4 py-2 text-xs font-medium text-white bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-all duration-200">
          📅 Meet up soon?
        </button>
      </div>
    </div>
  );
};

export default NoChatHistoryPlaceholder;
