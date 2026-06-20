export default function PrivacyPage() {
  const pageStyle = {
    minHeight: "100vh",
    background:
      "linear-gradient(135deg, #0f0c29, #302b63, #24243e)",
    color: "white",
    padding: "40px 20px",
  };

  const cardStyle = {
    maxWidth: "900px",
    margin: "0 auto",
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "20px",
    padding: "40px",
    backdropFilter: "blur(10px)",
  };

  const headingStyle = {
    fontSize: "42px",
    marginBottom: "20px",
  };

  const subHeadingStyle = {
    fontSize: "24px",
    marginTop: "30px",
    marginBottom: "10px",
    color: "#c4b5fd",
  };

  const linkStyle = {
    color: "#c4b5fd",
    fontWeight: "bold",
    textDecoration: "none",
  };

  return (
    <main style={pageStyle}>
      <div style={cardStyle}>
        <h1 style={headingStyle}>Privacy Policy</h1>

        <a
          href="/"
          style={{
            color: "#a855f7",
            textDecoration: "none",
            display: "inline-block",
            marginBottom: "20px",
            fontWeight: "bold",
          }}
        >
          ← Back to Home
        </a>

        <p>Last updated: June 2026</p>

        <p>
          Natural Stupidity™ is an entertainment website. We do not knowingly
          collect personal information beyond standard analytics and technical
          data required to operate the service.
        </p>

        <h2 style={subHeadingStyle}>Information We Collect</h2>

        <p>
          We may collect anonymous usage statistics, browser information,
          device information, and performance metrics.
        </p>

        <h2 style={subHeadingStyle}>How We Use Information</h2>

        <p>
          Information is used to improve website functionality, performance,
          security, and user experience.
        </p>

        <h2 style={subHeadingStyle}>Third-Party Services</h2>

        <p>
          The website may use third-party services such as Vercel, Google
          Analytics, and similar providers.
        </p>

        <h2 style={subHeadingStyle}>Contact</h2>

        <p>
          For privacy-related questions, please use the{" "}
          <a href="/contact" style={linkStyle}>
            Contact page
          </a>
          .
        </p>
      </div>
    </main>
  );
}