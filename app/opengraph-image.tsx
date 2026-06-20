import { ImageResponse } from "next/og";

export const alt = "Natural Stupidity™";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background:
            "radial-gradient(circle at top, #4c1d95 0%, #111827 45%, #030712 100%)",
          color: "white",
          fontFamily: "Arial",
        }}
      >
        <div
          style={{
            width: 150,
            height: 150,
            borderRadius: 40,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 58,
            fontWeight: 900,
            background:
              "linear-gradient(135deg, #8b5cf6 0%, #ec4899 50%, #f97316 100%)",
            boxShadow: "0 0 60px rgba(236,72,153,0.6)",
          }}
        >
          NS
        </div>

        <h1
          style={{
            fontSize: 84,
            margin: "34px 0 10px",
            fontWeight: 900,
            letterSpacing: -4,
          }}
        >
          Natural Stupidity™
        </h1>

        <p
          style={{
            fontSize: 34,
            color: "#ddd6fe",
            margin: 0,
            fontWeight: 700,
          }}
        >
          The internet&apos;s most confident source of terrible advice.
        </p>

        <p
          style={{
            fontSize: 28,
            color: "#fbcfe8",
            marginTop: 36,
          }}
        >
          Confidently Wrong Since 2026.
        </p>
      </div>
    ),
    {
      ...size,
    }
  );
}