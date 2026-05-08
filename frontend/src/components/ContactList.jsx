import { useEffect } from "react";
import { useChatStore } from "../store/useChatStore";
import UsersLoadingSkeleton from "./UsersLoadingSkeleton";

function ContactList() {
  const { getAllContacts, allContacts, setSelectedUser, isUsersLoading } =
    useChatStore();

  useEffect(() => {
    getAllContacts();
  }, [getAllContacts]);

  if (isUsersLoading) return <UsersLoadingSkeleton />;

  return (
    <div className="space-y-2">
      {allContacts.map((contact) => (
        <div
          key={contact._id}
          onClick={() => setSelectedUser(contact)}
          className="bg-black border border-white/10 p-4 rounded-xl cursor-pointer hover:bg-white/5 transition-all duration-200"
        >
          <div className="flex items-center gap-3">
            {/* TODO: MAKE IT WORK WITH SOCKET */}
            <div className="avatar online">
              <div className="size-12 rounded-full ring-1 ring-white/10 overflow-hidden">
                <img
                  src={contact.profilePic || "/avatar.png"}
                  alt={contact.fullName}
                />
              </div>
            </div>

            <div className="flex flex-col min-w-0">
              <h4 className="text-white font-medium truncate">
                {contact.fullName}
              </h4>

              <span className="text-xs text-white/40">Available to chat</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ContactList;
