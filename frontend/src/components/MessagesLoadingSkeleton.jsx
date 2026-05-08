function MessagesLoadingSkeleton() {
  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {[...Array(6)].map((_, index) => (
        <div
          key={index}
          className={`chat ${
            index % 2 === 0 ? "chat-start" : "chat-end"
          } animate-pulse`}
        >
          <div
            className={`chat-bubble border border-white/10 ${
              index % 2 === 0 ? "bg-zinc-900" : "bg-white"
            }`}
          >
            <div
              className={`h-4 rounded ${
                index % 2 === 0 ? "bg-white/10 w-32" : "bg-black/10 w-28"
              }`}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MessagesLoadingSkeleton;
