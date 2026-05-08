function UsersLoadingSkeleton() {
  return (
    <div className="space-y-2">
      {[1, 2, 3].map((item) => (
        <div
          key={item}
          className="bg-black border border-white/10 p-4 rounded-xl animate-pulse"
        >
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-white/10 rounded-full"></div>

            <div className="flex-1">
              <div className="h-4 bg-white/10 rounded w-3/4 mb-2"></div>

              <div className="h-3 bg-white/5 rounded w-1/2"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default UsersLoadingSkeleton;
