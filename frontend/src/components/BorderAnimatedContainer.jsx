// https://cruip-tutorials.vercel.app/animated-gradient-border/
function BorderAnimatedContainer({ children }) {
  return (
    <div className="w-full h-full rounded-3xl border border-transparent flex overflow-hidden animate-border [background:linear-gradient(135deg,#ffffff,#f4f4f5_45%,#0a0a0a_45%,#000000)_padding-box,conic-gradient(from_var(--border-angle),rgba(0,0,0,0.15)_70%,rgba(255,255,255,0.9)_78%,rgba(0,0,0,0.9)_86%,rgba(255,255,255,0.9)_94%,rgba(0,0,0,0.15))_border-box]">
      {children}
    </div>
  );
}

export default BorderAnimatedContainer;
