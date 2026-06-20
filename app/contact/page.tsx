import Link from "next/link";

export default function ContactPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg,#0f0c29,#302b63,#24243e)",
        color: "white",
        padding: "40px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "700px",
          margin: "0 auto",
          background: "rgba(255,255,255,0.05)",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: "20px",
          padding: "40px",
        }}
      >
        <Link
          href="/"
          style={{
            color: "#ff8dfb",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          ← Back to Home
        </Link>

        <h1 style={{ marginTop: "25px" }}>Contact Us</h1>

        <p>
          Have a terrible idea? Found a bug? Want to share your worst life
          decision?
        </p>

        <form
          action="https://formspree.io/f/xeewybwj"
          method="POST"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            marginTop: "30px",
          }}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            style={{
              padding: "14px",
              borderRadius: "10px",
              border: "none",
            }}
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            style={{
              padding: "14px",
              borderRadius: "10px",
              border: "none",
            }}
          />

          <textarea
            name="message"
            placeholder="Message"
            rows={6}
            required
            style={{
              padding: "14px",
              borderRadius: "10px",
              border: "none",
            }}
          />

          <button
            type="submit"
            style={{
              padding: "14px",
              borderRadius: "10px",
              border: "none",
              background: "linear-gradient(90deg,#ff6ec4,#7873f5)",
              color: "white",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Send Message
          </button>
        </form>
      </div>
    </main>
  );
}