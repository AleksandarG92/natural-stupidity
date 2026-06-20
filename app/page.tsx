"use client";

import { useState } from "react";

const loadingMessages = [
  "🧠 Thinking badly...",
  "🤔 Ignoring facts...",
  "🎲 Generating confidence...",
  "💡 Inventing nonsense...",
  "📉 Consulting fake experts...",
];

const experts = [
  "🤓 Professor Nonsense",
  "🧙 Wizard of Bad Decisions",
  "👔 Corporate Chaos Consultant",
  "🧠 Certified Overthinker",
  "📉 Financial Disaster Intern",
];

const hallOfFame = [
  "Invest your savings in decorative potatoes.",
  "Read faster by skipping every third word.",
  "Become rich by refusing to understand money.",
];

type HistoryItem = {
  question: string;
  answer: string;
  expert: string;
};

export default function Home() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [expert, setExpert] = useState("🤓 Professor Nonsense");
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [counter, setCounter] = useState(1247);
  const [rating, setRating] = useState("");

  function pickRandom<T>(items: T[]) {
    return items[Math.floor(Math.random() * items.length)];
  }

  function copyAdvice() {
    navigator.clipboard.writeText(answer);
    alert("📋 Advice copied!");
  }

  async function shareStupidity() {
    const text = `🧠 Natural Stupidity™

Q: ${question}

A: ${answer}

Try it yourself:
https://natural-stupidity.vercel.app

Confidently Wrong Since 2026.`;

    if (navigator.share) {
      await navigator.share({
        title: "Natural Stupidity™",
        text,
        url: "https://natural-stupidity.vercel.app",
      });
    } else {
      await navigator.clipboard.writeText(text);
      alert("📤 Stupidity copied for sharing!");
    }
  }

  async function generateBadAdvice() {
    if (!question.trim() || isLoading) return;

    try {
      setIsLoading(true);
      setRating("");

      const randomMessage = pickRandom(loadingMessages);
      const randomExpert = pickRandom(experts);

      setExpert(randomExpert);
      setAnswer(randomMessage);

      const response = await fetch("/api/stupidity", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question }),
      });

      const data = await response.json();

      if (!response.ok) {
        setAnswer(data.error || "Something went wrong.");
        return;
      }

      setAnswer(data.answer);
      setCounter((prev) => prev + 1);

      setHistory((prev) => [
        {
          question,
          answer: data.answer,
          expert: randomExpert,
        },
        ...prev.slice(0, 4),
      ]);
    } catch {
      setAnswer("Natural Stupidity fell down the stairs of logic.");
    } finally {
      setIsLoading(false);
    }
  }

  async function improveStupidity(feedback: string) {
    if (!answer || isLoading) return;

    try {
      setIsLoading(true);
      setRating("");
      setAnswer("🎲 Generating extra stupidity...");

      const response = await fetch("/api/stupidity", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          question: `${question}

Previous answer: ${answer}

User feedback: ${feedback}

Rewrite the answer based on this feedback.`,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setAnswer(data.error || "Something went wrong.");
        return;
      }

      setAnswer(data.answer);
      setCounter((prev) => prev + 1);

      setHistory((prev) => [
        {
          question,
          answer: data.answer,
          expert,
        },
        ...prev.slice(0, 4),
      ]);
    } catch {
      setAnswer("Natural Stupidity failed to become even stupider.");
    } finally {
      setIsLoading(false);
    }
  }

  const showActionButtons =
    answer &&
    !loadingMessages.includes(answer) &&
    answer !== "🎲 Generating extra stupidity...";

  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top, #312e81 0%, #111827 38%, #030712 100%)",
        color: "white",
        textAlign: "center",
        fontFamily: "Arial",
        padding: "40px 20px",
      }}
    >
      <h1 style={{ fontSize: "64px", marginBottom: "10px" }}>
        🧠🤦 Natural Stupidity™
      </h1>

      <h2 style={{ color: "#c4b5fd", marginBottom: "20px" }}>
        Confidently Wrong Since 2026.
      </h2>

      <p style={{ fontSize: "18px" }}>
        Ask anything. Receive terrible advice with dangerous confidence.
      </p>

      <p style={{ color: "#a78bfa", fontWeight: "bold" }}>
        🧠 {counter.toLocaleString()} terrible decisions generated worldwide
      </p>

      <textarea
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            generateBadAdvice();
          }
        }}
        placeholder="Ask your question..."
        rows={4}
        style={{
          width: "80%",
          maxWidth: "760px",
          padding: "18px",
          fontSize: "18px",
          borderRadius: "16px",
          marginTop: "12px",
          backgroundColor: "#111827",
          color: "white",
          border: "2px solid #a78bfa",
          outline: "none",
          boxShadow: "0 0 22px rgba(167, 139, 250, 0.45)",
          resize: "vertical",
        }}
      />

      <br />

      <button
        onClick={generateBadAdvice}
        disabled={!question.trim() || isLoading}
        style={{
          marginTop: "22px",
          padding: "16px 34px",
          fontSize: "20px",
          fontWeight: "bold",
          backgroundColor: isLoading ? "#6b7280" : "#8b5cf6",
          color: "white",
          border: "none",
          borderRadius: "14px",
          cursor: isLoading ? "not-allowed" : "pointer",
          boxShadow: "0 10px 25px rgba(139, 92, 246, 0.35)",
        }}
      >
        {isLoading ? "Please wait badly..." : "Generate Bad Advice"}
      </button>

      {answer && (
        <div
          style={{
            maxWidth: "760px",
            margin: "34px auto",
            padding: "24px",
            backgroundColor: "rgba(31, 41, 55, 0.86)",
            borderRadius: "18px",
            border: "1px solid rgba(167, 139, 250, 0.35)",
            boxShadow: "0 20px 45px rgba(0,0,0,0.35)",
          }}
        >
          <strong>{expert} says:</strong>
          <p style={{ fontSize: "18px", lineHeight: "1.5" }}>{answer}</p>

          {showActionButtons && (
            <>
              <button onClick={copyAdvice} style={smallButton}>
                📋 Copy Advice
              </button>

              <button onClick={shareStupidity} style={smallButton}>
                📤 Share Stupidity
              </button>

              <div style={{ marginTop: "16px" }}>
                <button
                  onClick={() =>
                    improveStupidity(
                      "Make it more stupid, more absurd, and funnier."
                    )
                  }
                  style={ratingButton}
                >
                  😂 More Stupid
                </button>

                <button
                  onClick={() =>
                    improveStupidity(
                      "The answer was too smart. Make it dumber and more ridiculous."
                    )
                  }
                  style={ratingButton}
                >
                  🤮 Too Smart
                </button>

                <button
                  onClick={() => setRating("⭐ Legendary stupidity recorded.")}
                  style={ratingButton}
                >
                  ⭐ Legendary
                </button>

                <button
                  onClick={() => setRating("🤡 Peak stupidity achieved.")}
                  style={ratingButton}
                >
                  🤡 Peak Stupidity
                </button>
              </div>

              {rating && (
                <p style={{ color: "#c4b5fd", marginTop: "12px" }}>
                  {rating}
                </p>
              )}
            </>
          )}
        </div>
      )}

      <section
        style={{
          maxWidth: "760px",
          margin: "30px auto",
          textAlign: "left",
        }}
      >
        <h3 style={{ color: "#c4b5fd" }}>🏆 Hall of Fame</h3>

        {hallOfFame.map((item, index) => (
          <div key={index} style={listCard}>
            {index + 1}. {item}
          </div>
        ))}
      </section>

      {history.length > 0 && (
        <section
          style={{
            maxWidth: "760px",
            margin: "20px auto",
            textAlign: "left",
          }}
        >
          <h3 style={{ color: "#c4b5fd" }}>Recent Bad Decisions</h3>

          {history.map((item, index) => (
            <div key={index} style={listCard}>
              <strong>{item.expert}</strong>
              <p style={{ color: "#d1d5db" }}>Q: {item.question}</p>
              <p>A: {item.answer}</p>
            </div>
          ))}
        </section>
      )}

      <p style={{ marginTop: "40px", fontSize: "13px", color: "#d1d5db" }}>
        Satire only. Do not follow this advice. Seriously.
      </p>
    </main>
  );
}

const smallButton = {
  marginTop: "10px",
  marginRight: "10px",
  padding: "10px 18px",
  fontSize: "14px",
  backgroundColor: "#374151",
  color: "white",
  border: "none",
  borderRadius: "10px",
  cursor: "pointer",
};

const ratingButton = {
  margin: "5px",
  padding: "10px 14px",
  fontSize: "14px",
  backgroundColor: "#4b5563",
  color: "white",
  border: "none",
  borderRadius: "10px",
  cursor: "pointer",
};

const listCard = {
  marginTop: "12px",
  padding: "14px",
  backgroundColor: "rgba(17, 24, 39, 0.8)",
  borderRadius: "12px",
  border: "1px solid rgba(255,255,255,0.08)",
};