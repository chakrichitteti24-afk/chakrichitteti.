import { ImageResponse } from "next/og";

export const alt = "Chakri Chitteti - CEO & Founder at CipherFlux Labs | AI Engineer & Cybersecurity";
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
          justifyContent: "space-between",
          backgroundColor: "#08090A",
          padding: "60px 70px",
          fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
          border: "2px solid rgba(0, 255, 136, 0.2)",
          position: "relative",
        }}
      >
        {/* Background glow effects */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            right: "-100px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            backgroundColor: "rgba(0, 255, 136, 0.08)",
            filter: "blur(90px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-100px",
            left: "-100px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            backgroundColor: "rgba(6, 182, 212, 0.06)",
            filter: "blur(90px)",
          }}
        />

        {/* Top Header Row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              padding: "10px 20px",
              backgroundColor: "rgba(255, 255, 255, 0.04)",
              border: "1px solid rgba(0, 255, 136, 0.3)",
              borderRadius: "9999px",
            }}
          >
            <div
              style={{
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                backgroundColor: "#00FF88",
              }}
            />
            <span
              style={{
                color: "#E2E8F0",
                fontSize: "18px",
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: "1px",
              }}
            >
              CIPHERFLUX LABS // SECURE AI
            </span>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              color: "#94A3B8",
              fontSize: "16px",
              fontFamily: "monospace",
            }}
          >
            <span>v2.4.0 • PRODUCTION</span>
          </div>
        </div>

        {/* Center Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "14px",
          }}
        >
          <h1
            style={{
              fontSize: "76px",
              fontWeight: 900,
              color: "#FFFFFF",
              letterSpacing: "-2px",
              margin: 0,
              padding: 0,
              lineHeight: 1,
            }}
          >
            Chakri Chitteti<span style={{ color: "#00FF88" }}>.</span>
          </h1>

          <p
            style={{
              fontSize: "30px",
              color: "#94A3B8",
              fontWeight: 400,
              margin: 0,
              padding: 0,
              letterSpacing: "0.5px",
            }}
          >
            CEO & Founder <span style={{ color: "#F8FAFC", fontWeight: 600 }}>@CipherFlux Labs</span>
          </p>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              marginTop: "8px",
            }}
          >
            <div
              style={{
                padding: "8px 18px",
                backgroundColor: "rgba(0, 255, 136, 0.1)",
                border: "1px solid rgba(0, 255, 136, 0.3)",
                borderRadius: "12px",
                color: "#00FF88",
                fontSize: "16px",
                fontFamily: "monospace",
                fontWeight: 600,
              }}
            >
              AI Engineer
            </div>
            <div
              style={{
                padding: "8px 18px",
                backgroundColor: "rgba(6, 182, 212, 0.1)",
                border: "1px solid rgba(6, 182, 212, 0.3)",
                borderRadius: "12px",
                color: "#22D3EE",
                fontSize: "16px",
                fontFamily: "monospace",
                fontWeight: 600,
              }}
            >
              Cybersecurity Specialist
            </div>
            <div
              style={{
                padding: "8px 18px",
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                border: "1px solid rgba(255, 255, 255, 0.15)",
                borderRadius: "12px",
                color: "#E2E8F0",
                fontSize: "16px",
                fontFamily: "monospace",
                fontWeight: 600,
              }}
            >
              Future OSCP Professional
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(255, 255, 255, 0.1)",
            paddingTop: "24px",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "24px",
            }}
          >
            <span
              style={{
                fontSize: "17px",
                color: "#94A3B8",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <span style={{ color: "#00FF88" }}>⚡</span> Smith AI (Autonomous Productivity)
            </span>
            <span
              style={{
                fontSize: "17px",
                color: "#94A3B8",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <span style={{ color: "#F43F5E" }}>♥</span> Svanexa AI (Women&apos;s Health)
            </span>
          </div>

          <span
            style={{
              fontSize: "16px",
              color: "#64748B",
              fontFamily: "monospace",
            }}
          >
            cipherflux-labs.vercel.app
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
