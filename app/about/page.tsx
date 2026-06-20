export default function AboutPage() {
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
        <h1 style={headingStyle}>About Natural Stupidity™</h1>

        <p>
          Natural Stupidity™ is an AI-powered satire website created to answer
          life&apos;s questions with maximum confidence and minimum wisdom.
        </p>

        <p>
          Ask anything, and the app will generate hilariously terrible advice
          with dangerous confidence. The goal is simple: make people laugh, not
          make life decisions.
        </p>

        <h2 style={subHeadingStyle}>What This Is</h2>

        <p>
          This is a comedy project, a bad advice generator, and a tiny monument
          to overconfidence on the internet.
        </p>

        <h2 style={subHeadingStyle}>What This Is Not</h2>

        <p>
          This is not financial, medical, legal, professional, or personal
          advice. In fact, the entire point is that the advice is bad.
        </p>

        <h2 style={subHeadingStyle}>Why It Exists</h2>

        <p>
          Because sometimes the internet takes itself too seriously, and
          sometimes the best answer to a serious question is a confidently wrong
          potato strategy.
        </p>

        <h2 style={subHeadingStyle}>Contact</h2>

        <p>
          Questions, feedback, or aggressively bad ideas? Contact us at{" "}
          <a href="mailto:contact@naturalstupidityapp.com" style={linkStyle}>
            contact@naturalstupidityapp.com
          </a>
          .
        </p>

        <p style={{ marginTop: "30px" }}>
          <a href="/" style={linkStyle}>
            ← Back to Natural Stupidity™
          </a>
        </p>
      </div>
    </main>
  );
}