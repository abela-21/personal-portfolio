"use client";

import { useState } from "react";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating toggle button, bottom-right on every page */}
      <button
        onClick={() => setOpen(!open)}
        aria-label={open ? "Close chat" : "Open chat"}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          zIndex: 1000,
          width: "56px",
          height: "56px",
          borderRadius: "50%",
          border: "none",
          background: "#2B4B7E",
          color: "white",
          fontSize: "24px",
          cursor: "pointer",
          boxShadow: "0 4px 14px rgba(0,0,0,0.25)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {open ? "×" : "💬"}
      </button>

      {/* Chat panel, only rendered when open */}
      {open && (
        <div
          style={{
            position: "fixed",
            bottom: "88px",
            right: "20px",
            zIndex: 999,
            width: "380px",
            maxWidth: "92vw",
            height: "600px",
            maxHeight: "80vh",
            borderRadius: "12px",
            overflow: "hidden",
            boxShadow: "0 8px 30px rgba(0,0,0,0.3)",
            background: "white",
          }}
        >
          <iframe
            src="https://www.chatbase.co/chatbot-iframe/vHD5kwKOKf2RwIJh9W54j"
            title="Chat with Abel's assistant"
            width="100%"
            style={{ height: "100%", minHeight: "500px", border: "none" }}
            allow="microphone"
          />
        </div>
      )}
    </>
  );
}
