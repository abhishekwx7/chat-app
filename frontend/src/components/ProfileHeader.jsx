import { useState, useRef } from "react";
import { LogOutIcon, VolumeOffIcon, Volume2Icon } from "lucide-react";
import { useAuthStore } from "../store/useAuthStore";
import { useChatStore } from "../store/useChatStore";

const mouseClickSound = new Audio("/sounds/mouse-click.mp3");

function ProfileHeader() {
  const { logout, authUser, updateProfile } = useAuthStore();
  const { isSoundEnabled, toggleSound } = useChatStore();

  const [selectedImg, setSelectedImg] = useState(null);

  const fileInputRef = useRef(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = async () => {
      const base64Image = reader.result;

      setSelectedImg(base64Image);

      await updateProfile({
        profilePic: base64Image,
      });
    };
  };

  return (
    <div className="border-b border-white/10 bg-white/[0.02] px-5 py-5 backdrop-blur-xl">
      <div className="flex items-center justify-between">
        {/* LEFT SIDE */}
        <div className="flex items-center gap-4">
          {/* AVATAR */}
          <div className="relative">
            <button
              className="group relative h-14 w-14 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04]"
              onClick={() => fileInputRef.current.click()}
            >
              <img
                src={selectedImg || authUser.profilePic || "/avatar.png"}
                alt="User image"
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-all duration-300 group-hover:opacity-100">
                <span className="text-[10px] font-medium text-white">
                  Change
                </span>
              </div>
            </button>

            {/* ONLINE DOT */}
            <span className="absolute -bottom-1 -right-1 h-3.5 w-3.5 rounded-full border-2 border-black bg-white" />
          </div>

          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleImageUpload}
            className="hidden"
          />

          {/* USER INFO */}
          <div>
            <h3 className="max-w-[180px] truncate text-sm font-semibold text-white">
              {authUser.fullName}
            </h3>

            <p className="mt-1 text-xs text-white/45">Online</p>
          </div>
        </div>

        {/* RIGHT SIDE BUTTONS */}
        <div className="flex items-center gap-2">
          {/* SOUND BUTTON */}
          <button
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-white/60 transition-all duration-300 hover:bg-white/[0.06] hover:text-white"
            onClick={() => {
              mouseClickSound.currentTime = 0;

              mouseClickSound
                .play()
                .catch((error) => console.log("Audio play failed:", error));

              toggleSound();
            }}
          >
            {isSoundEnabled ? (
              <Volume2Icon className="h-4 w-4" />
            ) : (
              <VolumeOffIcon className="h-4 w-4" />
            )}
          </button>

          {/* LOGOUT BUTTON */}
          <button
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-white/60 transition-all duration-300 hover:bg-white/[0.06] hover:text-white"
            onClick={logout}
          >
            <LogOutIcon className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProfileHeader;
