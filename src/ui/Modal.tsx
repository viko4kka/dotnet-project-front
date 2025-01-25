import React, { useEffect } from "react";

function Modal({ children, onClose }: { children: React.ReactNode, onClose: () => void }) {
  // Disable scrolling when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto"; // Enable scrolling back when closed
    };
  }, []);

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-[var(--backdrop-color)] backdrop-blur-sm z-[1000]">
      <div className="absolute inset-0" onClick={onClose}></div> {/* Click outside to close */}
      <div className="relative bg-white p-6 rounded-lg shadow-lg">
        {children}
      </div>
    </div>
  );
}

export default Modal;
