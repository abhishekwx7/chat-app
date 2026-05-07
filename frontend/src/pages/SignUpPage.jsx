import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import BorderAnimatedContainer from "../components/BorderAnimatedContainer";
import {
  MessageCircleIcon,
  LockIcon,
  MailIcon,
  UserIcon,
  LoaderIcon,
} from "lucide-react";
import { Link } from "react-router";

function SignUpPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const { signup, isSigningUp } = useAuthStore();

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(formData);
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center px-6 py-10 bg-transparent">
      <div className="relative w-full max-w-5xl min-h-[82vh] rounded-3xl overflow-hidden border border-white/10 bg-[#050505] shadow-[0_0_120px_rgba(255,255,255,0.06)] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.06),transparent_30%)] before:pointer-events-none after:absolute after:inset-0 after:bg-[radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.04),transparent_30%)] after:pointer-events-none">
        <BorderAnimatedContainer>
          <div className="w-full min-h-[82vh] flex flex-col md:flex-row bg-[#050505]">
            {/* LEFT SIDE */}
            <div className="md:w-1/2 p-8 md:p-12 flex items-center justify-center md:border-r border-white/10">
              <div className="w-full max-w-md relative z-10">
                {/* HEADER */}
                <div className="text-center mb-10">
                  <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl">
                    <MessageCircleIcon className="w-7 h-7 text-white/80" />
                  </div>

                  <h2 className="text-3xl font-bold tracking-tight text-white">
                    Create Account
                  </h2>

                  <p className="mt-2 text-sm text-white/45">
                    Sign up for a new account
                  </p>
                </div>

                {/* FORM */}
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* FULL NAME */}
                  <div>
                    <label className="mb-2 block text-sm font-medium text-white/70">
                      Full Name
                    </label>

                    <div className="relative">
                      <UserIcon className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/35" />

                      <input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            fullName: e.target.value,
                          })
                        }
                        className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-11 py-3 text-sm text-white placeholder:text-white/25 outline-none transition-all duration-300 focus:border-white/30 focus:bg-white/[0.06]"
                        placeholder="Will Xave"
                      />
                    </div>
                  </div>

                  {/* EMAIL */}
                  <div>
                    <label className="mb-2 block text-sm font-medium text-white/70">
                      Email
                    </label>

                    <div className="relative">
                      <MailIcon className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/35" />

                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            email: e.target.value,
                          })
                        }
                        className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-11 py-3 text-sm text-white placeholder:text-white/25 outline-none transition-all duration-300 focus:border-white/30 focus:bg-white/[0.06]"
                        placeholder="willxave7@gmail.com"
                      />
                    </div>
                  </div>

                  {/* PASSWORD */}
                  <div>
                    <label className="mb-2 block text-sm font-medium text-white/70">
                      Password
                    </label>

                    <div className="relative">
                      <LockIcon className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/35" />

                      <input
                        type="password"
                        value={formData.password}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            password: e.target.value,
                          })
                        }
                        className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-11 py-3 text-sm text-white placeholder:text-white/25 outline-none transition-all duration-300 focus:border-white/30 focus:bg-white/[0.06]"
                        placeholder="Enter your password"
                      />
                    </div>
                  </div>

                  {/* BUTTON */}
                  <button
                    className="mt-2 flex w-full items-center justify-center rounded-xl bg-white py-3 text-sm font-semibold text-black transition-all duration-300 hover:bg-white/90 hover:shadow-[0_0_30px_rgba(255,255,255,0.15)] disabled:cursor-not-allowed disabled:opacity-60"
                    type="submit"
                    disabled={isSigningUp}
                  >
                    {isSigningUp ? (
                      <LoaderIcon className="h-5 w-5 animate-spin" />
                    ) : (
                      "Create Account"
                    )}
                  </button>
                </form>

                {/* LOGIN LINK */}
                <div className="mt-6 text-center">
                  <Link
                    to="/login"
                    className="text-sm text-white/45 transition hover:text-white"
                  >
                    Already have an account? Login
                  </Link>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="hidden md:flex md:w-1/2 items-center justify-center p-10">
              <div className="text-center relative z-10">
                <img
                  src="/signup.png"
                  alt="People using mobile devices"
                  className="mx-auto w-[78%] h-auto object-contain opacity-80 grayscale"
                />

                <div className="mt-8">
                  <h3 className="text-2xl font-semibold text-white">
                    Start Your Journey Today
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-white/45">
                    Fast, minimal and private messaging experience.
                  </p>

                  <div className="mt-6 flex justify-center gap-3">
                    <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-white/60 backdrop-blur-xl">
                      Free
                    </span>

                    <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-white/60 backdrop-blur-xl">
                      Easy Setup
                    </span>

                    <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-white/60 backdrop-blur-xl">
                      Private
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </BorderAnimatedContainer>
      </div>
    </div>
  );
}

export default SignUpPage;
