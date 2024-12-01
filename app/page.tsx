'use client'
import React from "react";

export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        animation: "backgroundAnimation 10s infinite",
        backgroundSize: "400% 400%", // متحرک گریڈینٹ کے لیے
      }}
    >
      <style jsx>{`
        @keyframes backgroundAnimation {
          0% {
            background: linear-gradient(
              45deg,
              #ff9a9e,
              #fad0c4,
              #fbc2eb,
              #a18cd1
            );
          }
          25% {
            background: linear-gradient(
              45deg,
              #fbc2eb,
              #a6c1ee,
              #d4fc79,
              #96e6a1
            );
          }
          50% {
            background: linear-gradient(
              45deg,
              #96e6a1,
              #d4fc79,
              #fbc2eb,
              #ff9a9e
            );
          }
          75% {
            background: linear-gradient(
              45deg,
              #a6c1ee,
              #fbc2eb,
              #fad0c4,
              #ff9a9e
            );
          }
          100% {
            background: linear-gradient(
              45deg,
              #ff9a9e,
              #fad0c4,
              #fbc2eb,
              #a18cd1
            );
          }
        }

        @keyframes textAnimation {
          0% {
            color: rgba(255, 255, 255, 1);
            text-shadow: 0 0 10px rgba(255, 255, 255, 0.8),
              0 0 20px rgba(255, 255, 255, 0.6),
              0 0 30px rgba(255, 255, 255, 0.4);
          }
          50% {
            color: rgba(255, 223, 186, 1);
            text-shadow: 0 0 20px rgba(255, 223, 186, 0.8),
              0 0 30px rgba(255, 223, 186, 0.6),
              0 0 40px rgba(255, 223, 186, 0.4);
          }
          100% {
            color: rgba(255, 255, 255, 1);
            text-shadow: 0 0 10px rgba(255, 255, 255, 0.8),
              0 0 20px rgba(255, 255, 255, 0.6),
              0 0 30px rgba(255, 255, 255, 0.4);
          }
        }

        h1 {
          font-size: 60px;
          font-family: "Cursive", sans-serif;
          text-transform: uppercase;
          animation: textAnimation 1s infinite;
        }
      `}</style>
      <h1>Hello, Anas Hakeem! Welcome to Next.js</h1>
    </div>
  );
}
