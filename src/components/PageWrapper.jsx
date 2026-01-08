import bgImage from "../assets/images/expo_bg.jpg";

export default function PageWrapper({ children }) {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      
      {/* ===== STATIC BACKGROUND ===== */}
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgImage})` }}
      />

      {/* ===== DARK OVERLAY ===== */}
      <div className="fixed inset-0 bg-black/60" />

      {/* ===== PAGE CONTENT ===== */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
