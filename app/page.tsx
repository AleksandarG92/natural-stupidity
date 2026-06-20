"use client";

import { useEffect, useState } from "react";

const loadingMessages = [
  "🧠 Thinking badly...",
  "🤔 Ignoring facts...",
  "🎲 Generating confidence...",
  "💡 Inventing nonsense...",
  "📉 Consulting fake experts...",
  "🦆 Asking a duck for strategy...",
  "🥔 Auditing potato wisdom...",
];

const experts = [
  "🤓 Professor Nonsense",
  "🧙 Wizard of Bad Decisions",
  "👔 Corporate Chaos Consultant",
  "🧠 Certified Overthinker",
  "📉 Financial Disaster Intern",
  "🚀 Space Lawyer",
  "🥔 Potato Investment Guru",
  "🦆 Duck Strategy Analyst",
  "👽 Alien Life Coach",
  "🍕 Pizza Philosopher",
  "🐒 Chief Monkey Officer",
  "🧻 Toilet Paper Economist",
  "🎩 Master of Wrong Answers",
  "🦖 Jurassic Consultant",
  "🤖 Malfunctioning AI",
];

const randomQuestions = [
  "How do I become rich in 4 minutes?",
  "How do I impress aliens?",
  "How can I read faster?",
  "How do I become invisible?",
  "How can I win every argument?",
  "How do I become famous accidentally?",
  "How can I look smarter in meetings?",
  "How do I make my cat respect me?",
];

const dailyBadIdeas = [
  "Start every meeting by challenging the printer to a duel.",
  "Save money by paying bills with confidence instead of cash.",
  "Learn faster by sleeping directly on your keyboard.",
  "Become productive by staring at your calendar until it apologizes.",
  "Improve your diet by negotiating with your fridge.",
];

const worstAdviceOfTheDay = [
  "Quit your job and become a professional cloud negotiator.",
  "Put your phone in rice before every important call, just to intimidate it.",
  "To save fuel, drive only downhill. Physics will understand.",
  "Become more confident by correcting strangers in languages you do not speak.",
  "Invest in invisible furniture. It saves space and ruins friendships.",
];

const testimonials = [
  {
    text: "I followed one tip and my toaster now manages my finances.",
    author: "Mark, confused homeowner",
  },
  {
    text: "This app helped me make decisions faster and worse.",
    author: "Elena, former planner",
  },
  {
    text: "My cat became CEO after three clicks.",
    author: "Steve, unemployed pet owner",
  },
];

const initialHallOfFame = [
  "Invest your savings in decorative potatoes.",
  "Read faster by skipping every third word.",
  "Become rich by refusing to understand money.",
];

const leaderboard = [
  "🥔 Potato Guru — 912 stupidity points",
  "🦆 Duck Strategy Analyst — 811 stupidity points",
  "👽 Alien Life Coach — 799 stupidity points",
  "📉 Financial Disaster Intern — 734 stupidity points",
];

type HistoryItem = {
  question: string;
  answer: string;
  expert: string;
};

const STORAGE_KEY = "natural-stupidity-stats";

export default function Home() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [expert, setExpert] = useState("🤓 Professor Nonsense");
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [hallOfFame, setHallOfFame] = useState(initialHallOfFame);
  const [isLoading, setIsLoading] = useState(false);
  const [counter, setCounter] = useState(1247);
  const [legendaryCount, setLegendaryCount] = useState(73);
  const [peakCount, setPeakCount] = useState(21);
  const [rating, setRating] = useState("");
  const [streak, setStreak] = useState(1);
  const [achievement, setAchievement] = useState("");
  const [roastMode, setRoastMode] = useState(false);

  const [dailyIdea] = useState(
    dailyBadIdeas[Math.floor(Math.random() * dailyBadIdeas.length)]
  );

  const [worstDaily] = useState(
    worstAdviceOfTheDay[Math.floor(Math.random() * worstAdviceOfTheDay.length)]
  );

  function pickRandom<T>(items: T[]) {
    return items[Math.floor(Math.random() * items.length)];
  }

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);

    if (saved) {
      const data = JSON.parse(saved);

      setCounter(data.counter ?? 1247);
      setLegendaryCount(data.legendaryCount ?? 73);
      setPeakCount(data.peakCount ?? 21);
      setHallOfFame(data.hallOfFame ?? initialHallOfFame);
      setStreak(data.streak ?? 1);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        counter,
        legendaryCount,
        peakCount,
        hallOfFame,
        streak,
      })
    );
  }, [counter, legendaryCount, peakCount, hallOfFame, streak]);

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

  function surpriseMe() {
    setQuestion(pickRandom(randomQuestions));
  }

  function unlockAchievement(nextCounter: number) {
    if (nextCounter === 1250) {
      setAchievement("🏅 Achievement Unlocked: Apprentice of Bad Ideas");
    } else if (nextCounter === 1260) {
      setAchievement("🥔 Achievement Unlocked: Potato Investor");
    } else if (nextCounter === 1300) {
      setAchievement("👑 Achievement Unlocked: Supreme Idiot Tier");
    }
  }

  function recordLegendary() {
    if (!answer) return;
    setLegendaryCount((prev) => prev + 1);
    setRating("⭐ Legendary stupidity recorded.");
    setHallOfFame((prev) => [answer, ...prev.slice(0, 4)]);
  }

  function recordPeak() {
    if (!answer) return;
    setPeakCount((prev) => prev + 1);
    setRating("🤡 Peak stupidity achieved.");
    setHallOfFame((prev) => [answer, ...prev.slice(0, 4)]);
  }

  async function generateBadAdvice() {
    if (!question.trim() || isLoading) return;

    try {
      setIsLoading(true);
      setRating("");
      setAchievement("");

      const randomMessage = pickRandom(loadingMessages);
      const randomExpert = pickRandom(experts);

      setExpert(randomExpert);
      setAnswer(randomMessage);

      const promptQuestion = roastMode
        ? `Roast me in a funny, harmless way. User context: ${question}`
        : question;

      const response = await fetch("/api/stupidity", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question: promptQuestion }),
      });

      const data = await response.json();

      if (!response.ok) {
        setAnswer(data.error || "Something went wrong.");
        return;
      }

      const nextCounter = counter + 1;

      setAnswer(data.answer);
      setCounter(nextCounter);
      setStreak((prev) => prev + 1);
      unlockAchievement(nextCounter);

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
      setAchievement("");
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

      const nextCounter = counter + 1;

      setAnswer(data.answer);
      setCounter(nextCounter);
      unlockAchievement(nextCounter);

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
    <main style={mainStyle}>
      <div style={logoWrap}>
        <div style={logoBadge}>NS</div>
        <div>
          <h1 style={title}>Natural Stupidity™</h1>
          <p style={tagline}>
            The internet&apos;s most confident source of terrible advice.
          </p>
        </div>
      </div>

      <p style={{ fontSize: "18px", marginTop: "25px" }}>
        Ask anything. Receive terrible advice with dangerous confidence.
      </p>

      <div style={statsGrid}>
        <div style={statCard}>🧠 {counter.toLocaleString()} terrible decisions</div>
        <div style={statCard}>⭐ {legendaryCount} legendary answers</div>
        <div style={statCard}>🤡 {peakCount} peak stupidity moments</div>
        <div style={statCard}>🔥 {streak} stupidity streak</div>
      </div>

      <div style={dailyCard}>
        <strong>💡 Today&apos;s Bad Idea:</strong>
        <p style={{ marginBottom: 0 }}>{dailyIdea}</p>
      </div>

      <div style={dailyCard}>
        <strong>🏆 Worst Advice Of The Day:</strong>
        <p style={{ marginBottom: 0 }}>{worstDaily}</p>
      </div>

      <textarea
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            generateBadAdvice();
          }
        }}
        placeholder={
          roastMode
            ? "Tell Natural Stupidity something about yourself..."
            : "Ask your question..."
        }
        rows={4}
        style={textareaStyle}
      />

      <br />

      <button
        onClick={generateBadAdvice}
        disabled={!question.trim() || isLoading}
        style={{
          ...mainButton,
          backgroundColor: isLoading ? "#6b7280" : "#8b5cf6",
          cursor: isLoading ? "not-allowed" : "pointer",
        }}
      >
        {isLoading ? "Please wait badly..." : "Generate Bad Advice"}
      </button>

      <button onClick={surpriseMe} style={surpriseButton}>
        🎰 Surprise Me
      </button>

      <button
        onClick={() => setRoastMode((prev) => !prev)}
        style={{
          ...surpriseButton,
          backgroundColor: roastMode ? "#f97316" : "#be123c",
        }}
      >
        🔥 Roast Mode: {roastMode ? "ON" : "OFF"}
      </button>

      {achievement && <div style={achievementCard}>{achievement}</div>}

      {answer && (
        <div style={answerCard}>
          <strong>{expert} says:</strong>
          <p style={{ fontSize: "19px", lineHeight: "1.55" }}>{answer}</p>

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

                <button onClick={recordLegendary} style={ratingButton}>
                  ⭐ Legendary
                </button>

                <button onClick={recordPeak} style={ratingButton}>
                  🤡 Peak Stupidity
                </button>
              </div>

              {rating && <p style={ratingText}>{rating}</p>}
            </>
          )}
        </div>
      )}

      <section style={sectionStyle}>
        <h3 style={sectionTitle}>🏆 Hall of Fame</h3>

        {hallOfFame.map((item, index) => (
          <div key={index} style={listCard}>
            <strong>{index + 1}.</strong> {item}
          </div>
        ))}
      </section>

      <section style={sectionStyle}>
        <h3 style={sectionTitle}>🌍 Global Stupidity Rankings</h3>

        {leaderboard.map((item, index) => (
          <div key={index} style={listCard}>
            <strong>{index + 1}.</strong> {item}
          </div>
        ))}
      </section>

      {history.length > 0 && (
        <section style={sectionStyle}>
          <h3 style={sectionTitle}>Recent Bad Decisions</h3>

          {history.map((item, index) => (
            <div key={index} style={listCard}>
              <strong>{item.expert}</strong>
              <p style={{ color: "#d1d5db" }}>Q: {item.question}</p>
              <p>A: {item.answer}</p>
            </div>
          ))}
        </section>
      )}

      <section style={sectionStyle}>
        <h3 style={sectionTitle}>💬 Fake Testimonials</h3>

        {testimonials.map((item, index) => (
          <div key={index} style={listCard}>
            <p>&quot;{item.text}&quot;</p>
            <strong>— {item.author}</strong>
          </div>
        ))}
      </section>

      <p style={{ marginTop: "40px", fontSize: "13px", color: "#d1d5db" }}>
        Satire only. Do not follow this advice. Seriously.
      </p>
    </main>
  );
}

const mainStyle = {
  minHeight: "100vh",
  background:
    "radial-gradient(circle at top, #4c1d95 0%, #111827 38%, #030712 100%)",
  color: "white",
  textAlign: "center" as const,
  fontFamily: "Arial",
  padding: "38px 20px",
};

const logoWrap = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "18px",
  flexWrap: "wrap" as const,
};

const logoBadge = {
  width: "110px",
  height: "110px",
  borderRadius: "32px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "42px",
  fontWeight: "900",
  letterSpacing: "-2px",
  background:
    "linear-gradient(135deg, #8b5cf6 0%, #ec4899 50%, #f97316 100%)",
  color: "white",
  boxShadow:
    "0 0 20px rgba(139,92,246,0.7), 0 0 50px rgba(236,72,153,0.4)",
  border: "1px solid rgba(255,255,255,0.25)",
};

const title = {
  fontSize: "72px",
  margin: 0,
  letterSpacing: "-3px",
  fontWeight: "900",
};

const tagline = {
  color: "#ddd6fe",
  marginTop: "8px",
  fontWeight: "bold",
  fontSize: "18px",
};

const statsGrid = {
  maxWidth: "900px",
  margin: "24px auto",
  display: "flex",
  gap: "12px",
  justifyContent: "center",
  flexWrap: "wrap" as const,
};

const statCard = {
  padding: "12px 16px",
  backgroundColor: "rgba(17, 24, 39, 0.72)",
  border: "1px solid rgba(167,139,250,0.28)",
  borderRadius: "999px",
  color: "#ddd6fe",
  fontWeight: "bold",
};

const dailyCard = {
  maxWidth: "760px",
  margin: "16px auto",
  padding: "16px",
  borderRadius: "16px",
  backgroundColor: "rgba(76, 29, 149, 0.35)",
  border: "1px solid rgba(167,139,250,0.35)",
  boxShadow: "0 12px 35px rgba(0,0,0,0.25)",
};

const textareaStyle = {
  width: "80%",
  maxWidth: "760px",
  padding: "18px",
  fontSize: "18px",
  borderRadius: "18px",
  marginTop: "12px",
  backgroundColor: "#111827",
  color: "white",
  border: "2px solid #a78bfa",
  outline: "none",
  boxShadow: "0 0 26px rgba(167, 139, 250, 0.55)",
  resize: "vertical" as const,
};

const mainButton = {
  marginTop: "22px",
  marginRight: "10px",
  padding: "16px 34px",
  fontSize: "20px",
  fontWeight: "bold",
  color: "white",
  border: "none",
  borderRadius: "16px",
  boxShadow: "0 10px 28px rgba(139, 92, 246, 0.45)",
};

const surpriseButton = {
  marginTop: "22px",
  marginRight: "10px",
  padding: "16px 24px",
  fontSize: "18px",
  fontWeight: "bold",
  backgroundColor: "#db2777",
  color: "white",
  border: "none",
  borderRadius: "16px",
  cursor: "pointer",
  boxShadow: "0 10px 28px rgba(219, 39, 119, 0.35)",
};

const answerCard = {
  maxWidth: "760px",
  margin: "34px auto",
  padding: "26px",
  backgroundColor: "rgba(31, 41, 55, 0.82)",
  borderRadius: "22px",
  border: "1px solid rgba(167, 139, 250, 0.4)",
  boxShadow: "0 24px 55px rgba(0,0,0,0.4)",
  backdropFilter: "blur(10px)",
};

const achievementCard = {
  maxWidth: "760px",
  margin: "24px auto",
  padding: "16px",
  borderRadius: "16px",
  backgroundColor: "rgba(249, 115, 22, 0.22)",
  border: "1px solid rgba(249, 115, 22, 0.55)",
  color: "#fed7aa",
  fontWeight: "bold",
};

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

const ratingText = {
  color: "#c4b5fd",
  marginTop: "12px",
  fontWeight: "bold",
};

const sectionStyle = {
  maxWidth: "760px",
  margin: "30px auto",
  textAlign: "left" as const,
};

const sectionTitle = {
  color: "#c4b5fd",
};

const listCard = {
  marginTop: "12px",
  padding: "14px",
  backgroundColor: "rgba(17, 24, 39, 0.8)",
  borderRadius: "12px",
  border: "1px solid rgba(255,255,255,0.08)",
};